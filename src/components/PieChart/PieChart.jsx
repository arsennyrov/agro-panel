import React from 'react';

import PieChart, {
  Legend,
  Series,
  Label,
  Font,
  Connector,
  Size,
} from 'devextreme-react/pie-chart';
import { dataSource } from './data.js';
import crops from '../../containers/data.js';
import { shiftArr } from '../../containers/utils.js';
import './PieChart.css';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

// const customPalette = ["#ffbe21", "#ffd46c", "#fff5de", "#ffe9b2"];
// const shiftDataSource = shiftArr(dataSource);



const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    style: {
      fontFamily: 'TT Norms',
    },
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
          fontSize:'20px'
        }
      }
    }
  },
  series: [{
    data: [{
      name: 'Дефицит механизаторов',
      y: 42.1,
    }, {
      name: 'Остановка техники',
      y: 20.8
    }, {
      name: 'Отсутствие заказа в системе',
      y: 8.2
    }, {
      name: 'Дефицит техники',
      y: 28.9
    }],
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

function customizeText(arg) {
  return `<span>${arg.valueText} Га - </span><span>${arg.argumentText}</span>`;
  // return `<span>${arg.valueText} Га</span><br /><span>${arg.argumentText}</span>`;
}

export default Chart;

