import React from "react";

import "./Page4.css";

const container = {
  w: 1000,
  h: 500,
};

const containerSquare = container.w * container.h
const data = [600, 300, 200, 100, 50, 10];
const dataSum = data.reduce((partialSum, a) => partialSum + a, 0);

let dataS = []

for (let i = 0; i < data.length; i += 1) {
    dataS.push((data[i] * containerSquare) / dataSum)
}

const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
    if (index > dataS.length - 1) return
    const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
    const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
    const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
    const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
    return (
        <>
            <div style={{width: width, height: height, flexShrink: 0}} className="page4__item"></div>
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

const Page4 = () => {
  return (
    <div style={{width: container.w, height: container.h, display: `${container.h < container.w ? 'flex' : 'block'}`}} className="page4">
        <PlacementBlocks currentWidth={container.w} currentHeight={container.h} index={0} />
     </div>
  );
};

export default Page4;
