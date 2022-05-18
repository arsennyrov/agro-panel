import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import './Page1.css';
import Card from '../../components/Card/Card';
import { overall1, overall2, overall3, overall4 } from '../../containers/data';
import { area } from '../../containers/regions';
import SvgHome from '../../components/Svg';

const areas = area();
const colorCard = [areas[0].color, areas[1].color, areas[2].color,];
const titleColorCard = [areas[0].color, areas[1].color, areas[2].color,];
const widthCard0 = [areas[0].widthCard, areas[1].widthCard, areas[2].widthCard,];
let overall = overall1();

const Page1 = () => {

    const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name); 
    const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  
    const checkedRadioRight = useSelector(state => state.crops.selectedRadioRight);  
    console.log('checkedRadioRight', checkedRadioRight);

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

            <div className='footer'>
                <div className='container-cards'>
                    <div className='card1'>
                        <Card 
                            color={colorCard[0]} 
                            titleColor={titleColorCard[0]} 
                            width={widthCard0[0]}
                            region={(checkedRadioLeft===defaultLeft) ? overall[0] : overall[3]} />
                    </div>
                    <div className='card2'>
                        <Card  
                            color={colorCard[1]} 
                            titleColor={titleColorCard[1]} 
                            width={widthCard0[1]}
                            region={(checkedRadioLeft===defaultLeft) ? overall[1] : overall[4]} />
                    </div>
                    <div className='card3'>
                        <Card 
                            color={colorCard[2]} 
                            titleColor={titleColorCard[2]} 
                            width={widthCard0[2]}
                            region={(checkedRadioLeft===defaultLeft) ? overall[2] : overall[5]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;