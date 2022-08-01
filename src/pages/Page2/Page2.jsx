import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Pagination } from "antd";

import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './Page2.css';
import Grid from '../../components/Grid';
import { saveFullData4 } from '../../stores/fullSlice';
import { transformFull } from '../../containers/utils';
import Spinner from '../../components/Spinner';

const Page2 = (props) => {

    const [selected, setSelected] = useState(1);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
          const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_FULL';
          axios.get(apiUrl).then((resp) => {
            const full = resp.data;
            dispatch(saveFullData4(full.value)); 
            setLoading(false);
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
                    factTodayOver: sumFactOverTime/18,
                    progress: (100*sumFact)/sumPlan,
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
            progress: (100*sumFact)/sumPlan,
            info: true,
        });

        const sumFullSort0 = sumfullCrops.slice().sort((a,b) => {
            if (a.plan < b.plan) {
                return 1;
            }
            if (a.plan > b.plan) {
                return -1;
            }
            return 0;
        });

        const sumFullSort = sumFullSort0.slice().sort((a,b) => {
            if (a.fact < b.fact) {
                return 1;
            }
            if (a.fact > b.fact) {
                return -1;  
            }
            return 0;
        });

    const onChange = (page, pageSize) => {
        setSelected(page);
    }
  
    const data0 = sumFullSort.slice(6*(selected-1),Math.min(6*selected, sumFullSort.length))

    return (
        <>
            {loading && 
            <div className='page3'>
                <Spinner />
            </div>}
            <div className='page2'>
                <div className='container-tab'>
                    <Grid data={data0} />
                </div>

                <Pagination onChange={onChange} total={50} />

                <div className='container-chart'>
                    <BarChart />
                    <PieChart /> 
                </div>
            </div>
        </> 
    );
};

export default Page2;