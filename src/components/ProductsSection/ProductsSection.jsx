import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductCard from "components/ProductCard/ProductsCard";
import "./ProductsSection.scss";

const ProductsSection = ({ products }) => {
  return (
    <Section>
      <Container>
        <h2 className="visually-hidden">Матраци</h2>
        <ul className="list-products">
          {products.map(
            ({ id, name, img1x, img2x, oldPrice, newPrice, sale }) => (
              <li key={id} className="item">
                <Link to={`products/${name}`}>
                  <ProductCard
                    name={name}
                    img1x={img1x}
                    img2x={img2x}
                    oldPrice={oldPrice}
                    newPrice={newPrice}
                    sale={sale}
                  />
                </Link>
              </li>
            )
          )}
        </ul>
      </Container>
    </Section>
  );
};

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsSection;
