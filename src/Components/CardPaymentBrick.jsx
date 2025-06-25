import React, { useEffect, useRef } from "react";

export default function CardPaymentBrick({
  publicKey,
  amount = 100,
  payerEmail = "",
  compraId,
  clienteId,
  onPaymentSuccess,
  onPaymentError,
}) {
  const brickContainerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const initializeBrick = async () => {
      if (!window.MercadoPago || !brickContainerRef.current) return;

      brickContainerRef.current.innerHTML = ""; // limpa container antes

      const mp = new window.MercadoPago(publicKey, { locale: "pt-BR" });
      const bricksBuilder = mp.bricks();

      await bricksBuilder.create("cardPayment", brickContainerRef.current.id, {
        initialization: {
          amount,
          payer: { email: payerEmail },
        },
        customization: {
          visual: { style: { theme: "dark" } },
          paymentMethods: { maxInstallments: 1 },
        },
        callbacks: {
          onReady: () => {
            console.log("Brick pronto!");
          },
          onSubmit: (cardFormData) => {
            return new Promise((resolve, reject) => {
              const payload = {
                ...cardFormData,
                compraId: compraId, // compraId vindo das props
                clienteId: clienteId,
                transaction_amount: amount, // e não "valor"

                payer: {
                  ...cardFormData.payer,
                  email: payerEmail,
                },
              };
              console.log("Payload a ser enviado para o backend:", payload);
              fetch("http://localhost:8080/api/mercadopago/cartao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              })
                .then((res) => {
                  if (!res.ok) {
                    throw new Error(
                      `Erro na resposta do servidor: ${res.statusText}`
                    );
                  }
                  return res.json();
                })
                .then((data) => {
                  console.log("Resposta do backend:", data);
                  onPaymentSuccess?.(data);
                  resolve();
                })
                .catch((err) => {
                  console.error("Erro no fetch:", err);
                  onPaymentError?.(err);
                  reject();
                });
            });
          },
          onError: (error) => {
            onPaymentError?.(error);
          },
        },
      });
    };

    const loadScript = () => {
      if (scriptRef.current) return; // evita múltiplos scripts
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;
      script.onload = initializeBrick;
      document.body.appendChild(script);
      scriptRef.current = script;
    };

    if (!window.MercadoPago) {
      loadScript();
    } else {
      initializeBrick();
    }

    return () => {
      // Só limpar o container no cleanup, mas NÃO remover o script
      if (brickContainerRef.current) {
        brickContainerRef.current.innerHTML = "";
      }
    };
  }, [
    publicKey,
    amount,
    payerEmail,
    compraId,
    onPaymentSuccess,
    onPaymentError,
  ]);

  return (
    <div className="w-full max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-semibold mb-4">
        Pagamento com Cartão
      </h2>
      <div id="cardPaymentBrick_container" ref={brickContainerRef} key={compraId} />
    </div>
  );
}
