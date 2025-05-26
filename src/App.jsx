import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/index";
//import Auth from "./Pages/Auth/index";
import UserForm from "./Components/UserForm"; // <- também ajustar aqui!
import FilmesHorarios from "./Pages/FilmesHorarios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<UserForm />} />
        <Route path="/filmes" element={<FilmesHorarios />} />
      </Routes>
    </Router>
  );
}

export default App;
