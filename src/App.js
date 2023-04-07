import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Mission from "./components/Mission";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/Team" element={<Team />} />
        <Route path="/about/Mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
