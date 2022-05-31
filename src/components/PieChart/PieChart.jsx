import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { dataSource } from './data.js';

import './PieChart.css';

function getOptions(width, height) {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      style: {
        fontFamily: 'TT Norms',
      },
      width: width,
      height: height,
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
        lineWidth: 1,
        dataLabels: {

          enabled: true,
          format: '<span class="pie-chart__label">{point.y} Га</span><br /><span class="pie-chart__label">{point.name}</span>',
          style: {
            fontSize:'30px',
            textOverflow: 'none',
            position: 'right',
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
  }
};

class Chart extends React.Component {
  state = {
    width: 0,
    height: 0,
  }

  ref = React.createRef()
  onResize = () => {
    this.setState({
      width: this.ref.current.clientWidth,
      height: this.ref.current.clientHeight,
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  
  render() {
    return (
      <div ref={this.ref} className="pie-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions(this.state.width, this.state.height)}
        />
    </div>
    );
  }
}

export default Chart;
