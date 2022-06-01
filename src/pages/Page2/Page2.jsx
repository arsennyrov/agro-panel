import React from 'react';

import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './Page2.css';
import crops from '../../containers/data';
import Grid from '../../components/Grid';

const crop = crops();

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