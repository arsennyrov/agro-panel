import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import { area } from '../../containers/regions';
import './Cards.css';


const Cards = ({overAll, type}) => {
    // const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
    // const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  
    
    const areas = area();
    console.log('---areas', areas);
    console.log('---overall', overAll);

    return (
        <>
            {areas.map((item, index) => { 
                // console.log('------index', index);
                // console.log('------overall[index]', overall[index]);
                return (
                <div className={`card${index+1}`}>
                    <Card 
                        item={item}
                        region={overAll[index]}
                        type={type}
                    /> 
                </div>
            )})}
        </>
    )
};

export default Cards;