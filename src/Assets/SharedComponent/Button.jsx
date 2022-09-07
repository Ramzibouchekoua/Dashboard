import React from "react";

import PropTypes from "prop-types";

import "./style.css";
function Button({ label }) {
  return <button className="button">{label}</button>;
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Button;
