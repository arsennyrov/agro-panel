import React from 'react';
import CropContext from '../CropContext';
import './CardCompany.css';

const CardCompany = ({ cropsCompany }) => {

    const crops0 = cropsCompany;

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

    const crops1 = [].concat(crops0).sort((a, b) => a.id > b.id ? 1 : -1);
 
    const sum1 = [];
    let sum1All = 0;
    for(let i=0; i<crops1.length; i++) {
        sum1[i] = crops1[i].sum.reduce((a, b) => a + b, 0);
        if (sum1[i] === 0) sum1[i] = 500;
        sum1All = sum1All + sum1[i];
    }        

    const wcol = [];
    for(let i=0; i<crops1.length; i++) {
        wcol[i] = 1+(10*sum1[i]/sum1All).toFixed(1);
    }

    console.log('===wcol.length', wcol.length);

        let styleContainer = {}
        switch (wcol.length) {
            case 3:
                styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr ${wcol[2]}fr`};        
                break;
            case 2:
                styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr`};        
                break;
            case 1:
                styleContainer = {gridTemplateColumns: `${wcol[0]}fr`};        
                break;
            default:
                styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr ${wcol[2]}fr`}; 
            }

    const styleCrop = {};

    return (
        <div className='card-company'>
            <div className='card-company__name'>
                <span className='card-company__name-span'>
                    {crops1[0].company}
                </span>
            </div>

            <div className='card-company__container' style = {styleContainer}>
                {crops1.map((item, index) => { 
                    return (
                        <div className='card-company__crop' style = {styleCrop}>
                            <CropContext itemName={item.name} itemSum={item.sum} />
                        </div>
                )})
                }
            </div>     

        </div>
    );
};

export default CardCompany;