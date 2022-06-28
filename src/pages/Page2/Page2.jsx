import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './Page2.css';
import Grid from '../../components/Grid';
import { saveFullData4 } from '../../stores/fullSlice';
import Button from '../../components/Button/Button';
import { transformFull } from '../../containers/utils';

const Page2 = (props) => {

    const [page2Click, setPage2Click] = useState(0);  
    const dispatch = useDispatch();

    useEffect(() => {
          const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_FULL';
          axios.get(apiUrl).then((resp) => {
            const full = resp.data;
            dispatch(saveFullData4(full.value)); 
            setPage2Click(1);
        });
        }, []);
    
        const fullStage4 = useSelector(state => state.fulls.fullData4);  

        const fullTrans = []; 
        for (let i=0; i<fullStage4.length; i++) {
            fullTrans.push(transformFull(fullStage4[i]));
        }

        const fullSort = fullTrans.slice().sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        const sumfullCrops = [];
        let name0 = fullSort[0]?.name;
        let sumFact = 0;
        let sumFactInTime = 0;
        let sumFactOverTime = 0;
        let sumPlan = 0;
        for (let i=0; i<fullSort?.length; i++) {
            if (fullSort[i]?.name !== name0) {
                sumFact = Math.round(sumFact);
                sumPlan = (sumPlan >= sumFact ) ? Math.round(sumPlan) : sumFact;
                sumFactInTime = Math.round(sumFactInTime);
                sumFactOverTime = Math.round(sumFactOverTime);
                sumfullCrops.push({
                    id: 2100+i,
                    name: name0,
                    plan: sumPlan,
                    fact: sumFact,
                    factInTime: sumFactInTime,
                    factOverTime: sumFactOverTime,
                    factToday: sumFact/12,
                    factTodayOver: sumFactOverTime/12,
                    progress: Math.round((100*sumFact)/sumPlan),
                    info: true,
                });
                name0 = fullSort[i]?.name;
                sumFact = 0;
                sumFactInTime = 0;
                sumFactOverTime = 0;
                sumPlan = 0;
            }
            sumFact += fullSort[i]?.fact;
            sumFactInTime += fullSort[i]?.factInTime;
            sumFactOverTime += fullSort[i]?.factOverTime;
            sumPlan += fullSort[i]?.plan;
        }
        sumPlan = Math.round(sumPlan);
        sumFact = Math.round(sumFact);
        sumFactInTime = Math.round(sumFactInTime);
        sumFactOverTime = Math.round(sumFactOverTime);
        sumfullCrops.push({
            id: 2111,
            name: name0,
            plan: sumPlan,
            fact: sumFact,
            factInTime: sumFactInTime,
            factOverTime: sumFactOverTime,
            factToday: sumFact/12,
            factTodayOver: sumFactOverTime/12,
            progress: Math.round((100*sumFact)/sumPlan),
            info: true,
        });

        const sumFullSort = sumfullCrops.slice().sort((a,b) => {
            if (a.plan < b.plan) {
                return 1;
            }
            if (a.plan > b.plan) {
                return -1;
            }
            return 0;
        });

    const tabCrops41 = [];
    for (let i=0; i < 6; i++) {
        tabCrops41.push(sumFullSort[i]);
    }     
    const tabCrops42 = [];
    for (let i=6; i < 12; i++) {
        tabCrops42.push(sumFullSort[i]);
    }     
    const tabCrops43 = [];
    for (let i=12; i < sumFullSort.length; i++) {
        tabCrops43.push(sumFullSort[i]);
    }     

    const onClick2 = () => {
        setPage2Click(1);
    }
    const onClick3 = () => {
        setPage2Click(2);
    }
    const onClick4 = () => {
        setPage2Click(3);
    }

    return (
        <div className='page2'>
            <div className='container-tab'>
                {(page2Click === 1) && <Grid data={tabCrops41} page2Click={page2Click} /> }
                {(page2Click === 2) && <Grid data={tabCrops42} page2Click={page2Click} /> }
                {(page2Click === 3) && <Grid data={tabCrops43} page2Click={page2Click} /> }
            </div>
            <div className='page2-button'> 
              {/* <Button className='page2-butt1' name={'Сев'} onClick={onClick1} /> */}
              <Button className='page2-butt2' name={'1'} onClick={onClick2} />
              <Button className='page2-butt3' name={'2'} onClick={onClick3} />
              <Button className='page2-butt4' name={'3'} onClick={onClick4} />
            </div>
            <div className='container-chart'>
                <BarChart />
                <PieChart /> 
            </div>
        </div>
    );
};

export default Page2;