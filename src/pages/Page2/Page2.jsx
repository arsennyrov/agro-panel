import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './Page2.css';
import crops from '../../containers/data';
import Grid from '../../components/Grid';
import { saveFullData4 } from '../../stores/fullSlice';
import Button from '../../components/Button/Button';
import { transformFull } from '../../containers/utils';

const crop = crops();

const Page2 = (props) => {

    const [page2Click, setPage2Click] = useState(1);  
    const dispatch = useDispatch();

    useEffect(() => {
          const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_FULL';
          axios.get(apiUrl).then((resp) => {
            const full = resp.data;
            dispatch(saveFullData4(full.value)); 
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
                sumPlan = sumPlan.toFixed(2);
                sumFact = sumFact.toFixed(2);
                sumFactInTime = sumFactInTime.toFixed(2);
                sumFactOverTime = sumFactOverTime.toFixed(2);
                sumfullCrops.push({
                    name: name0,
                    plan: sumPlan,
                    fact: sumFact,
                    factInTime: sumFactInTime,
                    factOverTime: sumFactOverTime,
                    factToday: sumFact/12,
                    factTodayOver: sumFactOverTime/12,
                    progress: ((100*sumFact)/sumPlan).toFixed(2),
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
        sumPlan = sumPlan.toFixed(2);
        sumFact = sumFact.toFixed(2);
        sumFactInTime = sumFactInTime.toFixed(2);
        sumFactOverTime = sumFactOverTime.toFixed(2);
        sumfullCrops.push({
            name: name0,
            plan: sumPlan,
            fact: sumFact,
            factInTime: sumFactInTime,
            factOverTime: sumFactOverTime,
            factToday: sumFact/12,
            factTodayOver: sumFactOverTime/12,
            progress: ((100*sumFact)/sumPlan).toFixed(2),
            info: true,
        });

    const tabCrops41 = [];
    let item0 = '';
    item0 = sumfullCrops.find((item) => (item.name === 'Кукуруза'));
    tabCrops41.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Подсолнечник'));
    tabCrops41.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Подсолнечник ВО'));
    tabCrops41.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Пшеница озимая'));
    tabCrops41.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Пшеница яровая'));
    tabCrops41.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Ячмень яровой'));
    tabCrops41.push(item0);

    const tabCrops42 = [];
    item0 = sumfullCrops.find((item) => (item.name === 'Картофель индустр.'));
    tabCrops42.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Картофель прод.'));
    tabCrops42.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Лен'));
    tabCrops42.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Рожь озимая'));
    tabCrops42.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Соя'));
    tabCrops42.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Рапс яровой'));
    tabCrops42.push(item0);

    const tabCrops43 = [];
    item0 = sumfullCrops.find((item) => (item.name === 'Кормовые бобы'));
    tabCrops43.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Лук'));
    tabCrops43.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Морковь'));
    tabCrops43.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Нут'));
    tabCrops43.push(item0);
    item0 = sumfullCrops.find((item) => (item.name === 'Столовая свекла'));
    tabCrops43.push(item0);

    const onClick1 = () => {
       setPage2Click(1);
    }
    const onClick2 = () => {
        setPage2Click(2);
    }
    const onClick3 = () => {
        setPage2Click(3);
    }
    const onClick4 = () => {
        setPage2Click(4);
    }

    return (
        <div className='page2'>
            <div className='container-tab'>
                {(page2Click === 1) && <Grid data={crop} page2Click={page2Click} /> }
                {(page2Click === 2) && <Grid data={tabCrops41} page2Click={page2Click} /> }
                {(page2Click === 3) && <Grid data={tabCrops42} page2Click={page2Click} /> }
                {(page2Click === 4) && <Grid data={tabCrops43} page2Click={page2Click} /> }
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