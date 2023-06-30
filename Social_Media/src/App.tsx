import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./componets/Home";
import { Login } from "./componets/Login";
import { Navbar } from "./componets/Navbar";
import { User } from "./componets/User";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
