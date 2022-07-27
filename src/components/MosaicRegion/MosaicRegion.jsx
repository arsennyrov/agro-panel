import React, { useLayoutEffect, useRef, useState } from "react";
import { Tooltip, Typography } from "antd";

import "./MosaicRegion.css";
import { format } from "../../containers/utils";
import Mosaic from "../Mosaic/Mosaic";


const MosaicRegion = ({ cropsComp, regNum , headClick}) => {
  const { Text } = Typography;

const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(200)
const [oldSumAll, setOldSumAll] = useState(0)

const ref = useRef()

const onResize = () => {
    setContainerWidth(ref.current.clientWidth)
    setContainerHeight(ref.current.clientHeight)
}
    

useLayoutEffect(() => {
  window.addEventListener('resize', onResize)
  onResize()
  return () => window.removeEventListener('resize', onResize)
}, []);

const containerSquare = containerWidth * containerHeight

const data = cropsComp.slice();
if ((regNum === '1') && (data.length > 0)) {
  // setOldSumAll(data[data.length-1].sumAll);
  data[data.length-1].sumAll = 1999;
}

let borderColor
if (regNum == 1) {
  borderColor = '#C49EEA'
}
if (regNum == 2) {
  borderColor = '#9EB3FC'
}
if (regNum == 3) {
  borderColor = '#A5DED0'
}

const dataSum = data.map(item => item.sumAll).reduce((partialSum, a) => partialSum + a, 0);

let dataS = []

for (let i = 0; i < data.length; i += 1) {
    dataS.push((data[i].sumAll * containerSquare) / dataSum)
}

const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
    if (index > dataS.length - 1) return
    const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
    const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
    const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
    const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
    return (

      <>
        <Tooltip
          placement="bottom">

          <div style={{ width: width, height: height, padding: '5px', position: 'relative' }}>
          <div className="mosaic__cart-41" style={{ borderColor: `${borderColor}` }} >

            <dyv className='mosaic-region-name'
                style={{ backgroundColor: 'rgb(241,225,252)' }}
                onClick={headClick(regNum+index)}
                >
              <span className={`mosaic-region-name-${regNum}`}>
                <Text ellipsis={true}>{data[index].company}</Text>
              </span>    
            </dyv>

            <br/>
            {(data[index].text3 > 0) && 
              <Text ellipsis={true}>{format(data[index].text3)} из {format(data[index].value)} Га</Text>
            }
            {(data[index].text3 === 0) && 
              <Text ellipsis={true}>{format(data[index].value)} Га</Text>
            }
          </div>
          <div
            style={{ width: '100%', height: '100%', fontSize: ".7vw" }}
            className="page4__item-41"
          >

            <Mosaic cropsComp={cropsComp[index]} />


          </div>
          </div>
        </Tooltip>
        <div
          style={{
            display: `${residualHeight < residualWidth ? "flex" : "block"}`,
            flexShrink: 0,
          }}
        >
          <PlacementBlocks
            index={index + 1}
            currentWidth={
              currentHeight < currentWidth ? currentWidth - width : width
            }
            currentHeight={
              currentHeight > currentWidth ? currentHeight - height : height
            }
          />
        </div>
      </>

    )
}

  const stylePage41 = {
    width: '100%', 
    height: '86.5vh', 
    display: `${containerHeight < containerWidth ? 'flex' : 'block'}`,
    // borderWidth: '2px',
    // borderStyle: 'solid',
    // borderRadius: '12px',
    // borderColor: bcolor.bgcolor,
  }

  return (
    <div className={`mosaic-region-container mosaic-region-container${regNum}`}>
      <div ref={ref} style={stylePage41} className="page41">
          <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
      </div>
     </div>
  );
};

export default MosaicRegion;
