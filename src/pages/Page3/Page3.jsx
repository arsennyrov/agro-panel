import React from 'react';
import CardCompany from '../../components/CardCompany';
// import { useSelector } from 'react-redux';

import Propmpt from '../../components/Prompt';
import { cropState } from '../../containers/cropState';
import { cropStateOptions } from '../../containers/utils';
import './Page3.css';

const Page3 = () => {

    const cropState0 = cropState();
    const cropsStateOptions0 = cropStateOptions();

    const companys1 = []; // спиок фирм региона 1
    const companys2 = []; 
    const companys3 = []; 
    const lays1 = [];
    const lays2 = [];
    const lays3 = [];

    let j = -1;
    for(let i=0; i<=cropState0.length-1; i++) {
        if  ( (companys1[j] !== cropState0[i].company) && 
              (companys2[j] !== cropState0[i].company) &&
              (companys3[j] !== cropState0[i].company) )
              j=j+1;
            switch(cropState0[i].region) {
                case 1:
                    companys1[j] = cropState0[i].company;
                    break;
                case 2:
                    companys2[j] = cropState0[i].company;
                    break;
                case 3:
                    companys3[j] = cropState0[i].company;
                    break;
                default:
        }
    }

    // console.log('companys1', companys1);
    // console.log('companys2', companys2);
    // console.log('companys3', companys3);

    const cropsCompany = (name) => {
        const data = [];
        let j = 0;
        for(let i=0; i<cropState0.length; i++) {
            if (cropState0[i].company === name) {
                data[j] = cropState0[i];
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
                        {companys1.map((item, index) => 
                            <CardCompany
                                name={item}
                                region={1}
                                cropsCompany={cropsCompany(item)}
                            />
                        )}        
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region2'>
                    <h3>Южный регион</h3>
                    <div className='context-region2'>
                        {companys2.map((item, index) => 
                            <CardCompany 
                                name={item}
                                region={2}
                                cropsCompany={cropsCompany(item)} 
                            />
                        )}                     
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region3'>
                    <h3>Северный регион</h3>
                    <div className='context-region3'>
                        {companys3.map((item, index) => 
                            <div className='wrop-card-company'>
                                <CardCompany 
                                    name={item}
                                    region={3}
                                    cropsCompany={cropsCompany(item)} 
                                />
                            </div>
                        )}        
                    </div>
                </div>
            </div>

            <div className='page3__footer'>
                {cropsStateOptions0.map(item => { 
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
