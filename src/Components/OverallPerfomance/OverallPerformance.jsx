import React from "react";
import OverallStats from "./OverallStats";
import NumberOfClicksImg from "../../Assets/images/cards icons/navigation.png";
import SalesImg from "../../Assets/images/cards icons/shopping-bag.png";
import TransactionsImg from "../../Assets/images/cards icons/credit-card.png";
import NumberOfShares from "../../Assets/images/cards icons/share-2.png";
import { PieChart, Pie, Sector, Cell } from "recharts";
function OverallPerformance({ content }) {
  const data = [
    { name: "Conversion", value: content?.Conversion },
    { value: 100 - content?.Conversion },
  ];
  const COLORS = ["rgb(5,42,86)", "#fff"];
  return (
    <div className="overall">
      <span className="section-title">Overall Performance</span>
      <div className="overall-component">
        <div className="overall-stats">
          <div className="overall-stats-container">
            <OverallStats
              Res={content?.Sales}
              imgUrl={SalesImg}
              label={"Sales"}
              nameclass={"sales-component"}
            />
            <OverallStats
              Res={content?.Transactions}
              imgUrl={TransactionsImg}
              label={"Transactions"}
              nameclass={"transactions-component"}
            />
          </div>
          <div className="overall-stats-container">
            <OverallStats
              Res={content?.NumberOfClicks}
              imgUrl={
                "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-jaune.png"
              }
              label={"Panier moyen"}
              nameclass={" panier-moyen "}
            />
            <OverallStats
              Res={content?.NumberOfShares}
              imgUrl={NumberOfShares}
              label={" Number of shares "}
              nameclass={"number-of-shares"}
            />
            <OverallStats
              Res={content?.NumberOfClicks}
              imgUrl={NumberOfClicksImg}
              label={" Number of Clicks "}
              nameclass={"number-of-clicks"}
            />
          </div>
        </div>
        <div className="chart-overall">
          <div>
            {" "}
            <span>Conversion</span>
            <span>{content?.Conversion + "%"}</span>
          </div>
          <PieChart width={250} height={400}>
            <Pie
              data={data}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}
export default OverallPerformance;
