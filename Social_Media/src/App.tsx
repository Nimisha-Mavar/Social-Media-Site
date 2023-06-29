import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./componets/Home";
import { Login } from "./componets/Login";
import { Navbar } from "./componets/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
