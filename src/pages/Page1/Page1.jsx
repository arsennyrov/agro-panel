import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Header from '../../components/Header';
import './Page1.css';
import Cards from '../../components/Cards/Cards';
import { overall0, overall1, overall2, overall3, overall4 } from '../../containers/data';
import SvgHome from '../../components/Svg';
import { changeRegionsData4 } from '../../stores/regionSlice';
import { area } from '../../containers/regions';
import Spinner from '../../components/Spinner';

let overall = overall1();

const Page1 = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    // const [appState, setAppState] = useState();
  
    useEffect(() => {
    //   const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
      const apiUrl = 'https://agroinvest-dev002-dev-sap-cloud-dashboard-back-srv.cfapps.eu10.hana.ondemand.com/fw20/FW20_REGION';
      axios.get(apiUrl).then((resp) => {
        const regions = resp.data;
        dispatch(changeRegionsData4(regions.value));
        setLoading(false);
      });
    }, []);

    const regionStage4 = useSelector(state => state.regions.regionsData4);  

    const transformRegion = (obj={}) => {
        return {
            area: obj.AO__REGION,
            percent: obj.PROGRESS,
            amount: obj.PLAN,
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
    overall = overall0();

    for (let i=0; i<overall.length; i++) {
        regStage4.push((overall[i]));
    }

    const checkedRadioRight = useSelector(state => state.crops.selectedRadioRight);  

    switch (checkedRadioRight) {
        case "Почвоподготовка":        
            overall = overall1();
            break;
        case "Сев":        
            overall = overall2();
            break;
        case "Выращивание":        
            overall = overall3();
            break;
        case "Уборка":        
            overall = regStage4;
            break;
        default:
            overall = overall1();
    }


    // return <Spinner />

    return (
        <div className='page1'> 
            <div className='header'>
                <Header />
            </div>    
            
            <div className='chart' style={{ fill: "#0f0", }}>
                    <SvgHome svgFill={[overall[0].info, overall[1].info, overall[2].info]} />
            </div>
            {loading && 
                    <div className='page3'>
                        <Spinner />
                    </div>}

            <div className='container-cards'>
                <Cards overall={overall} />
            </div>

        </div>
    );
};

export default Page1;