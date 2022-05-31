import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import './Page1.css';
import Cards from '../../components/Cards/Cards';
import { overall1, overall2, overall3, overall4 } from '../../containers/data';
import SvgHome from '../../components/Svg';

let overall = overall1();

const Page3 = () => {

    const checkedRadioRight = useSelector(state => state.crops.selectedRadioRight);  


    return (
        <div className='page3'>

        </div>
    );
};

export default Page3;