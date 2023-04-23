import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createOldPrice } from 'services/createOldPrice';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import ProductCard from 'components/ProductCard/ProductsCard';
import BtnLink from 'components/common/BtnLink/BtnLink';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import './ProductsSection.scss';

const ProductsSection = ({ products }) => {
  return (
    <Section>
      <Container>
        <h2 className="visually-hidden">Матраци</h2>
        <ul className="list-products">
          {products
            .slice(0, 4)
            .map(({ id, name, img1x, img2x, imagesList, newPrice, sale }) => (
              <li key={id} className="item">
                <Link to={`products/${name}`}>
                  <ProductCard
                    name={name}
                    img1x={img1x}
                    img2x={img2x}
                    oldPrice={createOldPrice(20, newPrice)}
                    newPrice={newPrice}
                    sale={sale}
                    imagesList={imagesList}
                  />
                </Link>
              </li>
            ))}
        </ul>
        <FlexContainer type="section-products-container">
          <BtnLink to="/products" text="Більше товарів" />
        </FlexContainer>
      </Container>
    </Section>
  );
};

ProductsSection.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img1x: PropTypes.string,
      img2x: PropTypes.string,
      oldPrice: PropTypes.number,
      newPrice: PropTypes.number,
      sale: PropTypes.bool,
    })
  ).isRequired,
};

export default ProductsSection;
