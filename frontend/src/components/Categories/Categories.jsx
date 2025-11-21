import React from "react";
import './Categories.css';
import corporativosIcon from "../../assets/icons/categories/corporativos.svg";
import infantilesIcon from "../../assets/icons/categories/infantiles.svg";
import saludablesIcon from "../../assets/icons/categories/saludables.svg";
import cumpleanosIcon from "../../assets/icons/categories/cumpleanos.svg";
import personalizadosIcon from "../../assets/icons/categories/personalizados.svg";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section id="nuestros-menus" className="categories-section">
      <h2>Nuestros Menús</h2>

      <div className="categories">

        {/* Corporativos */}
        <article>
  <Link to="/corporativos" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={corporativosIcon} alt="Refrigerios y desayunos corporativos para empresas"
 className="category-icon" />
    <h3>Corporativos</h3>
  </Link>
</article>


        {/* Infantiles */}
        <article>
  <Link to="/infantiles" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={infantilesIcon} alt="Desayunos y cajas sorpresa infantiles para niños"
 className="category-icon" />
    <h3>Infantiles</h3>
  </Link>
</article>


        {/* Saludables */}
        <article>
  <Link to="/saludables" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={saludablesIcon} alt="Opciones de desayunos y snacks saludables"
 className="category-icon" />
    <h3>Saludables</h3>
  </Link>
</article>


        {/* Cumpleaños */}
        <article>
  <Link to="/cumpleanos" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={cumpleanosIcon} alt="Refrigerios y opciones de catering para cumpleaños"
 className="category-icon" />
    <h3>Cumpleaños</h3>
  </Link>
</article>


        {/* Personalizados */}
        <article>
  <Link to="/personalizados" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={personalizadosIcon} alt="Catering y refrigerios personalizados para ocasiones especiales"
 className="category-icon" />
    <h3>Personalizados</h3>
  </Link>
</article>


      </div>
    </section>
  );
}   