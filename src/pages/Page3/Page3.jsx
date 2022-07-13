import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Propmpt from '../../components/Prompt';
import { cropStateOptions4 } from '../../containers/utils';
import { saveFullData4 } from '../../stores/fullSlice';
import Mosaic from '../../components/Mosaic';
import './Page3.css';
import Spinner from '../../components/Spinner';

const Page3 = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const nameAddWbr = (str) => {
        switch (str) {
            case 'Подсолнечник':
                return 'Подсолнеч&shyник';
            case 'Подсолнечник ВО':
                return 'Подсолнеч&shyник ВО';
            default:
                return str    
        }
    }

    useEffect(() => {
          const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_FULL';
          axios.get(apiUrl).then((resp) => {
            const full = resp.data;
            dispatch(saveFullData4(full.value));
            setLoading(false); 
          });
        }, []);
    
        const fullStage4 = useSelector(state => state.fulls.fullData4);

        const transformFull3 = (obj={},num) => {
            let plan0 = (obj.PLAN >= obj.FACT ) ? Math.round(obj.PLAN) : Math.round(obj.FACT);
            let sum5 =  Math.round(obj?.PLAN - obj?.FACT - Math.round((plan0-Math.round(obj.FACT))*Math.round(obj.PROGRESS)/100 ))
            return {
                company: obj.AO__FULLNAME+'/'+obj.FIELD_GROUP__NAME,
                title: obj.AO__FULLNAME,
                titleName: obj.AO__FULLNAME+' '+obj.CROPS__NAME,
                subTitle: obj.FIELD_GROUP__NAME,
                id: 1000+num,
                region: obj.AO__REGION,
                // layCompany: 1,
                // layCrops: layCrops0,
                name: obj.CROPS__NAME,
                fact: Math.round(obj.FACT),
                factInTime: Math.round(obj.FACT_IN_TIME),
                factOverTime: Math.round(obj.FACT_OVERTIME),
                factToday: 0,
                factTodayOver: 0,
                plan: plan0,
                progress: Math.round(obj.PROGRESS),
                sum: [plan0, 
                      Math.round((plan0-Math.round(obj.FACT))*Math.round(obj.PROGRESS)/100 ), 
                      0, 
                      Math.round(obj?.FACT), 
                      Math.round(obj.FACT_OVERTIME),
                      (sum5 > 0) ? sum5 : 0
                    ]
          }}

        const fullTrans = []; 
        let sum0 = [];
        // let layCrops0;
        for (let i=0; i<fullStage4?.length; i++) {
            sum0 = [Math.round(fullStage4[i]?.PLAN), 0, 0, Math.round(fullStage4[i]?.FACT), 0, Math.round(fullStage4[i]?.PLAN - fullStage4[i]?.FACT)];
            // layCrops0 = (fullStage4[i]?.AO__REGION === "Север") ? 6 : 1;
            fullTrans.push(transformFull3(fullStage4[i],i,sum0));
        }

        const fullSort = fullTrans.slice().sort((a,b) => {
            if (a.titleName < b.titleName) {
                return -1;
            }
            if (a.titleName > b.titleName) {
                return 1;
            }
            return 0;
        });

        const sumfullCrops = [];
        let titleName0 = fullSort[0]?.titleName;
        let titleM = '';
        let companyM = '';
        let nameM = '';
        let regionM = '';
        // let layCropsM = 1;
        let sumFact = 0;
        let sumFactInTime = 0;
        let sumFactOverTime = 0;
        let sumPlan = 0;
        let sumM = [];
