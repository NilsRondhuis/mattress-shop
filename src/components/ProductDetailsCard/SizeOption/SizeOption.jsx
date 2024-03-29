import PropTypes from 'prop-types';
import { checkAtOwnSize } from 'services/checkAtOwnSize';
import './SizeOption.scss';

const SizeOption = ({ product, currentSize, onUpdateSize }) => {
  return (
    <>
      <p className="choosen-size">
        Розмір: {currentSize} {!checkAtOwnSize(currentSize) && 'см'}{' '}
      </p>
      <ul className="sizes-list">
        {product.sizes.map((size, idx) => (
          <li key={idx} className="item">
            <button
              type="button"
              className={currentSize === size ? 'size-btn active' : 'size-btn'}
              onClick={() => onUpdateSize(size)}
            >
              {size} {!checkAtOwnSize(size) && 'см'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

SizeOption.propTypes = {
  product: PropTypes.shape({
    sizes: PropTypes.arrayOf(PropTypes.string),
  }),
  currentSize: PropTypes.string.isRequired,
  onUpdateSize: PropTypes.func.isRequired,
};

export default SizeOption;
