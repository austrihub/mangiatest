import producto1 from "../assets/products/producto1.jpg";
import producto2 from "../assets/products/producto2.jpg";
import producto3 from "../assets/products/producto3.jpg";


// frontend/src/data/products.js
export const products = [
    {
      id: 1,
      name: "Pastel Tres Leches",
      price: 35000,
      image: producto1,
      category: "pasteles",
      featured: true,
      description: "Delicioso pastel tradicional, ideal para celebraciones."
    },
    {
      id: 2,
      name: "Desayuno Sorpresa Premium",
      price: 65000,
      image: producto2,
      category: "desayunos",
      featured: true,
      description: "Caja premium con variedad dulce y salada para 2 personas."
    },
    {
      id: 3,
      name: "Caja de Bocaditos Mixtos",
      price: 42000,
      image: producto3,
      category: "bocaditos",
      featured: true,
      description: "Selección surtida de bocaditos para reuniones."
    },
    {
      id: 4,
      name: "Torta de Chocolate",
      price: 38000,
      image: "/assets/torta-chocolate.jpg",
      category: "pasteles",
      featured: false,
      description: "Clásica torta de chocolate, húmeda y sabrosa."
    }
  ];
  