import React from "react";

import PropTypes from "prop-types";
import "./styles/Button.scss";

function Button ({ onClick }) {
  return (
    <div className="flex">
      <button 
        className="btn_dark"
        onClick={onClick}
      >
        Random Quote
      </button>
    </div>
  );
} 

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
