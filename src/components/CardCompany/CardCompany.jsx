// Расставляет окна культур внутри окна компании

import React from 'react';
import PropTypes from 'prop-types';

import CropContext from '../CropContext';
import './CardCompany.css';

const CardCompany = ({ cropsCompany }) => {

    CardCompany.propTypes = {
        cropsCompany: PropTypes.object
    }

    // console.log('cropsCompany', cropsCompany);

    let region = 0;
    switch (cropsCompany.region) {
        case 'Центр':
            region = 1;
            break;
        case 'Юг':
            region = 2;
            break;
        case 'Север':
            region = 3;
            break;
        default:    
            region = 0;
    }

    const name =  cropsCompany.company;
    const crops0 = cropsCompany.crops;

    const crops1 = [].concat(crops0);
 
    const sum1 = [];
    let flag = 0;
    let sum1All = 0;
    for(let i=0; i<crops1.length; i++) {

        sum1[i] = crops1[i].sum.reduce((a, b) => a + b, 0);
        if (sum1[i] === 1) flag = flag+1;
        sum1All = sum1All + sum1[i];
    }        

    const wcol = [];
    for(let i=0; i<crops1.length; i++) {
        wcol[i] = 1+(10*sum1[i]/sum1All).toFixed(1);
    }

    if (crops1.length === 2) {
            wcol[0] = (1+(sum1[0]/(sum1[0]+sum1[1]))).toFixed(1);
            wcol[1] = (1+(sum1[1]/(sum1[0]+sum1[1]))).toFixed(1);
    }

    let styleContainer = {}
        switch (cropsCompany.layCrops) {
        case 1:
            styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr ${wcol[2]}fr`}; 
            if (flag > 1) styleContainer = {gridTemplateColumns: `1fr 1fr 1fr`};
            break;
        case 8:
            styleContainer = {gridTemplateColumns: `1fr`};
            break;
        default:
            styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr`};
            if (flag > 1) styleContainer = {gridTemplateColumns: `1fr 1fr`}; 
        }

    return (
        <div className={`card-company card-company${region}`}>
            <div className={`card-company__name card-company__name${region}`}>
                <span className={(cropsCompany.layCompany < 2) ? `card-company__name-span`
                                  : `card-company__name-span1`}>
                    {name}
                </span>
            </div>

            <div className={`card-company__container card-company__container`} style={styleContainer}>
                {crops1.map((item, index) => { 
                    return (
                        <div className={`crop-div crop-div${cropsCompany.layCrops}${index}`}> 
                            <CropContext itemName={item.name} itemSum={item.sum} wcol={wcol}/>
                        </div>
                )})
                }
            </div>     
        </div>
    );
};

export default CardCompany;