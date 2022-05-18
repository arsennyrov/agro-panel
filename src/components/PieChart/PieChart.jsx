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
import './PieChart.css';

const customPalette = ["#ffbe21", "#ffd46c", "#fff5de", "#ffe9b2"];
class Chart extends React.Component {
  render() {
    return (
      <div className="pie-chart">
        <PieChart id="pie"
        palette={customPalette}
        dataSource={dataSource}
        startAngle={90}
      >
          <Size
            height={365}
            width={888}
          />
          <Legend
            visible={false}
            orientation="horizontal"
            itemTextPosition="right"
            horizontalAlignment="center"
            verticalAlignment="bottom"
            columnCount={4} />
          <Series argumentField="name" valueField="value">
            <Label
              visible={true}
              position="columns"
              backgroundColor="none"
              customizeText={customizeText}>
              <Font color="gray" size={24} />
              <Connector color="gray" visible={true} width={1.5} />
            </Label>
            <Label
              visible={true}
              position="columns"
              verticalOffset={100}
              horizontalOffset="1000px"
              backgroundColor="none"
              customizeText={customizeText}>
              <Font color="black" size={24} />
              <Connector color="gray" visible={true} width={1.5} />
            </Label>
          </Series>
        </PieChart>
      </div>
    );
  }
}

function customizeText(arg) {
  return `<span>${arg.valueText} Га</span><br /><span>${arg.argumentText}</span>`;
}

export default Chart;

