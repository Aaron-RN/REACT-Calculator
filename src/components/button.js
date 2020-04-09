import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  onClick, name, color, wide,
}) => {
  const isZero = wide ? ' btn-wide' : '';
  return (
    <button
      className={`btn${isZero}`}
      style={{ backgroundColor: color }}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

// Specifies the default values for props:
Button.defaultProps = {
  name: null,
  onClick: null,
  color: '#D84',
  wide: false,
};

Button.propTypes = {
  color: PropTypes.string,
  wide: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button;
