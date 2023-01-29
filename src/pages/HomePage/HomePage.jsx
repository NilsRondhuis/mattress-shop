import React from "react";
import PropTypes from "prop-types";
import Hero from "components/HeroSection/HeroSection";
import Help from "components/HelpSection/HelpSection";
import Reviews from "components/ReviewsSection/ReviewsSection";
import ProductsSection from "components/ProductsSection/ProductsSection";

const HomePage = ({ products }) => {
  return (
    <main>
      <Hero />
      <ProductsSection products={products} />
      <Help />
      <Reviews />
    </main>
  );
};

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default HomePage;
