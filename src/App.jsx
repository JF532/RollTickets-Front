import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/index";
//import Auth from "./Pages/Auth/index";
import UserForm from "./Components/UserForm"; // <- também ajustar aqui!


function App() {
  return (

    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/cadastro" element={<UserForm />} /> {/* Rota para o formulário */}
      </Routes>
    </Router>
  );
}

export default App;
