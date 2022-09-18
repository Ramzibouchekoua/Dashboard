import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

function Progress({ Country, Res, Color, SecondColor, Value }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: SecondColor,

    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? Color : SecondColor,
    },
  }));
  return (
    <Box>
      <span className="country-name">{Country + ": " + Res + "K€"} </span>
      <BorderLinearProgress variant={"determinate"} value={Value} />
    </Box>
  );
}
Progress.propTypes = {
  Value: PropTypes.string,
  Country: PropTypes.string,
  Res: PropTypes.number,
  Color: PropTypes.string,
  SecondColor: PropTypes.string,
};
export default Progress;
