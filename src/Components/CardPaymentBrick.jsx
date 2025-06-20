import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


export default function CardPaymentBrick({ publicKey, amount = 100, payerEmail = "", onPaymentSuccess, onPaymentError }) {
  const brickContainerRef = useRef(null);

  useEffect(() => {
    const initializeBrick = async () => {
      if (!window.MercadoPago) return;

      const mp = new window.MercadoPago(publicKey, {
        locale: "pt-BR",
      });

      const bricksBuilder = mp.bricks();

      await bricksBuilder.create("cardPayment", brickContainerRef.current.id, {
        initialization: {
          amount,
          payer: {
            email: payerEmail,
          },
        },
        customization: {
          visual: {
            style: {
              theme: "dark",
            },
          },
          paymentMethods: {
            maxInstallments: 1,
          },
        },
        callbacks: {
          onReady: () => {
            console.log("Brick pronto!");
          },
          onSubmit: (cardFormData) => {
            return new Promise((resolve, reject) => {
              fetch("http://localhost:8080/api/mercadopago/cartao", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("Pagamento enviado", data);
                  onPaymentSuccess?.(data);
                  resolve();
                })
                .catch((err) => {
                  console.error("Erro no pagamento", err);
                  onPaymentError?.(err);
                  reject();
                });
            });
          },
          onError: (error) => {
            console.error("Erro no Brick", error);
            onPaymentError?.(error);
          },
        },
      });
    };

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.onload = initializeBrick;
      document.body.appendChild(script);
    };

    if (!window.MercadoPago) {
      loadScript();
    } else {
      initializeBrick();
    }
  }, [publicKey, amount, payerEmail]);

  return (
    <div className="w-full max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-semibold mb-4">Pagamento com Cartão</h2>
      <div id="cardPaymentBrick_container" ref={brickContainerRef} />
    </div>
  );
}
