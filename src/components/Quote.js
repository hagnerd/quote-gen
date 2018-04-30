import React from "react";
import PropTypes from "prop-types";

import "./styles/Quote.scss";

function Quote ({ quote, source }) {
  return (
    <div className="wrapper">
      <h3 className="quote">
        "{quote}"
      </h3>
      <h2 className="source">
        {source}
      </h2>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  sour: PropTypes.string.isRequired,
}

export default Quote;
