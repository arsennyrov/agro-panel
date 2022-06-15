// Раскрашивает окна культур в цвета по статусу

import React from 'react';
import PropTypes from 'prop-types';

import { cropStateOptions } from '../../containers/utils';
import './CropContext.css';

const CropContext = ({ itemName, itemSum }) => {

    CropContext.propTypes = {
        itemName: PropTypes.string,
        itemSum: PropTypes.array
    }        

    const cropsState0 = cropStateOptions();
    
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
        if (itemSum0.length === 1) {
            if (itemSum0[0].sum > 1)
                itemSum0[i].text1 = ""+itemSum0[0].sum;
        }
        if (itemSum0.length === 2) {
            itemSum0[i].text1 = ""+itemSum0[1].sum;
            itemSum0[i].text12 = "("+itemSum0[0].sum+")";
        }
        if (itemSum0.length === 3) {
            itemSum0[i].text1 = ""+itemSum0[2].sum;
            itemSum0[i].text12 = "("+itemSum0[1].sum+")";
            itemSum0[i].text2 = (itemSum0.length>2) ? "Осталось "+itemSum0[0].sum + " Га" : ""
        }
    }

    return (
        <div className='cropContext'>
            <span className='crop-context-span1'>
                {itemName}
            </span> 

            {itemSum0.map ((item, index) => { 
                return (
                    <div className={`context-div${index}`} 
                         style = {{
                            width: `${item.width}%`, 
                            height: "100%",
                            order: item.step<7 ? "0" : "1",  
                            backgroundColor: item.color
                         }}>

                        <span className='crop-context-span2'>
                           {item.text1}
                            <span className='crop-context-span12'>
                                {item.text12}
                            </span> 
                        </span> 
                        <span className='crop-context-span3'>
                            {item.text2}
                        </span> 
                    </div>
            )})}    
        </div>
    );
};

export default CropContext;