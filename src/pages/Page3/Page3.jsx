import React from 'react';
import CardCompany from '../../components/CardCompany';
// import { useSelector } from 'react-redux';

import Propmpt from '../../components/Prompt';
import { cropState } from '../../containers/cropState';
import { cropStateOptions } from '../../containers/utils';
import './Page3.css';

const Page3 = () => {

    const cropStates = cropState();
    const cropsState0 = cropStateOptions();
    const cropStatesSort = cropStates.sort()
           .sort((a, b) => a.id > b.id ? 1 : -1);

    const companys1 = []; // спиок фирм региона 1
    const companys2 = []; 
    const companys3 = []; 
    let j = -1;
    for(let i=0; i<=cropStatesSort.length-1; i++) {
        if  ( (companys1[j] !== cropStatesSort[i].company) && 
              (companys2[j] !== cropStatesSort[i].company) &&
              (companys3[j] !== cropStatesSort[i].company) )
              j=j+1;
            switch(cropStatesSort[i].region) {
                case 1:
                    companys1[j] = cropStatesSort[i].company;
                    break;
                case 2:
                    companys2[j] = cropStatesSort[i].company;
                    break;
                case 3:
                    companys3[j] = cropStatesSort[i].company;
                    break;
                default:
        }
    }

    const cropsCompany = (name) => {
        const data = [];
        let j = 0;
        for(let i=0; i<cropStates.length; i++) {
            if (cropStatesSort[i].company === name) {
                data[j] = cropStates[i];
                j=j+1;
            }
        }
        return data;
    }

    return (
        <div className='page3'>
            <div className='page3__container'>
                <div className='region1'>
                    <h3>Центральный регион</h3>
                    <div className='context-region1'>
                        {companys1.map(item => 
                            <CardCompany cropsCompany={cropsCompany(item)} />
                        )}        
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region2'>
                    <h3>Южный регион</h3>
                    <div className='context-region2'>
                        {companys2.map(item => 
                            <CardCompany cropsCompany={cropsCompany(item)} />
                        )}                     
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region3'>
                    <h3>Северный регион</h3>
                    <div className='context-region3'>
                        {companys3.map(item => 
                            <div className='wrop-card-company'>
                                <CardCompany cropsCompany={cropsCompany(item)} />
                            </div>
                        )}        
                    </div>
                </div>
            </div>

            <div className='page3__footer'>
                {cropsState0.map(item => { 
                    return (
                        <div className='prompt-wrap'>
                            <Propmpt color={item.color} text={item.text} />
                        </div>
                    )})}    
            </div>
        </div>
    );
};

export default Page3;
