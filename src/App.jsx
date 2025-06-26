import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/index";
//import Auth from "./Pages/Auth/index";
import UserForm from "./Components/UserForm"; 
import FilmesHorarios from "./Pages/FilmesHorarios";
import Login from "./Pages/Login"
import MeusIngressos from "./Pages/MeusIngressos";
import Compra from "./Pages/Compra"
import CompraMercadoPago from "./Pages/CompraMercadoPago"
import Cart from "./Components/Cart";
import AtualizarConta from "./Pages/AtualizarConta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<UserForm />} />
        <Route path="/filmes" element={<FilmesHorarios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meus-ingressos" element={<MeusIngressos/>} />
        <Route path="/compra/:id" element={<Compra />} />
        <Route path="/CompraMercadoPago" element={<CompraMercadoPago />}/>
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/minha-conta" element={<AtualizarConta/>}/>
      </Routes>
    </Router>
  );
}

export default App;
