import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProductUpload from "./pages/ProductUpload";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<ProductUpload />} />
      </Routes>
    </Router>
  );
};

export default Main;
