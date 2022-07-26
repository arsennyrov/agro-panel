import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

import MosaicCompany from '../../components/MosaicCompany';
import Propmpt from '../../components/Prompt';
import './Page31.css';
import Spinner from '../../components/Spinner';
import { cropStateOptions41 } from '../../containers/utils';
import { SvgSelector } from '../../containers/SvgSelector';

const Page31 = ({ cropsComp0, aaa }) => {

    console.log('aaaaaaaaaaaaaaaaaaaaa', aaa);
    // const { id } = useParams();
    console.log('====!!!----cropsComp0', cropsComp0);
    const cropsColor1 = cropStateOptions41();
    const titleRegion = cropsComp0.region;
    const titleFirm = cropsComp0.company;

    const colorRegion = (string0) => {
    switch (string0) {
        case 'Центр':
            return ({ color: '#C49EEA', bgcolor: 'rgb(241,225,252)' })
        case 'Юг':
            return ({ color: '#9EB3FC', bgcolor: 'rgb(226,232,254)'})
        case 'Север':
            return ({ color: '#A5DED0', bgcolor: 'rgb(222,247,243)'})
        default:
            return ({ color: '#000000', bgcolor: 'rgb(241,225,252)' })
    }}

    return ( 
        <div className='page31'>
            <div className='page31-container'>
                <div className='span-wrop-31'>
                    <a href='/panels/3' className='a-31'>
                        <span className='arrow-left-31'><SvgSelector id={'Стрелка влево'} /></span>
                        <span className='span-head-31'>{titleRegion}&nbsp;&nbsp;&nbsp;/ </span>
                    </a>
                    <span className='span-title-31'>{titleFirm}</span>
                </div>
                <div className='content-31'>
                    
                    <MosaicCompany cropsComp={cropsComp0} bcolor={colorRegion(titleRegion)} />

                </div>

            </div>
            <div className='page31__footer'>
                {cropsColor1.map(item => { 
                    return (
                        <div className='prompt-wrap'>
                            <Propmpt color={item.color} text={item.text} />
                        </div>
                )})}    
            </div>
        </div>
    );

};

export default Page31;
