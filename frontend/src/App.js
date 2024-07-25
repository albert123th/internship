import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Pagenotfound from "./pages/Pagenotfound";
import Data from "./pages/Data";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Data />} />
          <Route path="*" element={<Pagenotfound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
