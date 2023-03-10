import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import BtnLink from 'components/common/BtnLink/BtnLink';
import ProductDetailsCard from 'components/ProductDetailsCard/ProductDetailsCard';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import './ProductDetailsPage.scss';

const ProductDetailsPage = ({ products }) => {
  const { productName } = useParams();
  const product = products.find(({ name }) => name === productName);

  return (
    <main>
      <Section type="section-details">
        <Container>
          <div className="product-details">
            <BtnLink
              to="/products"
              text="назад до товарів"
              type="btn-back"
              icon={<HiArrowNarrowLeft className="icon" />}
            />
            <ProductDetailsCard product={product} />
          </div>
        </Container>
      </Section>
    </main>
  );
};

ProductDetailsPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetailsPage;
