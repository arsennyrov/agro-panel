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

    const region1 = cropState0.filter(item => item.region === 1);
    const region2 = cropState0.filter(item => item.region === 2);
    const region3 = cropState0.filter(item => item.region === 3);

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
                        {region1.map((item, index) => 
                            <div className={`reg${item.layCompany}`}>
                            <CardCompany
                                name={item.company}
                                region={1}
                                cropsCompany={cropsCompany(item.company)}
                            />
                            </div>
                        )}        
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region2'>
                    <h3>Южный регион</h3>
                    <div className='context-region2'>
                        {region2.map((item, index) => 
                            <div className={`reg${item.layCompany}`}>
                            <CardCompany
                                name={item.company}
                                region={2}
                                cropsCompany={cropsCompany(item.company)}
                            />
                            </div>
                        )}                     
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region3'>
                    <h3>Северный регион</h3>
                    <div className='context-region3'>
                        {region3.map((item, index) => 
                            <div className={`reg${item.layCompany}`}>
                            <CardCompany
                                name={item.company}
                                region={3}
                                cropsCompany={cropsCompany(item.company)}
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
