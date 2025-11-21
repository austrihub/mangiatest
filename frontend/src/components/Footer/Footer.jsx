import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-content">

        {/* COLUMNA 1 - LOGO Y DESCRIPCIÓN */}
        <div className="footer-section">
          <h3 className="footer-logo">Mangia</h3>
          <p className="footer-text">
            Sabores artesanales, ingredientes frescos y amor en cada detalle.
          </p>
        </div>

        {/* COLUMNA 2 - ENLACES */}
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/menu">Menú</Link></li>
            <li><Link to="/pedidos">Haz tu pedido</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3 - CONTACTO */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📞 301 000 0000</p>
          <p>📍 Medellín, Colombia</p>
          <p>✉️ contacto@mangia.com</p>
        </div>

        {/* COLUMNA 4 - REDES SOCIALES */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mangia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
