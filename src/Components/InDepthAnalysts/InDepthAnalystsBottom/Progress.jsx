import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

function Progress() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "red" : "#308fe8",
    },
  }));
  return (
    <Box>
      <span>22.54</span>
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
}
Progress.propTypes = {
  value: PropTypes.string,
  Country: PropTypes.string,
  Res: PropTypes.number,
  Color: PropTypes.string,
};
export default Progress;
