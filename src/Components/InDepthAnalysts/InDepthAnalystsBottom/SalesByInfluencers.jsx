import React from "react";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import BarCharts from "./BarCharts.tsx";
import infl1 from "../../../Assets/images/avatars/Image.png";
import Pr01 from "../../../Assets/images/products/01.png";

function SalesByInfluencers() {
  const dataOs = [
    {
      name: "Ios",
      pv: 606.45,
    },
    {
      name: "Andr",
      pv: 62.01,
    },
    {
      name: "Vide",
      pv: 54.53,
    },
    {
      name: "Win",
      pv: 40.87,
    },
    {
      name: "Mac",
      pv: 36.2,
    },
  ];
  const datainfl = [
    {
      name: "Ios",
      img: infl1,
      color: "error",
    },
    {
      name: "Andr",
      img: infl1,
      color: "corail",
    },
    {
      name: "Vide",
      img: infl1,
      color: "success",
    },
    {
      name: "Win",
      color: "warning",
      img: infl1,
    },
    {
      name: "Mac",
      img: infl1,
      color: "info",
    },
  ];
  const dataProduct = [
    {
      name: "Ios",
      img: Pr01,
      color: "error",
    },
    {
      name: "Andr",
      img: Pr01,
      color: "corail",
    },
    {
      name: "Vide",
      img: Pr01,
      color: "success",
    },
    {
      name: "Win",
      color: "warning",
      img: Pr01,
    },
    {
      name: "Mac",
      img: Pr01,
      color: "info",
    },
  ];

  return (
    <div className="in-depth-analyststs ">
      <div className="sales-by-influencer">
        <div className="Influencer-sales-anal">
          {" "}
          <div className="title-container-sales m-b-50">
            {" "}
            <span className="sales-by-part-title">Sales by influencers</span>
            <a href="/">see more</a>
          </div>
          <div className="table-analysis">
            <div>
              {" "}
              {datainfl.map((item) => (
                <div className="table-analysis-profile">
                  <img src={item.img} alt="" className={item.color} />
                  <span>Lorem ipsum</span>
                </div>
              ))}
            </div>
            <BarCharts data={dataOs} />
          </div>
        </div>
        <div className="Influencer-sales-anal">
          {" "}
          <div className="title-container-sales m-b-50 ">
            {" "}
            <span className="sales-by-part-title ">
              Sales by Sales by product
            </span>
            <a href="/">see more</a>
          </div>
          <div className="table-analysis">
            <div>
              {" "}
              {dataProduct.map((item) => (
                <div className="table-analysis-profile">
                  <img src={item.img} alt="" />
                  <span>Lorem ipsum</span>
                </div>
              ))}
            </div>
            <BarCharts data={dataOs} />
          </div>
        </div>
      </div>
    </div>
  );
}
SalesByInfluencers.propTypes = {};
export default SalesByInfluencers;
