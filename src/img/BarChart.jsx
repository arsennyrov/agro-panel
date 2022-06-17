import React from "react";

import { problems } from "./data";
import { format } from '../../containers/utils';
import "./BarChart.css";

function BarChart() {

  const problems0 = problems();

  return (
    <div className="bar-chart__container">
      <span className="bar-chart__span">График проблем и нареканий</span>
      <div className="bars-container">
        {problems0.map(item => {

            const barHeight = (item.percent * 1.9) + 'px'
            let classContainer = '';
            let classChart = '';
            
              switch (item.name) {
                case "Яровая пшеница":        
                  classChart = 'bar-chart1';
                  classContainer = "bar-container1";
                  break;
                case "Рапс яровой":        
                  classChart = 'bar-chart2';
                  classContainer = "bar-container2";
                  break;
                case "Подсолнечник":        
                  classChart = 'bar-chart3';
                  classContainer = "bar-container3";
                  break;
                default:
                  classChart = 'bar-chart1';
            }

            const styleBar = {
              height: barHeight,
              backgroundImage: `url($bgi1)`
            }


            return (
              <div className={`bar-container" ${classContainer}`}>
                <div className="bar-height" style={styleBar}>        

                </div>

                <div className="bar-title">
                    <span className="barTitle1">{item.percent}%</span>
                    <span className="barTitle2">{format(item.value)} Га</span>
                </div>
              </div>
            );
          })}
  
      </div>
    </div>
  );
}

export default BarChart;