import PropTypes from "prop-types";
import "./PagingSlider.scss";

export const PagingSlider = ({ onClick }) => {
  return <div className="paging" onClick={onClick}></div>;
};

export const Dots = ({ dots }) => {
  return (
    <div className="dots">
      <ul className="list-paging">
        {dots.map((dot) => (
          <li className={`item ${dot.props.className}`} key={dot.key}>
            {dot.props.children}
          </li>
        ))}
      </ul>
    </div>
  );
};

Dots.propTypes = {
  dots: PropTypes.node.isRequired,
};
PagingSlider.propTypes = {
  onClick: PropTypes.func,
};
