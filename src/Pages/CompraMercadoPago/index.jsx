import { useLocation } from "react-router-dom";
import CardPaymentBrick from "../../Components/CardPaymentBrick";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function CompraMercadoPago() {
  const navigate = useNavigate();
  const location = useLocation();
  let { compraId, valor, email } = location.state || {};

  if (!compraId || !valor || !email) {
    const dadosSalvos = JSON.parse(localStorage.getItem("compraInfo"));
    if (dadosSalvos) {
      compraId = dadosSalvos.compraId;
      valor = dadosSalvos.valor;
      email = dadosSalvos.email;
    }
  }

  if (!compraId || !valor || !email) {
    return (
      <div className="text-center text-red-500 mt-20">
        Dados de pagamento não encontrados.
      </div>
    );
  }

  return (
    <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />
      <CardPaymentBrick
        publicKey="TEST-5efd8207-147e-439c-b6eb-c19c8e90b241"
        amount={valor}
        payerEmail={email}
        compraId={compraId}
        onPaymentSuccess={(dados) => {
          fetch("http://localhost:8080/api/mercadopago/confirmar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentId: dados.id,
              compraId: compraId,
            }),
          })
            .then((res) => res.json())
            .then((resposta) => {
              if (resposta.status === "approved") {
                alert("✅ Pagamento confirmado com sucesso!");
                localStorage.removeItem("compraInfo");
                navigate("/meus-ingressos");
              } else {
                alert("⚠️ Pagamento não aprovado: " + resposta.message);
              }
            })
            .catch((err) => {
              console.error("Erro ao confirmar pagamento:", err);
              alert("❌ Erro ao confirmar pagamento. Tente novamente.");
            });
        }}
      />
      <Footer />
    </div>
  );
}
