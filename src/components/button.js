import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const { onClick, name } = props;
  const isZero = name === '0' ? ' btn-zero' : '';
  return (
    <button
      id={name}
      className={`btn${isZero}`}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

// Specifies the default values for props:
Button.defaultProps = {
  name: null,
  onClick: null,
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button;
