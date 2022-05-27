import React from "react";

import { problems } from "./data";
import { format } from '../../containers/utils';
import "./BarChart.css";

function BarChart() {

  const problems0 = problems();
  console.log('problems0', problems0);

  return (
    <div className="bar-chart__container">
      <span className="bar-chart__span">График проблем и нареканий</span>
      <div className="bars-container">
        {problems0.map(item => {

            const barOpacity = item.percent / 100
            const barHeight = (item.percent * 1.9) + 'px'
            let classContainer = '';
            let classChart = '';
            
              switch (item.name) {
                case "Яровая пшеница":        
                  classChart = 'bar-chart1';
                  classContainer = "bar-container1";
                  // iconBar ="springWheat.svg";
                  break;
                case "Рапс яровой":        
                  classChart = 'bar-chart2';
                  classContainer = "bar-container2";
                  // iconBar ="springRapeseed.svg";
                  break;
                case "Подсолнечник":        
                  classChart = 'bar-chart3';
                  classContainer = "bar-container3";
                  // iconBar ="sunflower.svg";
                  break;
                default:
                  classChart = 'bar-chart1';
            }

            const styleChart = {

            }

            const styleBar = {
              height: barHeight,
              backgroundColor: `rgba(225, 77, 0, ${barOpacity})`,
              // backgroundImage: "url('../../../public/img/Group1.svg')"
            }

            const styleBarContainer = {
              backgroundImage: `url('../../../public/img/Group1.svg')`
            }

            return (
              <div className={classContainer}>
                <div className="bar-height" >        
                  <div className= {classChart} style={styleBar}>
                      
                  </div>
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