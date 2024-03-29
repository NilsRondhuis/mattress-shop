import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createOldPrice } from 'services/createOldPrice';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import BtnLink from 'components/common/BtnLink/BtnLink';
import ProductCard from 'components/ProductCard/ProductsCard';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import './ProductsCategoryPage.scss';

const ProductsCategoryPage = ({ products }) => {
  return (
    <main>
      <Section type="section-category">
        <Container>
          <BtnLink
            to="/"
            text="на головну сторінку"
            type="btn-back"
            icon={<HiArrowNarrowLeft className="icon" />}
          />
          <h2 className="section-title">Ортопедичні матраци</h2>
          <ul className="list-products">
            {products.map(({ id, name, img1x, img2x, newPrice, sale }) => (
              <li key={id} className="item">
                <Link to={`${name}`}>
                  <ProductCard
                    name={name}
                    img1x={img1x}
                    img2x={img2x}
                    oldPrice={createOldPrice(20, newPrice)}
                    newPrice={newPrice}
                    sale={sale}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
};

ProductsCategoryPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img1x: PropTypes.string.isRequired,
      img2x: PropTypes.string.isRequired,
      newPrice: PropTypes.number.isRequired,
      sale: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ProductsCategoryPage;
