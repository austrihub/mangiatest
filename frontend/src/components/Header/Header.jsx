import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Header.css";
import "./CartIcon.css";

export default function Header() {
  const { getCartCount } = useAppContext();

  return (
    <header className="header">
      {/* LOGO */}
      <h2 className="header-logo">Mangia</h2>

      {/* NAV MENU */}
      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/pedidos">Pedidos</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/nosotros">Nosotros</Link>
      </nav>

      {/* CTA + CARRITO */}
      <div className="header-actions">

        {/* BOTÓN CTA */}
        <Link to="/pedidos" className="header-cta">
          Haz tu pedido
        </Link>

        {/* CARRITO */}
        <Link to="/carrito" className="cart-icon">
          <span className="cart-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="19" r="1" />
              <circle cx="20" cy="19" r="1" />
              <path d="M3 6h2l2 10h11l2 -8h-14" />
              <path d="M6 6l1 -3h13" />
            </svg>

            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </span>
        </Link>

      </div>
    </header>
  );
}
