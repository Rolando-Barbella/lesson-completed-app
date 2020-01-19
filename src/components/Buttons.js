import React from 'react';
import PropTypes from 'prop-types';
import './Buttons-style.css';

const Button = ({ children, onClick, type }) => {
  return(
    <button
      className={`App-btn ${type === 'primary'? 'primary': 'default'}`}
      onClick={() => onClick()}
    > 
      {children}
    </button>
  )
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "default"]),
};

Button.defaultProps = {
  type: 'default',
}

export default Button;