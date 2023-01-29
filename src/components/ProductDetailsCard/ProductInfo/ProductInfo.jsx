import { useState } from "react";
import PropTypes from "prop-types";
import "./ProductInfo.scss";

const options = ["Опис", "Характеристики"];

const ProductInfo = ({ product }) => {
  const [productInfo, setProductInfo] = useState(options[0]);
  const {
    desc1,
    desc2,
    desc3,
    desc4,
    guarantee,
    stiffnessSides,
    stiffness,
    load,
    type,
    typeSpring,
    option,
    cover,
    height,
    coconut,
    latex,
    materialCover,
    layer1,
    layer2,
    layer3,
  } = product;

  const helperYesOrNot = (item) => (item ? "Так" : "Ні");

  return (
    <div className="product-info">
      <div className="options-box">
        {options.map((option, idx) => (
          <button
            key={idx}
            type="button"
            className={
              productInfo === option ? "option-btn active" : "option-btn"
            }
            onClick={() => setProductInfo(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {productInfo === options[0] && (
        <div className="prodcut-about">
          <p className="text">{desc1}</p>
          <p className="text">{desc2}</p>
          <p className="text">{desc3}</p>
          <p className="text">{desc4}</p>
        </div>
      )}
      {productInfo === options[1] && (
        <div className="product-characteristics">
          <ul className="list-characteristics">
            <li className="item">
              <p className="heading">Гарантія на виріб</p>
              <span className="design-line"></span>
              <p>{guarantee} місяців</p>
            </li>
            <li className="item">
              <p className="heading">Жорсткість сторін матраца</p>
              <span className="design-line"></span>
              <p>{stiffnessSides}</p>
            </li>
            <li className="item">
              <p className="heading">Жорсткість</p>
              <span className="design-line"></span>
              <p>{stiffness}</p>
            </li>
            <li className="item">
              <p className="heading">Навантаження на спальне місце</p>
              <span className="design-line"></span>
              <p>{load}</p>
            </li>
            <li className="item">
              <p className="heading">Тип матраца</p>
              <span className="design-line"></span>
              <p>{type}</p>
            </li>
            <li className="item">
              <p className="heading">Тип пружинного блоку</p>
              <span className="design-line"></span>
              <p>{typeSpring}</p>
            </li>
            <li className="item">
              <p className="heading">Опція зима/літо</p>
              <span className="design-line"></span>
              <p>{helperYesOrNot(option)}</p>
            </li>
            <li className="item">
              <p className="heading">Чохол на блискавці</p>
              <span className="design-line"></span>
              <p>{helperYesOrNot(cover)}</p>
            </li>
            <li className="item">
              <p className="heading">Висота моделі матраца</p>
              <span className="design-line"></span>
              <p>{height}</p>
            </li>
            <li className="item">
              <p className="heading">Кокос</p>
              <span className="design-line"></span>
              <p>{helperYesOrNot(coconut)}</p>
            </li>
            <li className="item">
              <p className="heading">Латекс</p>
              <span className="design-line"></span>
              <p>{helperYesOrNot(latex)}</p>
            </li>
            <li className="item">
              <p className="heading">Матеріал чохла</p>
              <span className="design-line"></span>
              <p>{materialCover}</p>
            </li>
            <li className="item">
              <p className="heading">Шар 1</p>
              <span className="design-line"></span>
              <p>{layer1}</p>
            </li>
            <li className="item">
              <p className="heading">Шар 2</p>
              <span className="design-line"></span>
              <p>{helperYesOrNot(layer2)}</p>
            </li>
            <li className="item">
              <p className="heading">Шар 3</p>
              <span className="design-line"></span>
              <p>{helperYesOrNot(layer3)}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    desc3: PropTypes.string.isRequired,
    desc4: PropTypes.string.isRequired,
    guarantee: PropTypes.number.isRequired,
    stiffnessSides: PropTypes.string.isRequired,
    stiffness: PropTypes.string.isRequired,
    load: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    typeSpring: PropTypes.string.isRequired,
    option: PropTypes.bool.isRequired,
    cover: PropTypes.bool.isRequired,
    height: PropTypes.string.isRequired,
    coconut: PropTypes.bool.isRequired,
    latex: PropTypes.bool.isRequired,
    materialCover: PropTypes.string.isRequired,
    layer1: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    layer2: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    layer3: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  }),
};

export default ProductInfo;
