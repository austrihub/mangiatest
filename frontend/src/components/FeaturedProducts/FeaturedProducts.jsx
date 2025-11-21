import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products"; // <--- usamos products
import './FeaturedProducts.css';
import producto1 from "../../assets/products/producto1.jpg";
import producto2 from "../../assets/products/producto2.jpg";
import producto3 from "../../assets/products/producto3.jpg";

export default function FeaturedProducts() {
  // filtra solo los productos destacados
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="featured-products-container">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="products-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
