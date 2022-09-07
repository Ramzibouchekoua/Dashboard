import React from "react";

import PropTypes from "prop-types";

import "./style.css";
function ButtonFiled({ label }) {
  return <button className="button-filed">{label}</button>;
}
ButtonFiled.propTypes = {
  label: PropTypes.string.isRequired,
};
export default ButtonFiled;
