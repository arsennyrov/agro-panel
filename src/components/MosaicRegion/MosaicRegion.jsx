import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Tooltip, Typography } from "antd";

import "./MosaicRegion.css";
import { format } from "../../containers/utils";
import Mosaic from "../Mosaic/Mosaic";


const MosaicRegion = ({ cropsComp, flag , headClick}) => {
  const { Text } = Typography;

const [numCompany, setNumCompany] = useState(0)
const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(200)
const ref = useRef()

const onResize = () => {
    setContainerWidth(ref.current.clientWidth)
    setContainerHeight(ref.current.clientHeight)
}
    
// const headClick = (index) => (event) => {
//     console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', +index );
//     // const numReg = index.substr(0,1);
//     // setNumCompany(index.substr(1,2));
//     // console.log('numReg', numReg);
//     // console.log('numCompany', numCompany);
//     // console.log('cropsComp[numCompany]', cropsComp[numCompany]);

//     return (
//       index
//     )
// }

useLayoutEffect(() => {
  window.addEventListener('resize', onResize)
  onResize()
  return () => window.removeEventListener('resize', onResize)
}, []);

const containerSquare = containerWidth * containerHeight

const data = cropsComp.slice();

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
          placement="bottom"
          title={
            <>
              {/* <Text ellips is={true}>{data[index].company}</Text> */}
              <span className="p-mosaic-name">
                {data[index].name}
              </span>
              <br></br>
              <div className="p-mosaic-all">
              {/* <Text ellips is={true}>www{data[index].company}</Text> */}
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
          <div className="mosaic__cart-41" style={{ borderColor: 'gold' }} >

            <span className="p-mosaic-name-reg" 
                style={{ backgroundColor: 'rgb(241,225,252)' }}
                onClick={headClick(flag+index)}
                >
              <Text ellips is={true}>{data[index].company}</Text>
            </span>
            <br/>
            {(data[index].text3 > 0) && 
              <Text ellipsis={true}>{format(data[index].text3)} из {format(data[index].value)} Га</Text>
            }
            {(data[index].text3 === 0) && 
              <Text ellipsis={true}>{format(data[index].value)} Га</Text>
            }
        {flag}
          </div>
          <div
            style={{ width: '100%', height: '100%', fontSize: ".7vw" }}
            className="page4__item-41"
          >
            {/* {data[index]?.blocks?.map((item) => {
              // console.log('item', item);
              return (
                <div style={{ width: `${item.percent}`, fontSize: ".7vw", backgroundColor: `${item.color}`, }} 
                     className="page4__item-block-41"/>
              );
            })} */}




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
    <div ref={ref} style={stylePage41} className="page41">
        <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
     </div>
  );
};

export default MosaicRegion;
