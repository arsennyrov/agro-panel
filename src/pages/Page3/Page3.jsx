import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import CardCompany from '../../components/CardCompany';
import Propmpt from '../../components/Prompt';
import { cropState } from '../../containers/cropState';
import { cropStateOptions4, transformFull } from '../../containers/utils';
import { saveFullData4 } from '../../stores/fullSlice';
import './Page3.css';

const Page3 = () => {

    const dispatch = useDispatch();

    useEffect(() => {
          const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_FULL';
          axios.get(apiUrl).then((resp) => {
            const full = resp.data;
            dispatch(saveFullData4(full.value)); 
          });
        }, []);
    
        const fullStage4 = useSelector(state => state.fulls.fullData4);
        // console.log('fullStage4', fullStage4);

        const fullFilter = fullStage4.filter(item => 
            (item.CROPS__NAME === 'Кукуруза') ||
            (item.CROPS__NAME === 'Подсолнечник') ||
            (item.CROPS__NAME === 'Пшеница яровая')  
        );
        // console.log('fullFilter', fullFilter);

        const transformFull3 = (obj={},num) => {
            return {
                company: obj.AO__FULLNAME+'/'+obj.FIELD_GROUP__NAME,
                id: 1000+num,
                region: obj.AO__REGION,
                layCompany: 1,
                layCrops: 1,
                name: obj.CROPS__NAME,
                sum:[0, 0, 0, obj.PLAN-obj.FACT, 0,obj.FACT,0,0]
          }}

        const fullTrans = []; 
        for (let i=0; i<fullFilter.length; i++) {
            fullTrans.push(transformFull3(fullFilter[i],i));
        }

        // console.log('fullTrans', fullTrans);
    const regionFilter = (string0) => {
        const fullFinish = []; 
        const fullTrans0 = fullTrans.slice().filter(item => item.region === string0);
        let company0 = fullTrans0[0]?.company;
        let j = 0;
        let name0 = [];
        let sum0 = [];
        for (let i=0; i<fullTrans0?.length; i++) {
            if (fullTrans0[i]?.company !== company0) {

                switch (sum0.length) {
                    case 1:    
                        fullFinish.push({
                            company: fullTrans0[i-1]?.company,
                            id: fullTrans0[i-1]?.id,
                            region: fullTrans0[i-1]?.region,
                            layCompany: 1,
                            // (i%2 === 0) ? 21 : 22,
                            layCrops: 1,
                            crops: [
                                {
                                    name: name0[0],
                                    sum: sum0[0]
                                },
                            ]
                        })
                        break;
                        case 2:    
                        fullFinish.push({
                            company: fullTrans0[i-1]?.company,
                            id: fullTrans0[i-1]?.id,
                            region: fullTrans0[i-1]?.region,
                            layCompany: 1,
                            // (i%2 === 0) ? 21 : 22,
                            layCrops: 1,
                            crops: [
                                {
                                    name: name0[0],
                                    sum: sum0[0]
                                },
                                {
                                    name: name0[1],
                                    sum: sum0[1]
                                },
                            ]
                        })
                        break;
                        case 3:    
                        fullFinish.push({
                            company: fullTrans0[i-1]?.company,
                            id: fullTrans0[i-1]?.id,
                            region: fullTrans0[i-1]?.region,
                            layCompany: 1,
                            // (i%2 === 0) ? 21 : 22,
                            layCrops: 1,
                            crops: [
                                {
                                    name: name0[0],
                                    sum: sum0[0]
                                },
                                {
                                    name: name0[1],
                                    sum: sum0[1]
                                },
                                {
                                    name: name0[2],
                                    sum: sum0[2]
                                },
                            ]
                        })
                        break;
                    default: {}
                }
                company0 = fullTrans0[i]?.company;
                j = 0;
                name0 = [];
                sum0 = [];
            }
            name0[j] = fullTrans0[i]?.name;
            sum0[j] = fullTrans0[i]?.sum; 
            j += 1;
        } 
        return fullFinish;
    }

        const region1 = regionFilter('Центр');
        console.log('regio1', region1);

        const region2 = regionFilter('Юг');
        const region3 = regionFilter('Север');



    const cropState0 = cropState();
    const cropsStateOptions0 = cropStateOptions4();

    // const region1 = cropState0.filter(item => item.region === 1);
    // const region2 = cropState0.filter(item => item.region === 2);
    // const region3 = cropState0.filter(item => item.region === 3);

    // const region1 = fullFinish.filter(item => item.region === 'Центр');
    // region1.map((item, i) => {
    //         company: item.company,
    //         id: item.id,
    //         region: item.region,
    //         layCompany: (i%2 === 0) ? 21 : 22,
    //         layCrops: 1,
    //         crops: item.crops,
    //     })
        
        // item.layCompany = (i%2 === 0) ? 21 : 22)}

    // const region2 = fullFinish.filter(item => item.region === 'Юг');
    // const region3 = fullFinish.filter(item => item.region === 'Север');

    return (
        <div className='page3'>
            <div className='page3__container'>
                <div className='region1'>
                    <h3>Центральный регион</h3>
                    <div className='context-region1'>
                        {region1.map((item, index) => 
                            <div className={`reg${item.layCompany}`}>
                                <CardCompany cropsCompany={item} />
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
                                <CardCompany cropsCompany={item} />
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
                                <CardCompany cropsCompany={item} />
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
