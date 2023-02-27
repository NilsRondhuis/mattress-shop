import PropTypes from 'prop-types';
import Hero from 'components/HeroSection/HeroSection';
import ProductsSection from 'components/ProductsSection/ProductsSection';
import Help from 'components/HelpSection/HelpSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import Reviews from 'components/ReviewsSection/ReviewsSection';

const HomePage = ({ products }) => {
  return (
    <main>
      <Hero />
      <ProductsSection products={products} />
      <Help />
      <AdvantagesSection />
      <Reviews />
    </main>
  );
};

HomePage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
