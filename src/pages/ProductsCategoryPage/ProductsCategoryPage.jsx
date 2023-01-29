import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import BtnLink from "components/BtnLink/BtnLink";
import ProductCard from "components/ProductCard/ProductsCard";
import "./ProductsCategoryPage.scss";

const ProductsCategoryPage = ({ products }) => {
  return (
    <main>
      <Section>
        <Container>
          <div className="product-category">
            <BtnLink
              to="/"
              text="назад на головну"
              type="btn-back"
              icon={<HiArrowNarrowLeft className="icon" />}
            />
            <h2 className="section-title">Ортопедичні матраци</h2>
            <ul className="list-products">
              {products.map(
                ({ id, name, img1x, img2x, oldPrice, newPrice, sale }) => (
                  <li key={id} className="item">
                    <Link to={`${name}`}>
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
          </div>
        </Container>
      </Section>
    </main>
  );
};

ProductsCategoryPage.propTypes = {};

export default ProductsCategoryPage;
