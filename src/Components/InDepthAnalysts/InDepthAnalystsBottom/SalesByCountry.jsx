import React from "react";
import PropTypes from "prop-types";
import Progress from "./Progress";

function SalesByCountry() {
  const data = [
    {
      Value: 1309.2,
      Country: "France",
      Res: 1284.03,
      Color: "#032958",
      SecondColor: "#FFEDED",
    },
    {
      Value: 1309.2,
      Country: "Belgique",
      Res: 9.3,
      Color: "#45AE6B",
      SecondColor: "#E9F4EC",
    },
    {
      Value: 1309.2,
      Country: "Switzeland",
      Res: 4.8,
      Color: "#EB0B0B",
      SecondColor: "#FFEDED",
    },
    {
      Value: 1309.2,
      Country: "Tunisia",
      Res: 2.47,
      Color: "#032958",
      SecondColor: "#FCF5E3",
    },
    {
      Value: 1309.2,
      Country: "United Kingdom",
      Res: 2.3,
      Color: "#1F59C4",
      SecondColor: "#E7EBF6",
    },
  ];
  const dataGifting = [
    {
      Value: 1511,
      Country: "Gifting campaigns",
      Res: 1501.49,
      Color: "#032958",
      SecondColor: "#FFEDED",
    },
    {
      Value: 1511,
      Country: "Paid campaigns",
      Res: 9.3,
      Color: "#45AE6B",
      SecondColor: "#E9F4EC",
    },
  ];

  return (
    <div className="sales-by-part">
      <div className="title-container-sales">
        {" "}
        <span className="sales-by-part-title">Sales by part of day</span>
        <a href="/">see more</a>
      </div>
      <div className="progress-sales-by-country">
        {data.map((item) => (
          <Progress
            Res={item.Res}
            Value={(item.Res / item.Value) * 100}
            Country={item.Country}
            Color={item.Color}
            SecondColor={item.SecondColor}
          />
        ))}
      </div>
      <div className="sales-by-gifting">
        <span className="sales-by-part-title">
          Sales by gifting and Paid Campaign
        </span>
        <div className="progress-sales-by-country">
          {dataGifting.map((item) => (
            <Progress
              Res={item.Res}
              Value={(item.Res / item.Value) * 100}
              Country={item.Country}
              Color={item.Color}
              SecondColor={item.SecondColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
SalesByCountry.propTypes = {
  Value: PropTypes.number,
  Country: PropTypes.string,
  Res: PropTypes.number,
  Color: PropTypes.string,
  SecondColor: PropTypes.string,
};
export default SalesByCountry;
