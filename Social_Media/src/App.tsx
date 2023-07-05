import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./componets/Home";
import { Login } from "./componets/Login";
import { Navbar } from "./componets/Navbar";
import { User } from "./componets/User";
import { CreatePost } from "./componets/CreatePost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
