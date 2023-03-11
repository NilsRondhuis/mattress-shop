import PropTypes from 'prop-types';
import './DesignLine.scss';

const DesignLine = ({ color }) => (
  <div
    style={{ color: color ? `${color}` : '#584d5d' }}
    className={'design-line'}
  ></div>
);

DesignLine.propTypes = {
  color: PropTypes.string,
};

export default DesignLine;
