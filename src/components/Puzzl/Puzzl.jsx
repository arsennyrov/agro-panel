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

import './Puzzl.css';

const Puzzl = ({ x, w, h, text }) => {

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

    for(let i=0; i <styleRect.length; i++) {
        // styleRect[i].backgroundColor = 'rgb(204,239,183)';
        if (i%2 === 0) {
            styleRect[i].backgroundColor = 'rgb(204,239,183)';
        } 
        else {
            styleRect[i].backgroundColor = 'rgb(254,226,212)';
        }
        if (i%3 === 2) {
            styleRect[i].backgroundColor = '#FFFFFF';
        } 
    }    

   
    return (

        <div className="puzzl__container" style={styleContainer}>
            {text.map ((item, index) => { 
                return (
                    <div className={`puzzl${index}`} style={styleRect[index]}>

                        {(x0[index] > 8) && 
                        <>
                        <span className='puzzl-span0'>{item.name}</span>
                        <span className='puzzl-span1'>
                            { item.text0 }
                            <span className='puzzl-span2'>({item.text5})</span>
                        </span>
                        </>
                        }
                        
                    </div>
            )})}
        </div>
    );

};

export default Puzzl;