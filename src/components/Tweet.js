import React from "react";
import PropTypes from "prop-types";

function Tweet ({tweetUrl}) {
  return (
    <a href={tweetUrl} target="blank">
      <img
        src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
        height="50px"
        width="50px"
      />
    </a>
  );
};

Tweet.propTypes = {
  tweetUrl: PropTypes.string.isRequried,
};

export default Tweet;
