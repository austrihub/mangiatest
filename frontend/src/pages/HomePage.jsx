import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

export default function HomePage() {
  return (
    <div>
      <Header />

      <Hero />
      <Categories />
      <ContactForm />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
