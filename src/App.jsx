import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/index";
//import Auth from "./Pages/Auth/index";
import UserForm from "./Components/UserForm"; 
import FilmesHorarios from "./Pages/FilmesHorarios";
import Login from "./Pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<UserForm />} />
        <Route path="/filmes" element={<FilmesHorarios />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
