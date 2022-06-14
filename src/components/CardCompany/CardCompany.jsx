// Расставляет окна культур внутри окна компании

import React from 'react';
import CropContext from '../CropContext';
import './CardCompany.css';

const CardCompany = ({ name, region, cropsCompany }) => {

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
    let sum1All = 0;
    for(let i=0; i<crops1.length; i++) {
        sum1[i] = crops1[i].sum.reduce((a, b) => a + b, 0);
        if (sum1[i] === 0) sum1[i] = 0;
        sum1All = sum1All + sum1[i];
        if (crops1.step > 0)
            crops1.sum[crops1.step] = 1111;
    }        

    const wcol = [];
    for(let i=0; i<crops1.length; i++) {
        wcol[i] = 1+(10*sum1[i]/sum1All).toFixed(1);
    }

    let styleContainer = {}
    switch (cropsCompany[0].lay) {
        case 1:
            styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr ${wcol[2]}fr`};        
            break;
        case 8:
            styleContainer = {gridTemplateColumns: `1fr`};
            break;
        default:
            {
                styleContainer = {gridTemplateColumns: `${wcol[0]}fr) ${wcol[1]}fr`}; 
            }
        }

    let styleCardCompany = {}
    switch(region) {
        case 1: 
            styleCardCompany = {borderColor: "#C49EEA"}
            break;
        case 2: 
            styleCardCompany = {borderColor: "#9EB3FC"}
            break;
        case 3: 
            styleCardCompany = {borderColor: "#A5DED0"}
            break;
        default:
    }

    return (
        <div className='card-company' style={styleCardCompany}>
            <div className='card-company__name'>
                <span className='card-company__name-span'>
                    {name}
                </span>
            </div>

            <div className='card-company__container' style = {styleContainer}>
                {crops1.map((item, index) => { 
                    return (
                        <div className={`crop-div${cropsCompany[0].lay}${index}`}> 
                            <CropContext itemName={item.name} itemSum={item.sum} wcol={wcol}/>
                        </div>
                )})
                }
            </div>     

        </div>
    );
};

export default CardCompany;