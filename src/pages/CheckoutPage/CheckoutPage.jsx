// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectProductInCart,
  selectCalculateAmount,
} from 'redux/cart/selectors';
import Logo from 'components/common/Logo/Logo';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import CheckoutProductsList from 'components/CheckoutProductsList/CheckoutProductsList';
import CartAmount from 'components/CartAmount/CartAmount';
import OrderForm from 'components/OrderForm/OrderForm';
import BtnLink from 'components/common/BtnLink/BtnLink';
import { AiOutlineLeft } from 'react-icons/ai';
import './CheckoutPage.scss';
import { submitInfo } from 'services/fetchTelegram';
import { toast } from 'react-hot-toast';

const CheckoutPage = props => {
  const location = useLocation();
  const productsCart = useSelector(selectProductInCart);
  const amount = useSelector(selectCalculateAmount);

  const handleSubmit = async values => {
    let message = `<b>Заявка з сайту!</b>\n`;
    message += `<b>Відправник: </b> ${values.name}\n`;
    message += `<b>Телефон: </b> ${values.phone}\n`;
    message += productsCart
      .map(item => {
        return `<b>Товар: </b> ${item.name} ${item.size} (К-сть: ${item.quantity})\n`;
      })
      .join('');

    try {
      await submitInfo(message);
      toast.success(
        'Готово 😎. Очікуйте на дзвінок менеджера в найближчий час.',
        {
          duration: 4000,
        }
      );
    } catch {
      toast.error(
        'Щось пішло не так 😒. Спробуйте ще раз, або перезавантажте сторінку.'
      );
    }
  };

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
      <Section type="section-checkout">
        <Container>
          <div className="checkout-nav"></div>
          <h2 className="section-title checkout-title">
            Оформлення замовлення
          </h2>
          <CheckoutProductsList productsCart={productsCart} />
          <div className="amount-box">
            <CartAmount
              text="До оплати без доставки"
              sale={amount.sale}
              cost={amount.cost}
            />
          </div>
          <OrderForm onSubmit={handleSubmit} />
        </Container>
      </Section>
      <footer className="footer">
        <Container>
          <p className="policy-text">
            Натискаючи на кнопку "Оформити замовлення", Ви погоджуєтесь з{' '}
            <BtnLink
              to="/policy"
              type="policy-link"
              text="політикою конфіденційності"
            />{' '}
            website.com
          </p>
        </Container>
      </footer>
    </main>
  );
};

CheckoutPage.propTypes = {};

export default CheckoutPage;
