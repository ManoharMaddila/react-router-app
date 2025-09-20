import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>React Router Example</h1>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
