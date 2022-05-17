import React from "react";
import { SvgSelector } from "../Svg/SvgSelector.js";
import "./BarChart.css";

const data = [
  {
    name: 'Подсолнечник',
    measure: 'Га',
    value: 22341,
    percent: '25',
    img: 'sunFlower',
  },
  {
    name: 'Яровая пшеница',
    measure: 'Га',
    value: 14700,
    percent: '35',
    img: 'Vector01.png',
  },
  {
    name: 'Рапс яровой',
    measure: 'Га',
    value: 3750,
    percent: '40',
    img: 'Vector02.png',
  },
];

function BarChart() {

  // const heightTab = 88+145*data.length;
  const containerBar = { 
      marginTop: "10px", // heightTab,
  }

  return (
    <div className="bar-chart__container" style={containerBar}>
      <span className="bar-chart__span">График проблем и нареканий</span>
      <div className="bar-chart">
        {data.map((item) => {
          const barOpacity = item.percent / 100
          const barHeight = (item.percent * 2) + 'px'
          // console.log('barOpacity', barOpacity);
          // console.log('item.value', item.value);
          return (
            <div className="bar-chart__wrapper">
              <h2 className="bar-chart__value">{item.value} {item.measure}</h2>
              <h2 className="bar-chart__percent">{item.percent}%</h2>
              <div className="bar-chart__bar" style={{height: barHeight, opacity: barOpacity}}>
                <SvgSelector id={item.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BarChart;
