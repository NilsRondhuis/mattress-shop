import PropTypes from 'prop-types';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import './CheckoutProductsList.scss';

const CheckoutProductsList = ({ productsCart, onToggle }) => {
  return (
    <>
      <ul className="cart-product-list">
        {productsCart.map(
          ({
            id,
            name,
            img1x,
            img2x,
            size,
            sale,
            oldPrice,
            newPrice,
            quantity,
          }) => (
            <li key={id} className="item">
              <CheckoutProduct
                id={id}
                name={name}
                img1x={img1x}
                img2x={img2x}
                size={size}
                oldPrice={oldPrice}
                newPrice={newPrice}
                onToggle={onToggle}
                quantity={quantity}
                sale={sale}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

CheckoutProductsList.propTypes = {
  productsCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img1x: PropTypes.string,
      img2x: PropTypes.string,
      size: PropTypes.string,
      oldPrice: PropTypes.number,
      newPrice: PropTypes.number,
    })
  ).isRequired,
  onToggle: PropTypes.func,
};

export default CheckoutProductsList;
