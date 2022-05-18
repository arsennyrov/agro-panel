import React from 'react';
import { useSelector } from 'react-redux';

import TableHead from '../../components/TableHead';
import TableRow from '../../components/TableRow';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './Page2.css';
import crops from '../../containers/data';
import cropHead from '../../containers/cropHead';

const crop = crops();
const cropHeadM= cropHead();

const Page2 = () => {
    // const defaultUnit = useSelector(state => state.crops.unitRadioGroup[0].name); 
    // const checkedRadioUnit = useSelector(state => state.crops.selectedRadioUnit);  

    const heightTab = 88+145*crop.length;
    const containerTab = { 
        height: heightTab,
    }

    return (
        <div className='page2'>
           <hr></hr>  
            <div className='container-tab' style={containerTab}>
                <TableHead cropHead={cropHeadM} />
                {crop.map((item) => { 
                    return (
                        <TableRow crop={item} />
                    );
                })};
            </div>
            <div className='container-chart'>
                <BarChart />
                <PieChart />
            </div>
        </div>
    );
};

export default Page2;