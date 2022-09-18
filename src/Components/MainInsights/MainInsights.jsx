import React from "react";
import "./style.css";
import smartphone from "../../Assets/images/cards icons/smartphone.png";
import target from "../../Assets/images/cards icons/target.png";
import award from "../../Assets/images/cards icons/award.png";
import calendar from "../../Assets/images/cards icons/calendar.png";
import packageIcon from "../../Assets/images/cards icons/package.png";
import sun from "../../Assets/images/cards icons/sun.png";
import Performance from "./performance";
import CardMainInsights from "./CardMainInsights";
import instagram from "../../Assets/images/cards icons/instagram.png";
import instagrameuse from "../../Assets/images/avatars/Image.png";

function MainInsights() {
  const data = [
    {
      Name: "Mobile",
      Text: "Most used device",
      Class: "sales-component",
      IconCard: smartphone,
    },
    {
      Name: "Black",
      Text: "Most popular color",
      Class: "number-of-clicks",
      IconCard: target,
    },
    {
      Name: "Baskets",
      Text: "Most popular subcat",
      Class: "number-of-shares",
      IconCard: award,
    },
    {
      Name: "Monday",
      Text: "Start of the week",
      Class: "panier-moyen",
      IconCard: calendar,
    },
    {
      Name: "Lorem ipsum",
      Text: "Most popular product",
      Class: "transactions-component",
      IconCard: packageIcon,
    },
    {
      Name: "Evening",
      Text: "Star of the day",
      Class: "light-blue",
      IconCard: sun,
    },
  ];
  const dataCard = [
    {
      Name: "Instagram",
      Text: "Most popular social Media",
      Class: "pink-primary",
      IconCard: instagram,
    },
    {
      Name: "Idee2look",
      Text: "Most popular influencer",
      Class: " pink-secondary",
      IconCard: instagrameuse,
    },
  ];

  return (
    <div className="main-insight">
      {" "}
      <span className="section-title">Main insights</span>
      <div className="container-main-insight">
        <div className="section-most-popular">
          {data.map((item) => (
            <Performance
              cardName={item.Name}
              Class={item.Class}
              imgUrl={item.IconCard}
              Text={item.Text}
            />
          ))}
        </div>
        <div className="best-performance">
          {dataCard.map((item) => (
            <CardMainInsights
              cardName={item.Name}
              Class={item.Class}
              imgUrl={item.IconCard}
              Text={item.Text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
MainInsights.propTypes = {};
export default MainInsights;
