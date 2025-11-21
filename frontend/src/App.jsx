import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";   
import { AppProvider } from "./context/AppContext";  // ⬅️ importamos el contexto
import "./styles/global.css";
import TestSupabase from "./TestSupabase";


export default function App() {
  return (
    <AppProvider> 
    <TestSupabase/>         {/* ⬅️ Envuelve toda la app */}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrito" element={<CartPage />} /> 
      </Routes>
    </Router>
    </AppProvider>
  );
}
