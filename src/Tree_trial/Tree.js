import React, { useState } from "react";
import "./Tree.css";

import Highcharts, { dateFormat } from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Tree() {
  const options = {
    title: {
      text: null,
    },

    xAxis: {
      type: "datetime",
      // labels: {
      //   formatter: function () {
      //     return Highcharts.dateFormat("%e-%b-%y", this.value);
      //   },
      //   // minRange: 14 * 24 * 3600000, // fourteen days
      // },
      labels: {
        format: "{value:%d-%b-%y}",
      },
    },
    series: [
      {
        pointStart: Date.UTC(2022, 0, 1),
        pointInterval: 1,
        pointIntervalUnit: "day",
        data: [4, 8, 6, 1, 9, 33, 15, 49, 78, 12],
      },
    ],
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "values",
      },
    },
  };
  return (
    <div>
      <div className="main-container">
        <div className="left-container">
          <span>Check-ins</span>
          <div className="btn-container">
            <button className="graph-btn">Modify Plan</button>
            <button className="graph-btn">Check-in</button>
          </div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Tree;
