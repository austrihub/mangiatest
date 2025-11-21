// src/pages/CartPage.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useAppContext();

  return (
    <>
      <Header />

      <div style={{ padding: "2rem", maxWidth: 1100, margin: "0 auto" }}>
        <h2>Tu Carrito</h2>

        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div 
                key={item.id}
                style={{
                  borderBottom: "1px solid #e6e6e6",
                  padding: "1rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 8 }}
                    />
                  )}
                  <div>
                    <strong>{item.name}</strong>
                    <div style={{ color: "#666", fontSize: 14 }}>${item.price.toLocaleString("es-CO")} COP</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</button>
                  <span style={{ minWidth: 24, textAlign: "center" }}>{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginLeft: 12, color: "white", background: "#d64b2a", border: "none", padding: "6px 10px", borderRadius: 6, cursor: "pointer" }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 20, textAlign: "right" }}>
              <h3>Total: ${getCartTotal().toLocaleString("es-CO")} COP</h3>
              <button
                style={{
                  marginTop: "1rem",
                  background: "black",
                  color: "white",
                  padding: "0.9rem 1.6rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Realizar pedido
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
