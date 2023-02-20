import PropTypes from 'prop-types';

const FlexContainer = ({ type, children }) => (
  <div className={type}>{children}</div>
);

FlexContainer.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FlexContainer;
