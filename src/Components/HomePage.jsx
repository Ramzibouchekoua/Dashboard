import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Assets/SharedComponent/Button";
import ButtonFiled from "../Assets/SharedComponent/ButtonFiled";
import Profile from "./ProfileSection/Profile";
import "./style.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import OverallPerformance from "./OverallPerfomance/OverallPerformance";
import MainInsights from "./MainInsights/MainInsights";
import InDepthAnalysts from "./InDepthAnalysts/InDepthAnalysts";
import { fetchData } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allStats.Stats);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // const DataFetch = () => {
  //   fetch("https://api.npoint.io/6711aa214455290ca33b")
  //     .then((response) => response.json())
  //     .then((data) => setContent(data));
  // };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #ff5f5f",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <div className="homepage-container">
      <Profile />
      <div className="filter-homepage">
        <span className="name">Summary dashboard: Drope facts</span>
        <div className="filter-button">
          {" "}
          <Button label={"Customize a period"} />
          <ButtonFiled label={"Select a period"} />
          <div className="period">
            {" "}
            Period{" "}
            <span onClick={handleOpen} className="button datapicker">
              <CalendarTodayIcon /> Tout
            </span>
          </div>
        </div>
      </div>
      <OverallPerformance content={data} />
      <MainInsights />
      <InDepthAnalysts />
      {/* Modal calendar  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              We are Sorry
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This feature still not ready yet !!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
HomePage.propTypes = {
  content: PropTypes.object,
};
export default HomePage;
