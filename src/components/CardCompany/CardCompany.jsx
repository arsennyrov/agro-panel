// Расставляет окна культур внутри окна компании

import React from 'react';
import PropTypes from 'prop-types';

import CropContext from '../CropContext';
import './CardCompany.css';

const CardCompany = ({ name, region, cropsCompany }) => {

    CardCompany.propTypes = {
        name: PropTypes.string,
        region: PropTypes.number,
        cropsCompany: PropTypes.array
    }

    const crops0 = cropsCompany[0].crops;

    for(let i=0; i<crops0.length; i++) {
        switch (crops0[i].name) {
            case 'Пшеница':
                crops0[i].id = 1;
                break;
            case 'Подсолнечник':
                crops0[i].id = 2;
                break;
            case 'Рапс яровой':
                crops0[i].id = 3;
                break;
            default:
                crops0[i].id = 9;                              
        }
    }

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
        switch (cropsCompany[0].layCrops) {
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

        let styleSpan = {};
        if ((name === 'ООО "АГРОЛИПЕЦК"') || (name === 'ЗАО "Дмитриев-Агро-Инвест"')) {
            styleSpan = {fontSize: '.8rem'};
        } else {
            styleSpan = {fontSize: '1rem'};
        }           
    
        return (
            <div className={`card-company card-company${region}`}>
            <div className={`card-company__name card-company__name${region}`}>
                <span className='card-company__name-span' style={styleSpan}>
                    {name}
                </span>
            </div>

            <div className='card-company__container' style={styleContainer}>
                {crops1.map((item, index) => { 
                    return (
                        <div className={`crop-div crop-div${cropsCompany[0].layCrops}${index}`}> 
                            <CropContext itemName={item.name} itemSum={item.sum} wcol={wcol}/>
                        </div>
                )})
                }
            </div>     

        </div>
    );
};

export default CardCompany;