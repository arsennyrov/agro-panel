import React, { useState } from 'react';

import { problems } from "./data";
import { format } from '../../containers/utils';
import "./BarChart.css";
import Button from '../Button/Button';

function BarChart() {

  const problems0 = problems();
 
  const [data0, setData0] = useState(problems0);  
  const data3 = problems0;

  const onClick1 = () => {
    setData0(problems);
  }

  const onClick2 = () => {
    const data4 = data3.slice(0,data0.length-1);
    setData0(data4);
  }

  return (
    <div className="bar-chart__container">
      <span className="bar-chart__span">График проблем и нареканий</span>
          <div className='btn2'>
            <Button name={'6'} onClick={onClick1} />
            <Button name={'-'} onClick={onClick2} />
          </div>   
      <div className="bars-container">
        {data0.map(item => {

            const barOpacity = item.percent / 100
            const barHeight = (item.percent * 1.9) + 'px'
            let classHeight = '';
            let classChart = '';
            
              switch (item.name) {
                case "Яровая пшеница":        
                  classChart = 'bar-chart1';
                  classHeight = "bar-height1";
                  // iconBar ="springWheat.svg";
                  break;
                case "Рапс яровой":        
                  classChart = 'bar-chart2';
                  classHeight = "bar-height2";
                  // iconBar ="springRapeseed.svg";
                  break;
                case "Подсолнечник":        
                  classChart = 'bar-chart3';
                  classHeight = "bar-height3";
                  // iconBar ="sunflower.svg";
                  break;
                default:
                  classChart = 'bar-chart1';
            }

            const styleBar = {
              height: barHeight,
              backgroundColor: `rgba(225, 77, 0, ${barOpacity})`,
            }

            return (
              <div className="bar-container">
                <div className={`bar-height ${classHeight}`} >        
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