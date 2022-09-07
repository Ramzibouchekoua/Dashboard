import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import formateBigNumbers from "../../utils/formateBigNumbers";

function OverallStats({ label, Res, imgUrl, nameclass }) {
  const Currencies = () => {
    if (label === "Sales" || label === "Panier moyen") {
      return "€";
    } else {
      return "";
    }
  };
  return (
    <div className="overall-stats-component">
      <div className={nameclass + "  card-overall-stats"}>
        <img src={imgUrl} alt={label} />
      </div>
      <span className="card-stats">
        {" "}
        {formateBigNumbers(Res)} {Currencies()}
      </span>
      <span className="card-title">{label}</span>
    </div>
  );
}
OverallStats.propTypes = {
  label: PropTypes.string,
  imgUrl: PropTypes.string,
  Res: PropTypes.number,
  nameclass: PropTypes.string,
};
export default OverallStats;
