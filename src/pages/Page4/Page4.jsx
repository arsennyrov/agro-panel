import React from "react";

import "./Page4.css";

const container = {
  w: 500,
  h: 200,
};

const containerSquare = container.w * container.h
const data = [
    { value: 600,
      color: 'white',
      bgcolor: 'green',
      text: 'text1',
    },
    { value: 300,
      color: 'white',
      bgcolor: 'tomato',
      text: 'text2',
    },
    { value: 200,
      color: 'black',
      bgcolor: 'gold',
      text: 'text3',
    },
    { value: 100,
      color: 'black',
      bgcolor: 'aqua',
      text: 'text4',
    },
    { value: 50,
      color: 'white',
      bgcolor: 'magenta',
      text: 'text5',
    },
    { value: 20,
      color: 'white',
      bgcolor: 'olive',
      text: 'text6',
    }
];
const dataSum = data.map(item => item.value).reduce((partialSum, a) => partialSum + a, 0);

let dataS = []

for (let i = 0; i < data.length; i += 1) {
    console.log('data[i].value', data[i].value);
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
            <div style={{width: width, height: height, flexShrink: 0, color: `${data[index].color}`, backgroundColor: `${data[index].bgcolor}`}} className="page4__item">
              {data[index].text}
            </div>
            <div className={`div-pb-${index}`} style={{display: `${residualHeight < residualWidth ? 'flex' : 'block'}`, flexShrink: 0}}>
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
