import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Tooltip } from "antd";

import "./Page4.css";

// const container = {
//   w: 1000,
//   h: 500,
// };
const Page4 = () => {

const [containerWidth, setContainerWidth] = useState(0)
const [containerHeight, setContainerHeight] = useState(500)
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
const data = [
    { value: 600,
      blocks: [
          { percent: '20%',
            color: 'rgb(192, 192, 200)'
          }, 
          { percent: '30%',
            color: 'rgb(239, 239, 239)'
          }, 
          { percent: '50%',
            color: 'rgb(255, 255, 255)'
          }
        ],
    },
    { value: 300,
      blocks: [
          { percent: '60%',
            color: 'rgb(170, 210, 147)'
          }, 
          { percent: '20%',
            color: 'rgb(204, 239, 183)'
          }, 
          { percent: '20%',
            color: 'rgb(255, 255, 255)'
          }
        ],
    },
    { value: 200,
      blocks: [
          { percent: '70%',
            color: 'rgb(217, 171, 156)'
          }, 
          { percent: '30%',
            color: 'rgb(255, 199, 176)'
          }, 
        ],
    },
    { value: 100,
      blocks: [
          { percent: '50%',
            color: 'rgb(192, 192, 200)'
          }, 
          { percent: '40%',
            color: 'rgb(239, 239, 239)'
          }, 
          { percent: '10%',
            color: 'rgb(255, 255, 255)'
          }
        ],
    },
    { value: 50,
      blocks: [
          { percent: '100%',
            color: 'rgb(170, 210, 147)'
        }, 
        ],
    },
    { value: 10,
      blocks: [
          { percent: '20%',
            color: 'rgb(217, 171, 156)'
          }, 
          { percent: '70%',
            color: 'rgb(255, 199, 176)'
          }, 
          { percent: '10%',
            color: 'rgb(255, 255, 255)'
          }
        ],
    }
];
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
            <div style={{width: width, height: height}} className="page4__item">
                {data[index].blocks?.map((item) => {
                    return (
                        <>
                        {(width * parseInt(item.percent) / 100) < 30 ?
                            <Tooltip placement="bottom" title={item.percent}>
                                <div style={{width: `${item.percent}`, backgroundColor: `${item.color}`}} className="page4__item-block"></div>
                            </Tooltip> : 
                            <div style={{width: `${item.percent}`, backgroundColor: `${item.color}`}} className="page4__item-block">{item.percent}</div>
                            }
                        </>
                    )
                })}
            </div>
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
    <div ref={ref} style={{width: '100%', height: '120vh', display: `${containerHeight < containerWidth ? 'flex' : 'block'}`}} className="page4">
        <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
     </div>
  );
};

export default Page4;
