import React from "react";

import { SvgSelector } from "../../containers/SvgSelector";
import { format } from '../../containers/utils';
import crops from "../../containers/data.js";
import { problems } from "./data";
import "./BarChart.css";

function BarChart() {

  const problems0 = problems();
  const containerBar = { marginTop: (crops().length < 4 ) ?  "10px" : "200px" };

  return (
    <div className="bar-chart__container" style={containerBar}>
      <span className="bar-chart__span">График проблем и нареканий</span>
      <div className="bar-chart">
        {problems0.map((item, ind, arr) => {
          const barOpacity = .1+item.percent / 100;

          const styleBar = { 
            width: (arr.length < 4) ? "200px" : "100px",
            height: (item.percent * 2.1) + 'px',
            marginRight: (arr.length < 4) ? "40px" : "0",
            backgroundColor: `rgba(225, 77, 0, ${barOpacity})`
          }
          const styleBarFalse = { 
            width: (arr.length < 4) ? "200px" : "100px",
            height: "210px",
            marginRight: (arr.length < 4) ? "40px" : "0",
            backgroundColor: "rgba(238, 238, 238, 0)"
          }
          
          const styleBarWrapper = { 
            width: (arr.length < 4) ? "200px" : "100px", 
          }

          const styleBarWrapperFalse = { 
            width: (arr.length < 4) ? "200px" : "100px", 

          }

          return (
            <>
            { item.info && <div className="bar-chart__wrapper" style = {styleBarWrapper}>
              <h2 className="bar-chart__value">{format(item.value)} {item.measure}</h2>
              <h2 className="bar-chart__percent">{item.percent}%</h2>
              <div className="bar-chart__bar" style = { styleBar }>
                <SvgSelector id={item.name} />
              </div>
            </div>}
            { !item.info && <div className="bar-chart__wrapper1" style={styleBarWrapperFalse}>
            <div className="div-plus"></div>
            <span className="bar-chart__percent1" style={{fontSize: "24px" }}><br />нет<br />данных</span>
                <div className="bar-chart__bar" style = { styleBarFalse }>
                  <SvgSelector id={item.name} />
                </div>
            </div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default BarChart;