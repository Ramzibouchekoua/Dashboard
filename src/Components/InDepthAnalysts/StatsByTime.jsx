import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function StatsByTime({ data }) {
  return (
    <div className="stats-by-time">
      {data.map((item) => (
        <div className="time-of-sales" key={item.index}>
          <div>
            <div className={"time-color " + item.Class}></div>
            <span>{item?.name}</span>
          </div>
          <span>{item?.value + "K €"}</span>
        </div>
      ))}
    </div>
  );
}
StatsByTime.propTypes = {};
export default StatsByTime;
