import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      {/* Renderiza o Header em todas as rotas */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* Renderiza o Footer em todas as rotas */}
      <Footer />
    </Router>
  );
}

export default App;
