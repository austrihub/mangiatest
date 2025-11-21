import { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Crear el contexto
const AppContext = createContext();

// Key para localStorage
const CART_LS_KEY = "mangia_cart_v1";

export function AppProvider({ children }) {
  // Estado global inicial
  const [user, setUser] = useState(null);        // usuario logueado
  const [cart, setCart] = useState([]);          // carrito: [{id, name, price, qty, image, ...}]

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_LS_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.warn("No se pudo cargar el carrito desde localStorage", e);
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem(CART_LS_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn("No se pudo guardar el carrito en localStorage", e);
    }
  }, [cart]);

  // FUNCIONES DEL CARRITO (profesional)
  function addToCart(product, quantity = 1) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        // actualizar cantidad
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + quantity } : p
        );
      } else {
        // nuevo producto (asegurarse de tener qty)
        return [...prev, { ...product, qty: quantity }];
      }
    });
  }

  function updateQuantity(productId, qty) {
    if (qty <= 0) {
      // si qty llega 0 o menos, eliminamos
      removeFromCart(productId);
      return;
    }
    setCart((prev) => prev.map((p) => (p.id === productId ? { ...p, qty } : p)));
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  // Helpers
  function getCartCount() {
    return cart.reduce((sum, p) => sum + (p.qty || 0), 0);
  }

  function getCartTotal() {
    return cart.reduce((sum, p) => sum + (p.qty || 0) * (p.price || 0), 0);
  }

  // AUTH SIMPLIFICADO (temporal)
  function login(userData) {
    setUser(userData);
    // más tarde: guardar token, etc.
  }

  function logout() {
    setUser(null);
    // opcional: clearCart() si el carrito es por usuario en el backend
  }

  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartCount,
        getCartTotal,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// 3️⃣ Hook para usar el contexto fácilmente
export function useAppContext() {
  return useContext(AppContext);
}
