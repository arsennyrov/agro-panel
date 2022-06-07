import React, { useState } from 'react';
import { cropsState } from '../../containers/utils';
import './CropContext.css';

const CropContext = ({itemName, itemSum}) => {
    const cropsState0 = cropsState();
    
    const itemSum0 = [];
    let j = 0;
    for(let i=0; i<itemSum.length; i++) {
        if (itemSum[i] > 0) {
            let obj = {step: i,
                       sum: itemSum[i],
                       color: cropsState0[i].color,
                       count: 0,
                      };
            itemSum0.push(obj);
        } 
    }

    itemSum0.sort((a, b) => a.step > b.step ? -1 : 1);
    const sum1 = itemSum.reduce((a, b) => a + b, 0);
    const ratio = (sum1/100).toFixed(2);

    for(let i=0; i<itemSum0.length; i++) {
        itemSum0[i].count = itemSum0.length;
        itemSum0[i].width = (itemSum0[i].sum/ratio).toFixed(2);
    }

    // itemSum0.reverse();

    console.log('itemSum0', itemSum0);

    return (
        <div className='cropContext'>
            <span className='crop-context-span1'>
                {itemName}
            </span> 

            {itemSum0.map((item, index) => { 
                return (
                    <>
                    <div className={`crop-div${item.step}`} 
                        style = {{width: `${item.width}%`, 
                                  height: "100%",
                                  order: item.step<7 ? "0" : "1",  
                                  backgroundColor: item.color}}>

                        <span className='crop-context-span4' style = {{}}>
                           {index === 0 ? item.sum : null}
                        </span> 
                        <span className='crop-context-span3' style = {{}}>
                           {index === 1 ? item.sum : null}
                        </span> 
                        <span className='crop-context-span2' style = {{}}>
                           {index === 2 ? item.sum : null}
                        </span>                        
                    </div>
                    </>
            )})}    
        </div>
    );
};

export default CropContext;