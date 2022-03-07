import React, { useState } from "react";

import Highcharts, { dateFormat } from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Tree() {
  const options = {
    title: {
      text: "My chart",
    },
    subtitle: {
      text: "Hello",
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
    title: {
      text: "Date",
    },
    yAxis: {
      title: {
        text: "xyz",
      },
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Tree;
