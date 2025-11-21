// src/components/ProductCard/ProductCard.jsx
import React from "react";
import { useAppContext } from "../../context/AppContext"; // ruta relativa: ajusta si tu estructura es distinta
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useAppContext();

  const handleAdd = () => {
    // Añadimos cantidad 1 por defecto; puedes cambiar esto por un selector de qty luego
    addToCart(product, 1);
    // opción: feedback simple (alert), lo cambiaremos por un toast/progress luego
    // alert(`${product.name} añadido al carrito`);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-title">{product.name}</h3>

      <p className="product-price">
        ${product.price.toLocaleString("es-CO")}
      </p>

      <p className="product-description">{product.description}</p>

      <button className="btn-primary" onClick={handleAdd}>
        Añadir al carrito
      </button>
    </div>
  );
}
