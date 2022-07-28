import React, { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';

import { Tooltip, Typography } from "antd";
import "./MosaicField.css";
import { format } from "../../containers/utils";


const MosaicField = ({ cropData, cropName, bcolor, regNum }) => {
  const { Text } = Typography;

  console.log('cropData', cropData, bcolor);

const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(500)
const ref = useRef()
const colors = ['#C49EEA','#9EB3FC','#A5DED0']


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

const data = cropData?.slice();

const dataSum = data?.map(item => item.sumPlan).reduce((partialSum, a) => partialSum + a, 0);

let dataS = []

for (let i = 0; i < data?.length; i += 1) {
    dataS.push((data[i].sumPlan * containerSquare) / dataSum)
}

const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
    if (index > dataS.length - 1) return
    const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
    const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
    const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
    const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
    const factWidth = data[index].sumFact * 100 / data[index].sumPlan
    return (
        <>
                <Tooltip 
                    placement="right"
                    title={
                    <div className="mosaic-field-text1">
                        <p>Поле {data[index].fieldGroup0}</p>
                        { (data[index].sumFact) ? 
                        <p>{format(data[index].sumFact)} из {format(data[index].sumPlan)} Га</p>
                        :
                        <p>{format(data[index].sumPlan)} Га</p>
                        }
                    </div>
                }>
        
            <div style={{width: width, height: height, borderColor: colors[regNum-1]}} className="page4__item page4__field-item">
                {data.map((item) => {
                    return (
                        <>
                        {
                            <div style={{width: `${item.percent}`, backgroundColor: `${item.color}`}} 
                                 className="page4__field-item-block">
                                    {/* {index} */}
                                    {/* {data[index].fieldGroup0} */}
                            </div>
                            }
                        </>
                    )
                })}



                <div className="mosaic-field-text">
                    <p className="mosaic-field-name" >Поле {data[index].fieldGroup0}</p>
                    { (data[index].sumFact) ? 
                      <Text className="mosaic-field-value" ellipsis={true}>{format(data[index].sumFact)} из {format(data[index].sumPlan)} Га</Text>
                      :
                      <Text className="mosaic-field-value" ellipsis={true}>{format(data[index].sumPlan)} Га</Text>
                    }
                </div>

            {console.log('factWidth', factWidth)}
                            <div style={{ width: `${factWidth}%`, height: '100%', fontSize: ".7vw", backgroundColor: '#EEEEEE', }} 
                     className="page4__item-block-41" />

            </div>
            </Tooltip>
            <div style={{display: `${residualHeight < residualWidth ? 'flex' : 'block'}`, flexShrink: 0}}>
                <PlacementBlocks
                    index={index + 1}
                    currentWidth={currentHeight < currentWidth ? currentWidth - width : width}
                    currentHeight={currentHeight > currentWidth ? currentHeight - height : height}
                />
            </div>
        </>
    )
}

  return (
    <>
    <div className={`mosaic-field-header`}>
        <Text ellipsis={true} style={{margin: '12px'}}>{cropName}</Text>
    </div>
    <div ref={ref} style={{width: '100%', height: '100vh', display: `${containerHeight < containerWidth ? 'flex' : 'block'}`}} className="page4">
        <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
    </div>
    </>
  );
};

export default MosaicField;
