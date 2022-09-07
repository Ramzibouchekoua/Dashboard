import React from "react";
import PropTypes from "prop-types";
import BarCharts from "./BarCharts.tsx";

function SalesByOs() {
  const dataOs = [
    {
      name: "Ios",
      pv: 609.45,
    },
    {
      name: "Andr",
      pv: 413.01,
    },
    {
      name: "Vide",
      pv: 183.53,
    },
    {
      name: "Win",
      pv: 81.87,
    },
    {
      name: "Mac",
      pv: 26.2,
    },
  ];
  const dataCategorie = [
    {
      name: "VIde",
      pv: 609.45,
    },
    {
      name: "Mo..",
      pv: 413.01,
    },
    {
      name: "Cha...",
      pv: 183.53,
    },
    {
      name: "Bea",
      pv: 81.87,
    },
    {
      name: "Mai",
      pv: 26.2,
    },
  ];
  return (
    <div className="sales-by-os">
      <div>
        {" "}
        <div className="title-container-sales m-b-50">
          {" "}
          <span className="sales-by-part-title">Sales by OS</span>
          <a href="/">see more</a>
        </div>
        <BarCharts data={dataOs} />
      </div>
      <div>
        {" "}
        <div className="title-container-sales m-b-50">
          {" "}
          <span className="sales-by-part-title ">Sales by categories</span>
          <a href="/">see more</a>
        </div>
        <BarCharts data={dataCategorie} />
      </div>
    </div>
  );
}
SalesByOs.propTypes = {};
export default SalesByOs;
