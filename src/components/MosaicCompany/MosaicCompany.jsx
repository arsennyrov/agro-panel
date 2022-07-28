import React, { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';

import "./MosaicCompany.css";
import { createData } from "./createData";
import MosaicField from "../MosaicField";

const MosaicCompany = ({ cropsComp, bcolor, regNum }) => {
  const titleFirm = cropsComp?.company;
  const fullFields = useSelector(state => state.fulls.fullFields);

  const cropData0 = fullFields.slice().filter(item => item.title === titleFirm);
  const cropData = cropData0.slice().sort((a,b) => {
    if (a.value < b.value) {
        return 1;
    }
    if (a.value > b.value) {
        return -1;
    }
    return 0;
  });

const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(200)
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

const data = createData(cropsComp);


const dataSum = data.map(item => item.value).reduce((partialSum, a) => partialSum + a, 0);

let dataS = []

for (let i = 0; i < data.length; i += 1) {
    dataS.push((data[i].value * containerSquare) / dataSum)
}

const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
    if (index > dataS.length - 1) return
    const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
    const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
    const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
    const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
    return (

      <>
          <div style={{ width: width, height: height, padding: '5px', position: 'relative' }}>
          <div className="mosaic__cart-41" style={{ borderColor: bcolor.color }} >
              <MosaicField cropData={cropData[index]?.fields?.slice().sort((prev, next) => next.sumPlan - prev.sumPlan)} 
                cropName={cropData[index].cropName} 
                bcolor={bcolor} 
                regNum={regNum}
              />

          </div>
          <div
            style={{ width: '100%', height: '100%', fontSize: ".7vw", border: '3px, solid, black', borderRadius: '8px' }}
            className="page4__item page4__item-41"
          >

          </div>
          </div>

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

