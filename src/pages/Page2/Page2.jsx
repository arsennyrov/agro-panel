import React from 'react';
import { useSelector } from 'react-redux';

import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './Page2.css';
import crops from '../../containers/data';
import cropHead from '../../containers/cropHead';
import Grid from '../../components/Grid';

const crop = crops();
const cropHeadM= cropHead();

const Page2 = (props) => {

    return (
        <div className='page2'>
            <div className='container-tab'>

                <Grid data={crop} /> 

            </div>
            <div className='container-chart'>
                <BarChart />
                <PieChart />
            </div>
        </div>
    );
};

export default Page2;