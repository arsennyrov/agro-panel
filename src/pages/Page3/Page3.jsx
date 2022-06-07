import React from 'react';
import CardCompany from '../../components/CardCompany';
// import { useSelector } from 'react-redux';

import Propmpt from '../../components/Prompt';
import { cropState } from '../../containers/cropState';
import { cropsState } from '../../containers/utils';
import './Page3.css';

const Page3 = () => {

    const cropStates = cropState();
    const cropsState0 = cropsState();
    const cropStatesSort = cropStates.sort()
           .sort((a, b) => a.id > b.id ? 1 : -1);

    const companys = [cropStatesSort[0].company]; // спиок фирм региона
    let j = 0;
    for(let i=0; i<=cropStatesSort.length-1; i++) {
        if (companys[j] !== cropStatesSort[i].company) {
            j=j+1;
            companys[j] = cropStatesSort[i].company;
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
                        <CardCompany cropsCompany={cropsCompany(companys[0])} />
                        <CardCompany cropsCompany={cropsCompany(companys[1])} />
                        <CardCompany cropsCompany={cropsCompany(companys[2])} />
                        <CardCompany cropsCompany={cropsCompany(companys[3])} />
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region2'>
                    <h3>Южный регион</h3>
                    <div className='context-region2'>
                        {/* <CardCompany cropsCompany={cropsCompany(companys[4])} />
                        <CardCompany cropsCompany={cropsCompany(companys[5])} />
                        <CardCompany cropsCompany={cropsCompany(companys[6])} />
                        <CardCompany cropsCompany={cropsCompany(companys[7])} />
                        <CardCompany cropsCompany={cropsCompany(companys[8])} /> */}
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region3'>
                    <h3>Северный регион</h3>
                    <div className='context-region3'>
                        {/* <CardCompany cropsCompany={cropsCompany(companys[0])} />
                        <CardCompany cropsCompany={cropsCompany(companys[1])} />
                        <CardCompany cropsCompany={cropsCompany(companys[2])} />
                        <CardCompany cropsCompany={cropsCompany(companys[3])} /> */}
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
