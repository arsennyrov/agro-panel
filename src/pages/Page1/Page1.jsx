import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Header from '../../components/Header';
import './Page1.css';
import Cards from '../../components/Cards/Cards';
import { overAll0, overAll1, overAll2, overAll3, overAll4 } from '../../containers/data';
import SvgHome from '../../components/Svg';
import { changeRegionsData4 } from '../../stores/regionSlice';
import { area } from '../../containers/regions';
import Spinner from '../../components/Spinner';

let overAll = overAll1();

const Page1 = ()   => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    let checkedRadioLeft = useSelector(state => state.crops?.selectedRadioLeft); 
  
    useEffect(() => {
      const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_REGION';
      axios.get(apiUrl).then((resp) => {
        const regions = resp.data;
        dispatch(changeRegionsData4(regions.value));
        setLoading(false);
      });
    }, []);

    const regionStage4 = useSelector(state => state.regions?.regionsData4);  

    const transformRegion = (obj={}) => {
        return {
            area: obj?.AO__REGION,
            percent: obj?.PROGRESS,
            amount: obj?.PLAN,
            fieldCount: obj?.FIELDS_COUNT,
            fieldComplite: obj?.FIELD_COMPLITE,
            info: true
        }
    }

    const areas = area();
    const regStage4 = [];

    for (let i=0; i<regionStage4.length; i++) {
        let objj = regionStage4.find((item) => (areas[i].title === item.AO__REGION));
        if (objj) 
            regStage4.push(transformRegion(objj));
    }

    overAll = overAll0();

    for (let i=0; i<overAll.length; i++) {
        regStage4.push((overAll[i]));
    }

    const checkedRadioRight = useSelector(state => state.crops?.selectedRadioRight);  
    checkedRadioLeft = useSelector(state => state.crops?.selectedRadioLeft);  

    const typeLeft = (checkedRadioLeft === 'Количество - Га') ? 1 : 2;

    switch (checkedRadioRight) {
        case "Почвоподготовка":        
            overAll = overAll1();
            break;
        case "Сев":        
            overAll = overAll2();
            break;
        case "Выращивание":        
            overAll = overAll3();
            break;
        case "Уборка":        
            overAll = regStage4;
            break;
        default:
            overAll = [];
    }

    return (
        <div className='page1'> 
            <div className='header'>
                <Header />
            </div>    
            
            <div className='chart' style={{ fill: "#0f0", }}>
                    <SvgHome svgFill={[overAll[0].info, overAll[1].info, overAll[2].info]} />
            </div>
            {loading && 
                    <div className='page3'>
                        <Spinner />
                    </div>} 

            <div className='container-cards'>
                <Cards overAll={overAll} type={typeLeft} numWork={4} />
            </div>

        </div>
    );
};

export default Page1;