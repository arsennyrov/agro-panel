import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import './Page1.css';
import Cards from '../../components/Cards/Cards';
import { overall1, overall2, overall3, overall4 } from '../../containers/data';
import SvgHome from '../../components/Svg';

let overall = overall1();

const Page1 = () => {

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
            overall = overall4();
            break;
        default:
            overall = overall1();
    }

    return (
        <div className='page1'>
            <div className='header'>
                <Header />
            </div>    
            
            <div className='chart' style={{ fill: "#0f0", }}>
                    <SvgHome svgFill={[overall[0].info, overall[1].info, overall[2].info]} />
            </div>

            <div className='container-cards'>
                <Cards overall={overall} />
            </div>

        </div>
    );
};

export default Page1;