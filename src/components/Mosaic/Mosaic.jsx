import React, { useLayoutEffect, useRef, useState } from "react";
import { Tooltip } from "antd";

import { createData } from "./createData";
import "./Mosaic.css";

const Mosaic = ( {w, h, cropsComp } ) => {

    // console.log('WWWWW cropsComp', cropsComp);

const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(`${h}vh`)
// console.log('containerWidth', containerWidth)
// console.log('containerHeight', containerHeight)
const ref = useRef()
// console.log('ref',ref);

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

// -------------------------------------------------------------------
const region = cropsComp.item.region
const title = cropsComp.item.company
const data = createData(cropsComp);
// console.log('======data', data);
let regNum = 0
switch (region) {
    case 'Центр':
        regNum = 1
        break
    case 'Юг':
        regNum = 2
        break
    case 'Север':
        regNum = 3
        break
    default:    
        regNum = null
}

// --------------------------------------------------------------------

const dataSum = data.map(item => item.value).reduce((partialSum, a) => partialSum + a, 0);
// console.log('dataSum', dataSum);

let dataS = []

for (let i = 0; i < data.length; i++) {
    dataS.push((data[i].value * containerSquare) / dataSum)
}

// console.log('dataS', dataS);

const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
    if (index > dataS?.length - 1) return
    const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
    const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
    const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
    const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
    return (
        <>
            {(width * height < 8000) ?
                <Tooltip
                    placement="bottom"
                    title={
                        <>
                            <p className="p-mosaic">{data[index].name}</p>
                            { (data[index].text1 > 0) && 
                            <p className="p-mosaic">
                                {data[index].text1}
                                { (data[index].text2 > 0) && <span className="span-overtime-tooltip"> ({data[index].text2})</span>}                        
                            </p>}
                            { (data[index].text3 > 0) && 
                            <p className="p-mosaic">
                                {data[index].text3}
                                { (data[index].text4 > 0) && <span className="span-overtime-tooltip"> ({data[index].text4})</span>}     
                            </p>}
                            { (data[index].text5 > 0) && <p className="p-mosaic">{data[index].text5}</p>}
                        </>
                    }
                >
                    <div style={{width: width, height: height, fontSize: '.7vw'}} className="page4__item">
                        {data[index]?.blocks?.map((item) => (
                            <div style={{width: `${item.percent}`, fontSize: '.7vw', backgroundColor: `${item.color}`}} className="page4__item-block" />
                        ))}
                    </div>
                </Tooltip> :
                <>
                    <div className="mosaic__cart" style={{width: width, height: height}}>
                        <span>{data[index].name}</span>
                        { (data[index].text1 > 0) && 
                        <span>
                            {data[index].text1}
                            { (data[index].text2 > 0) && <span className="span-overtime"> ({data[index].text2})</span>}                        
                        </span>}
                        { (data[index].text3 > 0) && 
                        <span>
                            {data[index].text3}
                            { (data[index].text4 > 0) && <span className="span-overtime"> ({data[index].text4})</span>}     
                        </span>}
                        { (data[index].text5 > 0) && <span>{data[index].text5}</span>}
                    </div>
                    <div style={{ width: width, height: height, fontSize: '.7vw' }} className="page4__item">
                        {data[index]?.blocks?.map((item) => {
                            // console.log('item', item);
                            return (
                                <div style={{ width: `${item.percent}`, fontSize: '.7vw', backgroundColor: `${item.color}` }} className="page4__item-block" />
                            );
                        })}
                    </div>
                </>
            }
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
    <div className={`mosaic-container mosaic-container${regNum} mosaic-container-region`}>
      <div className={`mosaic-header${regNum}`}>{title}</div>
      <div ref={ref} style={{height: `${h}vh`, display: `${containerHeight < containerWidth ? 'flex' : 'block'}`}} className="page4">
          <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
      </div>
    </div>
  );
};

export default Mosaic;
