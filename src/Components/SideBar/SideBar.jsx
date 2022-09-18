import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/logo-smi-insights 1.png";
import styles from "./style.css";
import MenuItems from "./SideBarItems";

function SideBar({ setSideBarId, sideBarId }) {
  const [data, setData] = useState(MenuItems);
  useEffect(() => {
    const newData = data.map((social, i) => {
      if (i === 0) {
        social.isSelected = true;
      } else {
        social.isSelected = false;
      }
      return social;
    });
    setData(newData);
  }, []);

  const handleChange = (item) => {
    const newData = data.map((social) => {
      if (item.Id === social.Id) {
        social.isSelected = true;
      } else {
        social.isSelected = false;
      }
      return social;
    });
    setData(newData);
    const itemDisplay = newData.map((item) => {
      if (item.isSelected === true) {
        setSideBarId(item.Id);
      }
    });
  };

  return (
    <div className="sidebar">
      <img src={logo} alt="" />
      <div>
        {" "}
        {data.map((item) => (
          <div
            key={item.Id}
            onClick={() => handleChange(item)}
            className={item.isSelected ? "menu-item-selected " : "menu-item "}
          >
            <img src={item.Image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
