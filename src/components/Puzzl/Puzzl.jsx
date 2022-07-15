import React from 'react';
import { puzzl61 } from './puzzl61'
import { puzzl62 } from './puzzl62'
import { puzzl51 } from './puzzl51'
import { puzzl52 } from './puzzl52'
import { puzzl41 } from './puzzl41'
import { puzzl42 } from './puzzl42'
import { puzzl31 } from './puzzl31'
import { puzzl32 } from './puzzl32'
import { puzzl2 } from './puzzl2'
import { cropStateOptions4 } from '../../containers/utils';
import './Puzzl.css';

const Puzzl = ({ w, h, crops }) => {

    console.log('======================crops', crops);
    
    const text = []
    const x2 = []
    for(let i=0; i<crops.length; i++) {
        text.push({
            name: crops[i].name,
            text1: crops[i].sum[1],
            text2: crops[i].sum[2],
            text3: crops[i].sum[3],
            text4: crops[i].sum[4],
            text5: crops[i].sum[5],
        })
        x2.push(crops[i].sum[0]);
    }

    const x = x2.slice();

    // console.log('x', x);
    // console.log('text', text);

    const wContainer = w;
    const hContainer = h;

    const sumX = x.reduce((a,b)=>a+b)
    const x0 = x.map(x => 100*x/sumX);

    let numTemplate = 0;
    let styleRect = []
    switch (x0.length) {
        case 6:
            if (x0[0]/x0[1] >= 1.2) numTemplate = 61;  
            if (x0[0]/x0[1] < 1.2) numTemplate = 62;
            break;
        case 5:
            if (x0[0]/x0[1] >= 1.2) numTemplate = 51;  
            if ((x0[0]/x0[1] < 1.2) && (x0[1]/x0[2] < 3)) numTemplate = 52;
            break;
        case 4:
            if (x0[0]/x0[1] >= 1.2) numTemplate = 41;  
            if ((x0[0]/x0[1] < 1.2) && (x0[1]/x0[2] < 3)) numTemplate = 42;
            break;
        case 3:
            if (x0[0]/x0[1] >= 1.2) numTemplate = 32;  
            if ((x0[0]/x0[1] < 1.2) && (x0[1]/x0[2] < 3)) numTemplate = 32;
            break;
        case 2:
            numTemplate = 2;
            break;      
        case 1:
            numTemplate = 1;
            break;      
                
        default:    
    }

    switch (numTemplate) {
        case 61:
            styleRect = puzzl61(x0, wContainer, hContainer, text).slice();
            break;
        case 62:
            styleRect = puzzl62(x0, wContainer, hContainer, text).slice();
            break;
        case 51:
            styleRect = puzzl51(x0, wContainer, hContainer, text).slice();
            break;
        case 52:
            styleRect = puzzl52(x0, wContainer, hContainer, text).slice();
            break;
        case 41:
            styleRect = puzzl41(x0, wContainer, hContainer, text).slice();
            break;
        case 42:
            styleRect = puzzl42(x0, wContainer, hContainer, text).slice();
            break;
        case 31:
            styleRect = puzzl31(x0, wContainer, hContainer, text).slice();
            break;
        case 32:
            styleRect = puzzl32(x0, wContainer, hContainer, text).slice();
            break;
        case 2:
            styleRect = puzzl2(x0, wContainer, hContainer, text).slice();
            break;

        default:
            numTemplate = 62;
    }

    const styleContainer = {
        width: `${wContainer}vw`,
        height: `${hContainer}vh`,
    }

    const cropsColor = cropStateOptions4();
    console.log('cropsColor', cropsColor);
    console.log('cropsColor[1]', cropsColor[1]);

    return (

        <div className="puzzl__container" style={styleContainer}>
            {crops.map ((item, index) => { 

                console.log('=====item', item);
                let sum5 = []
                    for(let i=1; i<6; i++) {
                        sum5.push(i);
                    }

                return (
                    <div className={`puzzl${index}`} style={styleRect[index]}>
{/* 
                        {sum5.map((item5, index5) => {

                        return (     */}

                            <div className={`puzzl-${index}`}>
                                <div className='puzzl-1' style = {{width: '45%', height: '100%', backgroundColor: cropsColor[0].color}}>
                                    

                                { (item.sum[index] > 0) &&

                                    <>
                                        <span className='puzzl-span0' style = {{position: 'relative', zIndex: '5'}}>
                                            {item.name}
                                        </span>
                                        <span className='puzzl-span1'>
                                            1111
                                            <span className='puzzl-span2'>
                                                2222
                                            </span>
                                        </span>

                                    </>
                                } 

                                </div>   
                            </div>

                    </div>
            )})}
        </div>
    )

}

export default Puzzl;