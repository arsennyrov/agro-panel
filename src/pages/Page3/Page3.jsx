import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import Propmpt from '../../components/Prompt';
import { saveFullData4, changeLoading, saveFullFields } from '../../stores/fullSlice';
import MosaicRegion from '../../components/MosaicRegion';
import './Page3.css';
import Spinner from '../../components/Spinner';
import { cropStateOptions41 } from '../../containers/utils';
import Page31 from '../Page31';

const Page3 = () => {

    const dispatch = useDispatch();
    const [titleFirm, setTitleFirm] = useState('');
    const [cropsComp0, setCropsComp0] = useState([]);

    let loading = useSelector(state => state.fulls.loading);

    useEffect(() => {
          const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_REG_DO_GROUP_CROP';
          loading && axios.get(apiUrl).then((resp) => {
            const full = resp.data;
            dispatch(saveFullData4(full.value));
            dispatch(changeLoading(false));
            // setLoading(false); 
          });
        }, []);
    
        const fullStage4 = useSelector(state => state.fulls.fullData4);
        loading = useSelector(state => state.fulls.loading);
        const transformFull = (obj={},num) => {
            let plan0 = (obj.PLAN >= obj.FACT ) ? Math.round(obj.PLAN) : Math.round(obj.FACT);
            let sum5 =  Math.round(obj?.PLAN - obj?.FACT - Math.round((plan0-Math.round(obj.FACT))*Math.round(obj.PROGRESS)/100 ))
            return {
                company: obj.AO__FULLNAME+'/'+obj.FIELD_GROUP__NAME,
                title: obj.AO__FULLNAME,
                titleName: obj.AO__FULLNAME+' '+obj.CROPS__NAME,
                fieldGroup: obj.FIELD_GROUP__NAME,
                id: 1000+num,
                region: obj.AO__REGION,
                name: obj.CROPS__NAME,
                fact: Math.round(obj.FACT),
                factInTime: Math.round(obj.FACT_IN_TIME),
                factOverTime: Math.round(obj.FACT_OVERTIME),
                factToday: 0,
                factTodayOver: 0,
                plan: plan0,
                progress: Math.round(obj.PROGRESS),
                fieldsCount: obj.FIELDS_COUNT,
                fieldsComplite: obj.FIELD_COMPLITE,
                fields: [],
                sum: [plan0, 
                      Math.round((plan0-Math.round(obj.FACT))*Math.round(obj.PROGRESS)/100 ), 
                      0, 
                      Math.round(obj?.FACT), 
                      Math.round(obj.FACT_OVERTIME),
                      (sum5 > 0) ? sum5 : 0
                    ]
          }}

        const fullTrans = []; 
        for (let i=0; i<fullStage4?.length; i++) {

            fullTrans.push(transformFull(fullStage4[i],i));
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

        const sumfullFields = [];
        let titleName0 = fullSort[0]?.titleName;
        let title00 = '';
        let cropName0 = '';
        let region0 = '';
        let fieldGroup0 = '';
        let cropFields0 = [];

        let sumPlan = 0;
        let sumFact = 0;
        let sumCount = 0;
        let sumComplite = 0;
//--------------------------------------------------------------------------------------        
        for (let i=0; i<fullSort?.length; i++) {

            if ((fullSort[i]?.titleName !== titleName0) ) {
                sumfullFields.push({
                    title: fullSort[i-1]?.title,
                    cropName: fullSort[i-1]?.name,
                    region: fullSort[i-1]?.region,
                    fields: cropFields0,
                    value: sumPlan,
                });
                cropFields0 = [];
                titleName0 = fullSort[i]?.titleName;
                sumPlan = 0;
                sumFact = 0;
                sumCount = 0;
                sumComplite = 0;            
            }
            title00 = fullSort[i-1]?.title;
            cropName0 = fullSort[i-1]?.name;
            region0 = fullSort[i-1]?.region;
            fieldGroup0 = fullSort[i]?.fieldGroup;
            sumCount += fullSort[i]?.fieldsCount;
            sumComplite += fullSort[i]?.fieldsComplite;
            sumPlan += fullSort[i]?.plan;
            sumFact += fullSort[i]?.fact;

            cropFields0.push({fieldGroup0, sumCount, sumComplite, sumPlan, sumFact});
        }
//---------------------------------------------------------------------------
        sumfullFields.push({
            titleName: titleName0,
            title: title00,
            cropName: cropName0,   
            region: region0,
            fieldGroup: fieldGroup0,
            fieldsCount: sumCount,
            fieldsComplite: sumComplite,
        });
        dispatch(saveFullFields(sumfullFields));
//------------------------------------------------------------------------------------------------
        const sumfullCrops = [];
        titleName0 = fullSort[0]?.titleName;
        let titleM = '';
        let companyM = '';
        let nameM = '';
        let regionM = '';
        // let layCropsM = 1;
            sumFact = 0;
        let sumFactInTime = 0;
        let sumFactOverTime = 0;
            sumPlan = 0;
        let sumM = [];
//-------------------------------------------------------------------------------------------------        
        for (let i=0; i<fullSort?.length; i++) {
            if ((fullSort[i]?.titleName !== titleName0) ) {
                sumfullCrops.push({
                    title: fullSort[i-1]?.title,
                    company: fullSort[i-1]?.title,
                    name:  fullSort[i-1]?.name,
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
        sumfullCrops.push({
            titleName: titleName0,
            title: titleM,
            company: companyM,
            name:  nameM,
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



        for (let i=0; i < sumfullCrops.length; i++) {
            sumfullCrops[i].sum[0] = sumfullCrops[i].plan;
            sumfullCrops[i].sum[3] = sumfullCrops[i].fact;
        }

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

        
    const regionFilter = (pRegion='', pFirm='') => {
        const fullFinish = []; 

        let fullTrans0 =[];
        if (pFirm) {
            fullTrans0 = sumFullSort.slice().filter(item => item.company === pFirm);
        } else {
            fullTrans0 = sumFullSort.slice().filter(item => item.region === pRegion);
        }

        let numReg = 1;
        switch (pRegion) {
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


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1


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
      
        if (pFirm) {
            return fullFinish1;            
        } 
        // Отсекаем культуры с площадью < 300 Га если количество культур > 5
        for (let i=0; i < fullFinish1.length; i++) {
            while (fullFinish1[i].crops.length>5 && fullFinish1[i].crops[fullFinish1[i].crops.length-1].sum[0] < 300 ) {
                fullFinish1[i].crops.pop();
            }
        }   
        return fullFinish1;
    }

    const transRegion = (reg) => {
        let regionSum = reg.map(item => item.sumAll).reduce((partialSum, a) => partialSum + a, 0);
        let percentReg = [];
        for (let i=0; i < reg.length; i++) {
        percentReg[i] = 100*reg[i].sumAll/regionSum;
        reg[i].percent = percentReg[i]
        }   
        if (percentReg[reg.length-2] < 10) {
            const percent0 = (percentReg[reg.length-2] + percentReg[reg.length-1])/2;
            reg[reg.length-2].percent = percent0;
            reg[reg.length-1].percent = percent0;
        }
        return (
            reg
        )
    }
    
    const createRegMain = (arr) => {
        const arr1 = [];
        for (let i=0; i < arr.length; i++) {
            arr1.push({
                company: arr[i].company,
                value: arr[i].sumAll,
            })
        }
        return (
            arr1
        )
    }

    const region1 = regionFilter('Центр');
    const region2 = regionFilter('Юг');
    const region3 = regionFilter('Север');

    const regionMain1 = createRegMain(region1).slice();
    const regionMain2 = createRegMain(region2).slice();
    const regionMain3 = createRegMain(region3).slice();

    const cropsColor1 = cropStateOptions41();




    const headClick = (index) => (event) => {
        const numReg = index.substr(0,1);
        const numFirm = index.substr(1,2);
        let titleFirm = '';

        switch (numReg) {
            case '1':
                titleFirm = region1[numFirm].company;
                setCropsComp0(region1[numFirm]);
                break;
            case '2':
                titleFirm = region2[numFirm].company;
                setCropsComp0(region2[numFirm]);
                break;
            case '3':
                titleFirm = region3[numFirm].company;
                setCropsComp0(region3[numFirm]);
                break;
            default:
                titleFirm = '';
        }
        setTitleFirm(titleFirm);
        
        return (
           index
        )

    }

    return ( 
        <>
        {(titleFirm) ? <Page31 cropsComp0={ cropsComp0} aaa={555} /> :

        <div className='page3'>
            {loading && 
            <div className='page3-spinner'>
                <Spinner />
            </div>}
            <div className='page3__container'>
                <div className='region1'>
                    <h3 className='page3-h3'>Центральный регион</h3>
                    <div className='reg1' >
                        <MosaicRegion 
                            // regMain={regionMain1} 
                            cropsComp={region1} 
                            regNum={'1'} 
                            headClick={headClick}
                        />
                    </div>
                </div>

                <div className='page3__h-line'></div>
 
                <div className='region2'>
                    <h3 className='page3-h3'>Южный регион</h3>
                    <div className='reg2'>
                        <MosaicRegion 
                            // regMain={regionMain2} 
                            cropsComp={region2} 
                            regNum={'2'} 
                            headClick={headClick}
                        />
                    </div>
                </div>

                <div className='page3__h-line'></div>

                <div className='region3'>
                    <h3 className='page3-h3'>Северный регион</h3>
                    <div className='reg3'>
                        <MosaicRegion 
                            // regMain={regionMain3} 
                            cropsComp={region3} 
                            regNum={'3'} 
                            headClick={headClick}
                        />
                    </div>                
                </div>
            </div>

            <div className='page3__footer'>
                {cropsColor1.map(item => { 
                    return (
                        <div className='prompt-wrap'>
                            <Propmpt color={item.color} text={item.text} />
                        </div>
                )})}    
            </div>
        </div> 
        }
        </>
    );
};

export default Page3;
