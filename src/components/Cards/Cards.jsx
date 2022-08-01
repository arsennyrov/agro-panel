import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import { area } from '../../containers/regions';
import './Cards.css';


const Cards = ({overAll, type, numWork}) => {
    const areas = area();

    return (
        <>
            {areas.map((item, index) => { 
                return (
                <div className={`card${index+1}`}>
                    <Card 
                        item={item}
                        region={overAll[index]}
                        type={type}
                        numWork={numWork}
                    /> 
                </div>
            )})}
        </>
    )
};

export default Cards;