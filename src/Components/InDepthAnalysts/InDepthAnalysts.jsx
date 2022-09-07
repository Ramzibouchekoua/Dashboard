import React from "react";
import PropTypes from "prop-types";
// import "./style.css";
import SalesByPart from "./SalesByPart";
import SalesByOs from "./SalesByOs";
import SalesByInfluencers from "./InDepthAnalystsBottom/SalesByInfluencers";

function InDepthAnalysts() {
  return (
    <div className="in-depth-analyststs">
      <span className="section-title">In-Depth Analysts</span>
      <div>
        <SalesByPart />
        <SalesByOs />
      </div>
      <SalesByInfluencers />
    </div>
  );
}
InDepthAnalysts.propTypes = {};
export default InDepthAnalysts;