//-------------------------------------------------------------------------------------------------        
        for (let i=0; i<fullSort?.length; i++) {

            if ((fullSort[i]?.titleName !== titleName0) ) {
                sumPlan = sumPlan.toFixed(0);
                sumFact = sumFact.toFixed(0);
                sumFactInTime = sumFactInTime.toFixed(0);
                sumFactOverTime = sumFactOverTime.toFixed(0);
                sumfullCrops.push({
                    titleName: titleName0,
                    title: fullSort[i-1]?.title,
                    company: fullSort[i-1]?.title,
                 
                 
                 
                 
                 
                    name:  fullSort[i-1]?.name,
                    region: fullSort[i-1]?.region,
                    // layCrops: fullSort[i-1]?.layCrops,
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
            // layCropsM = fullSort[i-1]?.layCrops;
            sumM = fullSort[i-1]?.sum;
        }
//---------------------------------------------------------------------------------------
        sumPlan = sumPlan.toFixed(0);
        sumFact = sumFact.toFixed(0);
        sumFactInTime = sumFactInTime.toFixed(0);
        sumFactOverTime = sumFactOverTime.toFixed(0);

        sumfullCrops.push({
            titleName: titleName0,
            title: titleM,
            company: companyM,
            name:  nameM,
            region: regionM,
            // layCrops: layCropsM,
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

        const sumFullSort = sumfullCrops.slice().sort((a,b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            if (a.sum[0] < b.sum[0]) {
                return 1;
            }
            if (a.sum[0] > b.sum[0]) {
                return -1;
            }
            return 0;
        });

        const cropsTop6 = []
        let title0 = sumFullSort.title;
        let j = 0;
        for (let i=0; i<fullSort?.length; i++) {
            if (title0 !== sumFullSort[i]?.title) {
                title0 = sumFullSort[i]?.title;
                j = 0;
            }
            if (j < 6) {
                (sumFullSort[i]) && cropsTop6.push(sumFullSort[i])
                j+=1
            } 
        }

    const regionFilter = (string0) => {
        const fullFinish = []; 
        const fullTrans0 = cropsTop6.slice().filter(item => item.region === string0);
        let numReg = 1;
        switch (string0) {
            case 'Центр':
                numReg = 1;
                break
            case 'Юг':
                numReg = 2;                
                break
            case 'Север':
                numReg = 3;
                break
            default:
                numReg = 0;                
        }
        fullTrans0.push({
            company: 'AAAAA',
            title: 'AAAAA',
            titleName: 'BBBBB',
            subTitle: 'CCCCC',
            id: 1088,
            region: 'Центр',
            // layCompany: 1,
            // layCrops: 1,
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
        let company0 = fullTrans0[0]?.company;
        let j = 0;
        let crops0 = [];
        let sumAll0 = 0;
        for (let i=0; i<fullTrans0?.length; i++) {
            if (fullTrans0[i]?.company !== company0) {
                fullFinish.push({
                    company: fullTrans0[i-1]?.company,
                    id: 1000*numReg+i,
                    region: fullTrans0[i-1]?.region,
                    // layCompany: 1,
                    // layCrops: fullTrans0[i-1]?.layCrops,
                    crops: crops0,
                    sumAll: sumAll0,
                })
                company0 = fullTrans0[i]?.company;
                j = 0;
                sumAll0 = 0;
                crops0 = [];
            }
            sumAll0 += fullTrans0[i]?.sum[0];
            crops0.push({
                name: fullTrans0[i]?.name,
                sum: fullTrans0[i]?.sum
            })
            j += 1;
        } 

        const fullFinish1 = fullFinish.slice().sort((a,b) => {
            if (a.sumAll < b.sumAll) {
                return 1;
            }
            if (a.sumAll > b.sumAll) {
                return -1;
            }
            return 0;
        });

        for (let i=0; i < fullFinish1.length; i++) {
            if ((fullFinish1[i].crops[5]) && (fullFinish1[i].crops[3].sum[0]/fullFinish1[i].crops[5].sum[0] > 3 )) {
                fullFinish1[i].crops.pop();
            }
            if ((fullFinish1[i].crops[4]) && (fullFinish1[i].crops[3].sum[0]/fullFinish1[i].crops[4].sum[0] > 2 )) {
                fullFinish1[i].crops.pop();
            }
        }   

        return fullFinish1;
    }

    const region1 = regionFilter('Центр');
    const region2 = regionFilter('Юг');
    const region3 = regionFilter('Север');

    console.log('region1', region1);

    const cropsColor = cropStateOptions4();

    return ( 
        <div className='page3'>
            {loading && 
            <div className='page3'>
                <Spinner />
            </div>}
            <div className='page3__container'>
                <div className='region1'>
                    <h3>Центральный регион</h3>
                    <div className='context-region1'>
                        {region1.map((item, index) => 
                            <div className='reg'>
                                <Mosaic h={11.9} cropsComp={{item}} />
                            </div>
                        )}        
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region2'>
                    <h3>Южный регион</h3>
                    <div className='context-region2'>
                        {region2.map((item) => 
                            <div className='reg'>
                                <Mosaic h={9.15} cropsComp={{item}} />                            </div>
                        )}                     
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region3'>
                    <h3>Северный регион</h3>
                    <div className='context-region3'>
                        {region3.map((item) => 
                            <div className='reg'>
                                <Mosaic h={16} cropsComp={{item}} />                            </div>
                        )}        
                    </div>
                </div>
            </div>

            <div className='page3__footer'>
                {cropsColor.map(item => { 
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
