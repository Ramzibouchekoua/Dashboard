import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Performance({ imgUrl, cardName, Class, Text }) {
  return (
    <div className="performance">
      <div className={Class}>
        <img src={imgUrl} alt={cardName} />
      </div>
      <div className="information-card">
        <span className="card-information-text">{cardName}</span>
        <span className="card-title">{Text}</span>
      </div>
    </div>
  );
}
Performance.propTypes = {
  cardName: PropTypes.string,
  imgUrl: PropTypes.string,
  Text: PropTypes.string,
  Class: PropTypes.string,
};
export default Performance;
