import React from 'react';
import { useSelector } from 'react-redux';

import { format } from '../../containers/utils';
import './Card.css';

const Card = ({item, region, type, numWork}) => {

    console.log('region', region);

    const { widthCard, title, index, color } = item;

    let regPercent = 11
    let regAmount = 111
    if (numWork === 4) {
        regPercent = type === 1 ? region?.percent : 100*region?.fieldComplite/region?.fieldCount
        regAmount = type ===1 ? region?.amount : region?.fieldCount
    } 

    const stylePercent = {
        width: `${regPercent*widthCard/100}vw`,
        backgroundColor: color,
    }

    return (
        <>
            {region.info && <div className='card-title'>
                <span className='card-span-title'>{title}</span>
            </div>}
            {!region.info && <div className='card-title'>
                <span className='card-span-title-none'>{title}</span>
            </div>}

            <div className={`card-wropper card-wropper${index}`}>

                {!region.info && <span className='span-none'>{'нет данных'}
                </span>}

                {(region.percent !== 0 && region.info) && <>
                <div className={`card-percent card-percent${index}`} 
                    style={stylePercent}>
                </div>
                <div className='card-pad'>
                    <span className='card-span-percent'>
                        {regPercent.toFixed(2)}% 
                    </span>                        
                    <span className='card-span-amount'>
                        { (regAmount) && format(regAmount.toFixed(2))} {(type === 1) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> }

                {(region.percent === 0 && numWork === 4 && region.info) && <>
                <div className='card-pad1'>
                    <span className={`card-span-amount card-span-amount${index}`}>
                        {format(region.amount.toFixed(2))} {(type === 1) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> } 
            </div>
        </>
    );
};

export default Card;
