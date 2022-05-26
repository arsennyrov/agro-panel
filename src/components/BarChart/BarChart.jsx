import React from "react";

import Bar from "../Bar";
import crops from "../../containers/data.js";
import { problems } from "./data";
import "./BarChart.css";

function BarChart() {

  const problems0 = problems();
  const containerBar = { marginTop: (crops().length < 4 ) ?  "10px" : "220px" };

  return (
    <div className="bar-chart__container" style={containerBar}>
      <span className="bar-chart__span">График проблем и нареканий</span>
      <div className="bar-chart">
        {problems0.map(item => 
          <Bar key={item.id} item={item} qty={problems0.length} />
        )}
      </div>
    </div>
  );
}

export default BarChart;