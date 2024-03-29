import { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  selectProductInCart,
  selectCalculateAmount,
  selectOrderId,
} from 'redux/cart/selectors';
import { submitInfo } from 'services/fetchTelegram';
import { checkAtOwnSize } from 'services/checkAtOwnSize';
import Logo from 'components/common/Logo/Logo';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import CheckoutProductsList from 'components/CheckoutProductsList/CheckoutProductsList';
import CartAmount from 'components/CartAmount/CartAmount';
import OrderForm from 'components/OrderForm/OrderForm';
import PolicyLink from 'components/common/PolicyLink/PolicyLink';
import { AiOutlineLeft } from 'react-icons/ai';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const location = useLocation();
  const productsCart = useSelector(selectProductInCart);
  const orderId = useSelector(selectOrderId);
  const amount = useSelector(selectCalculateAmount);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

  const handleSubmit = async values => {
    let message = `<b>Заявка з сайту!</b>\n`;
    message += `<b>№: </b>${orderId.toString()}\n`;
    message += `<b>Відправник: </b>${values.name}\n`;
    message += `<b>Телефон: </b>${values.phone}\n`;
    message += productsCart
      .map(
        item =>
          `<b>Товар: </b> ${item.name} ${
            checkAtOwnSize(item.size) ? 'розмір під замовлення' : item.size
          } (К-сть: ${item.quantity})\n<b>Ціна: </b> ${item.newPrice} грн.\n
          `
      )
      .join('')
      .replace(/\n\s+/g, '\n');
    message += `<b>Коментар: </b>${values.comment}`;

    try {
      await submitInfo(message);
      window.dataLayer.push({ event: 'submitContacts', price: amount.cost });
      setIsSuccessSubmit(true);
    } catch {
      toast.error(
        'Щось пішло не так 😒. Спробуйте ще раз, або перезавантажте сторінку.',
        { duration: 3000 }
      );
    }
  };

  if (isSuccessSubmit) {
    return <Navigate to="/order-info" />;
  }

  return (
    <main className="checkout-page">
      <header>
        <nav className="checkout-nav">
          <Link
            className="back-link"
            to={location.state?.from ?? '/'}
            state={{ backFromCheckout: true }}
          >
            <AiOutlineLeft className="icon" />
          </Link>
          <Logo place="other" />
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
            <PolicyLink text="політикою конфіденційності" /> markiz-matress.com
          </p>
        </Container>
      </footer>
    </main>
  );
};

export default CheckoutPage;
