import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Eventos from "./pages/Eventos";
import Ganadores from "./pages/Ganadores";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Eventos</Link> | <Link to="/ganadores">Ganadores</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Eventos />} />
        <Route path="/ganadores" element={<Ganadores />} />
      </Routes>
    </Router>
  );
}

export default App;
