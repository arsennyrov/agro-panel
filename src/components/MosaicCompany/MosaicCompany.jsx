import React, { useLayoutEffect, useRef, useState } from "react";
import { Tooltip, Typography } from "antd";

import "./MosaicCompany.css";
import { createData } from "./createData";
import { format } from "../../containers/utils";

const MosaicCompany = ({ cropsComp, bcolor }) => {
  const { Text } = Typography;

  console.log('XXXXXX cropsComp', cropsComp);

const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(200)
console.log('containerWidth', containerWidth)
console.log('containerHeight', containerHeight)
const ref = useRef()
console.log('ref',ref);

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

const data = createData(cropsComp);

const dataSum = data.map(item => item.value).reduce((partialSum, a) => partialSum + a, 0);

let dataS = []

for (let i = 0; i < data.length; i += 1) {
    console.log('data[i].value', data[i].value);
    dataS.push((data[i].value * containerSquare) / dataSum)
}

console.log('!!!!! data', data);

const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
    if (index > dataS.length - 1) return
    const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
    const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
    const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
    const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
    return (

      <>
        <Tooltip
          placement="bottom"
          title={
            <>
              <span className="p-mosaic-name">
                {data[index].name}
              </span>
              <br></br>
              <div className="p-mosaic-all">
                Всего: &nbsp;{format(data[index].value)}
              </div>
              <br></br>
              {data[index].text3 > 0 && (
              <span className="p-mosaic-all">
                Убрано: &nbsp;{format(data[index].text3)}
                {data[index].text4 > 0 && (
                  <span className="span-overtime"> ({format(data[index].text4)})</span>
                )}
              </span>
            )}

            <br></br>

            {data[index].text1 > 0 && (
              <span className="p-mosaic-all">
                В работе: &nbsp;{format(data[index].text1)}
                {data[index].text2 > 0 && (
                  <span className="span-overtime">({format(data[index].text2)})</span>
                )}
              </span>
            )}
            </>
          }
        >
          <div style={{ width: width, height: height, padding: '5px', position: 'relative' }}>
          <div className="mosaic__cart-41" style={{ borderColor: bcolor.color }} >
            <span className="p-mosaic-name-41" style={{ backgroundColor: bcolor.bgcolor }}>
              <Text ellips is={true}>{data[index].name}</Text>
            </span>
            <br/>
            {(data[index].text3 > 0) && 
              <Text ellipsis={true}>{format(data[index].text3)} из {format(data[index].value)} Га</Text>
            }
            {(data[index].text3 === 0) && 
              <Text ellipsis={true}>{format(data[index].value)} Га</Text>
            }

          </div>
          <div className="page4__item page4__item-41">
            {data[index]?.blocks?.map((item) => {
              // console.log('item', item);
              return (
                <div style={{ width: `${item.percent}`, backgroundColor: `${item.color}`, }} 
                     className="page41_item-block"/>
              );
            })}
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
  }

  return (
    <div ref={ref} style={stylePage41} className="page41">
        <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
     </div>
  );
};

export default MosaicCompany;
