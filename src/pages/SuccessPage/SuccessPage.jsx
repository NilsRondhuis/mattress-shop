import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrderId } from 'redux/cart/selectors';
import { clearCart, updateOrderId } from 'redux/cart/slice';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import BtnLink from 'components/common/BtnLink/BtnLink';
import sunglassesImg from 'images/icons/sunglasses.png';
import huggingImg from 'images/icons/hugging.png';
import './SuccessPage.scss';

const SuccessPage = props => {
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
              <h2 className="section-title success-title">
                <span className="text">Готово</span>{' '}
                <img
                  src={sunglassesImg}
                  alt="sunglasses"
                  width="28"
                  height="28"
                />
              </h2>
              <p className="info-text">
                Замовлення <span className="bold">№ {orderId}</span> прийняте,
                готуємо його до відправлення, очікуйте на дзвінок менеджера.
              </p>
              <p className="thank-text">
                <span className="text">Дякуємо за Ваш вибір</span>{' '}
                <img src={huggingImg} alt="hugging" width="21" height="21" />
              </p>
              <BtnLink to="/" text="На головну сторінку" />
            </div>
          </FlexContainer>
        </Container>
      </Section>
    </main>
  );
};

export default SuccessPage;
