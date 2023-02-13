// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'components/common/Logo/Logo';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import { AiOutlineLeft } from 'react-icons/ai';
import './CheckoutPage.scss';

const CheckoutPage = props => {
  const location = useLocation();

  return (
    <main className="checkout-page">
      <header className="header">
        <nav className="checkout-nav">
          <Link
            className="back-link"
            to={location.state.from}
            state={{ backFromCheckout: true }}
          >
            <AiOutlineLeft className="icon" />
          </Link>
          <Logo />
        </nav>
      </header>
      <Section>
        <Container>
          <div className="checkout-nav"></div>
          <h2 className="section-title checkout-title">
            Оформлення замовлення
          </h2>
        </Container>
      </Section>
    </main>
  );
};

CheckoutPage.propTypes = {};

export default CheckoutPage;
