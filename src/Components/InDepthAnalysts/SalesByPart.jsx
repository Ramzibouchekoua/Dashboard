import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import PieStats from "./PieStats.tsx";
import StatsByTime from "./StatsByTime";

function SalesByPart() {
  const data = [
    { name: "Evening", value: 265.76, Class: "evening" },
    { name: "Night", value: 378.47, Class: "night" },
    { name: "Morning", value: 178.47, Class: "morning" },
    { name: "Late", value: 90.47, Class: "late" },
  ];
  return (
    <div className="sales-by-part">
      <div className="title-container-sales">
        {" "}
        <span className="sales-by-part-title">Sales by part of day</span>
        <a href="/">see more</a>
      </div>

      <PieStats data={data} />
      <StatsByTime data={data} />
    </div>
  );
}
SalesByPart.propTypes = {
  data: PropTypes.array,
};
export default SalesByPart;
