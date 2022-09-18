import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function BarCharts({ data }) {
  return (
    <BarChart
      width={400}
      height={250}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />

      <Bar dataKey="pv" barSize={10} fill="#FF5F5F" />
    </BarChart>
  );
}
