import React from "react";

import { SvgSelector } from "../../containers/SvgSelector";
import { format } from '../../containers/utils';
import crops from "../../containers/data.js";
import "./BarChart.css";

const problems = [
  {
    name: 'Подсолнечник',
    measure: 'Га',
    value: 22341,
    percent: 3,
    info: true,
  },
  {
    name: 'Яровая пшеница',
    measure: 'Га',
    value: 14700,
    percent: 0,
    info: false,
  },
  {
    name: 'Рапс яровой',
    measure: 'Га',
    value: 3750,
    percent: 40,
    info: true,
  },
 
  {
    name: 'Подсолнечник',
    measure: 'Га',
    value: 22341,
    percent: 0,
    info: true,
  },
  {
    name: 'Яровая пшеница',
    measure: 'Га',
    value: 14700,
    percent: 100,
    info: true,
  },
  {
    name: 'Рапс яровой',
    measure: 'Га',
    value: 3750,
    percent: 60,
    info: true,
  },
];

function BarChart() {

  const containerBar = { 
      marginTop: (crops().length < 4 ) ?  "10px" : "200px", 
  }

  return (
    <div className="bar-chart__container" style={containerBar}>
      <span className="bar-chart__span">График проблем и нареканий</span>
      <div className="bar-chart">
        {problems.map((item, ind, arr) => {
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
            backgroundColor: "rgba(238, 238, 238, 0.6)"
          }
          
          const styleBarFont = {
            width: "100px",
            fontFamily: 'TT Norms',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "24px",
            textAlign: "center",
            letterSpacing: "0.03em",
            textTransform: "lowercase",
            color: "#000000"
          }

          return (
            <>
            { item.info && <div className="bar-chart__wrapper">
              <h2 className="bar-chart__value">{format(item.value)} {item.measure}</h2>
              <h2 className="bar-chart__percent">{item.percent}%</h2>
              <div className="bar-chart__bar" style = { styleBar }>
                <SvgSelector id={item.name} />
              </div>
            </div>}
            { !item.info && <div className="bar-chart__wrapper" style={{backgroundColor: "rgba(238, 238, 238, 0.6)"}}>
            <div className="div-plus"></div>
            <span className="bar-chart__percent" style={styleBarFont}>нет<br />данных</span>
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