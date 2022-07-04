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
            {areas.map((item, index) => { 
                return (
                <div className={`card${index+1}`}>
                    <Card 
                        width={item.widthCard}
                        title={item.title}
                        index={item.number} 
                        region={(checkedRadioLeft===defaultLeft) ? 
                                overall[0+index] : overall[3+index]}
                    /> 
                </div>
            )})}
        </>
    )
};

export default Cards;