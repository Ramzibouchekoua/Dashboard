import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function CardMainInsights({ imgUrl, cardName, Class, Text }) {
  const additionalclasss = () => {
    if (cardName === "Idee2look") {
      return "infuluencer";
    } else {
      return "icon-instagram";
    }
  };

  return (
    <div className="card-main-insight">
      <div className={Class + " card-img  " + additionalclasss()}>
        <img src={imgUrl} alt={cardName} />
      </div>
      <div className="information-card">
        <span className="card-information-text">{cardName}</span>
        <span className="card-title">{Text}</span>
      </div>
    </div>
  );
}
CardMainInsights.propTypes = {
  cardName: PropTypes.string,
  imgUrl: PropTypes.string,
  Text: PropTypes.string,
  Class: PropTypes.string,
};
export default CardMainInsights;
