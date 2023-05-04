import "./App.css";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">
          <h1>Youtube</h1>
        </Link>
        <div>
          <Link to="/AboutMe">AboutMe</Link>
          <Link to="/ContactMe">ContactMe</Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
