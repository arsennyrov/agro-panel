import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { dataSource } from './data.js';
import './PieChart.css';

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    style: {
      fontFamily: 'TT Norms',
    },
    width: 620,
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  title: false,
  plotOptions: {
    pie: {
      allowPointSelect: true,
      colors: ["#ffbe21", "#ffd46c", "#fff5de", "#ffe9b2"],
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          fontSize:'20px',
        },
      },
    }
  },
  series: [{
    data: dataSource,
    enableMouseTracking: false,
  }],
  credits: {
    enabled: false
  },
};

class Chart extends React.Component {

  render() {
    return (
      <div className="pie-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
    </div>
    );
  }
}

export default Chart;