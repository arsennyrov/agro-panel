import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import { area } from '../../containers/regions';
import './Cards.css';


const Cards = ({overall}) => {
    const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
    const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  
    
    const areas = area();

    return (
        <>
            <div className='card1'>
                <Card 
                    color={areas[0].color}
                    width={areas[0].widthCard}
                    title={areas[0].title} 
                    region={(checkedRadioLeft===defaultLeft) ? overall[0] : overall[3]}
                 /> 
            </div>

            <div className='card2'>
                <Card 
                    color={areas[1].color}
                    width={areas[1].widthCard}
                    title={areas[1].title} 
                    region={(checkedRadioLeft===defaultLeft) ? overall[1] : overall[4]}                />
            </div>

            <div className='card3'>
                <Card 
                    color={areas[2].color}
                    width={areas[2].widthCard}
                    title={areas[2].title} 
                    region={(checkedRadioLeft===defaultLeft) ? overall[2] : overall[5]}                />
            </div>
        </>
    );
};

export default Cards;