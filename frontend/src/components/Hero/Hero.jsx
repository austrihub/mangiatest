import React, { useState, useEffect } from "react";
import mangia1 from "../../assets/hero/mangia1.png";
import mangia2 from "../../assets/hero/mangia2.png";
import mangia3 from "../../assets/hero/mangia3.png";
import './Hero.css';

export default function Hero() {
  const images = [mangia1, mangia2, mangia3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // cambia cada 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        overflow: "hidden",
      }}
    >
      <img
        src={images[current]}
        alt="Hero Mangia"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.6s ease-in-out",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          background: "rgba(0,0,0,0.45)",
          padding: "20px 30px",
          borderRadius: "10px",
          backdropFilter: "blur(3px)",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          Refrigerios Mangia
        </h1>
        <p>La mejor opción para tu evento, empresa o colegio.</p>
      </div>
    </section>
  );
}
