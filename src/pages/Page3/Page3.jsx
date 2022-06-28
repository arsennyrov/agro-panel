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
                title: obj.AO__FULLNAME,
                titleName: obj.AO__FULLNAME+' '+obj.CROPS__NAME,
                subTitle: obj.FIELD_GROUP__NAME,
                id: 1000+num,
                region: obj.AO__REGION,
                layCompany: 1,
                layCrops: 1,
                name: obj.CROPS__NAME,
                fact: obj.FACT,
                factInTime: obj.FACT_IN_TIME,
                factOverTime: obj.FACT_OVERTIME,
                factToday: 0,
                factTodayOver: 0,
                plan: obj.PLAN,
                progress: obj.PROGRESS,
                sum:[0, 0, 0, 0, 0, obj.FACT,0, obj.PLAN-obj.FACT]
          }}

        const fullTrans = []; 
        for (let i=0; i<fullFilter.length; i++) {
            fullTrans.push(transformFull3(fullFilter[i],i));
        }
        // console.log('fullTrans', fullTrans);

        const fullSort = fullTrans.slice().sort((a,b) => {
            if (a.titleName < b.titleName) {
                return -1;
            }
            if (a.titleName > b.titleName) {
                return 1;
            }
            return 0;
        });

        // fullSort.push({
        //     company: 'AAAAA',
        //     title: 'AAAAA',
        //     titleName: 'AAAAA BBBBB',
        //     subTitle: 'CCCCC',
        //     id: 1088,
        //     region: 'Центр',
        //     layCompany: 1,
        //     layCrops: 1,
        //     name: 'Соя',
        //     fact: 1111,
        //     factInTime: 0,
        //     factOverTime: 0,
        //     factToday: 0,
        //     factTodayOver: 0,
        //     plan: 2222,
        //     progress: 0,
        //     sum:[0, 0, 0, 0, 0, 0, 0, 0]
        // })
        // console.log('fullSort', fullSort);

        const sumfullCrops = [];
        let titleName0 = fullSort[0]?.titleName;
        let titleM = '';
        let companyM = '';
        let nameM = '';
        let regionM = '';
        let sumFact = 0;
        let sumFactInTime = 0;
        let sumFactOverTime = 0;
        let sumPlan = 0;
        let sumM = [];
//-------------------------------------------------------------------------------------------------        
        for (let i=0; i<fullSort?.length; i++) {

            // console.log('fullSort[i]?.titleName', fullSort[i]?.titleName);
            // console.log('titleName0', titleName0);
            // console.log('fullSort[i]?.titleName !== titleName0', fullSort[i]?.titleName !== titleName0);
            // console.log('sumfullCrops', sumfullCrops);

            if ((fullSort[i]?.titleName !== titleName0) ) {
                sumPlan = sumPlan.toFixed(0);
                sumFact = sumFact.toFixed(0);
                sumFactInTime = sumFactInTime.toFixed(0);
                sumFactOverTime = sumFactOverTime.toFixed(0);
                sumfullCrops.push({
                    titleName: titleName0,
                    title: fullSort[i-1]?.title,
                    company: fullSort[i-1]?.title,
                    name: fullSort[i-1]?.name,
                    region: fullSort[i-1]?.region,
                    plan: sumPlan,
                    fact: sumFact,
                    factInTime: sumFactInTime,
                    factOverTime: sumFactOverTime,
                    factToday: sumFact/12,
                    factTodayOver: sumFactOverTime/12,
                    progress: ((100*sumFact)/sumPlan).toFixed(0),
                    sum: fullSort[i-1]?.sum,
                    info: true,
                });
                titleName0 = fullSort[i]?.titleName;
                sumFact = 0;
                sumFactInTime = 0;
                sumFactOverTime = 0;
                sumPlan = 0;
            }
            sumFact += fullSort[i]?.fact;
            sumFactInTime += fullSort[i]?.factInTime;
            sumFactOverTime += fullSort[i]?.factOverTime;
            sumPlan += fullSort[i]?.plan;
            titleM = fullSort[i-1]?.title;
            companyM = fullSort[i-1]?.title;
            nameM = fullSort[i-1]?.name;
            regionM = fullSort[i-1]?.region;
            sumM = fullSort[i-1]?.sum;
        }
//---------------------------------------------------------------------------------------
        sumPlan = sumPlan.toFixed(0);
        sumFact = sumFact.toFixed(0);
        sumFactInTime = sumFactInTime.toFixed(0);
        sumFactOverTime = sumFactOverTime.toFixed(0);

        // console.log('===========titleM', titleM);

        sumfullCrops.push({
            titleName: titleName0,
            title: titleM,
            company: companyM,
            name: nameM,
            region: regionM,
            plan: sumPlan,
            fact: sumFact,
            factInTime: sumFactInTime,
            factOverTime: sumFactOverTime,
            factToday: sumFact/12,
            factTodayOver: sumFactOverTime/12,
            progress: ((100*sumFact)/sumPlan).toFixed(0),
            sum: sumM,
            info: true,
        });
        console.log('sumfullCrops', sumfullCrops);


        // console.log('fullTrans', fullTrans);
    const regionFilter = (string0) => {
        const fullFinish = []; 
        const fullTrans0 = sumfullCrops.slice().filter(item => item.region === string0);


        fullTrans0.push({
            company: 'AAAAA',
            title: 'AAAAA',
            titleName: 'AAAAA BBBBB',
            subTitle: 'CCCCC',
            id: 1088,
            region: 'Центр',
            layCompany: 1,
            layCrops: 1,
            name: 'Соя',
            fact: 1111,
            factInTime: 0,
            factOverTime: 0,
            factToday: 0,
            factTodayOver: 0,
            plan: 2222,
            progress: 0,
            sum:[0, 0, 0, 0, 0, 0, 0, 0]
        })

        console.log('=====fullTrans0', fullTrans0);

        let company0 = fullTrans0[0]?.company;
        let j = 0;
        let name0 = [];
        let sum0 = [];
        for (let i=0; i<fullTrans0?.length; i++) {

            // console.log('WWWWW fullTrans0[i]?.company', fullTrans0[i]?.company);
            // console.log('WWWWW company0', company0);
            // console.log('(fullTrans0[i]?.company !== company0', fullTrans0[i]?.company !== company0);
            if (fullTrans0[i]?.company !== company0) {

                // console.log('sum0[]', sum0);
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
        const region2 = regionFilter('Юг');
        const region3 = regionFilter('Север');
        console.log('===regio1', region1);
        // console.log('===regio2', region2);
        // console.log('===regio3', region3);

    const cropsStateOptions0 = cropStateOptions4();

    // const region1 = sumfullCrops.filter(item => item.region === 'Центр');
    // const region2 = sumfullCrops.filter(item => item.region === 'Юг');
    // const region3 = sumfullCrops.filter(item => item.region === 'Север');

    return (
        <div className='page3'>
            <div className='page3__container'>
                <div className='region1'>
                    <h3>Центральный регион</h3>
                    <div className='context-region1'>
                        {region1.map((item) => 
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
