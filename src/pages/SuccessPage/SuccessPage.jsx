import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrderId } from 'redux/cart/selectors';
import { clearCart, updateOrderId } from 'redux/cart/slice';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import BtnLink from 'components/common/BtnLink/BtnLink';
import './SuccessPage.scss';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const orderId = useSelector(selectOrderId);

  useEffect(() => {
    return () => {
      dispatch(clearCart());
      dispatch(updateOrderId());
    };
  }, [dispatch]);

  return (
    <main>
      <Section type="success-section">
        <Container>
          <FlexContainer type="flex-container">
            <div className="content-box">
              <h2 className="section-title">Готово 😎</h2>
              <p className="info-text">
                Замовлення <span className="bold">№ {orderId}</span> прийняте,
                готуємо його до відправлення, очікуйте на дзвінок менеджера.
              </p>
              <p className="thank-text">Дякуємо за Ваш вибір 🤗</p>
              <BtnLink to="/" text="На головну сторінку" />
            </div>
          </FlexContainer>
        </Container>
      </Section>
    </main>
  );
};

export default SuccessPage;
