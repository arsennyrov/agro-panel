import React from 'react';
import { useSelector } from 'react-redux';

import { format } from '../../containers/utils';
import './Card.css';

const Card = ({width, title, region, index}) => {
    const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
    const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  

    const stylePercent = {
        width: `${region.percent*width/100}vw`,
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
                <div className={`card-percent card-percent${index}`} style={stylePercent}>
                </div>
                <div className='card-pad'>
                    <span className='card-span-percent'>
                        {region.percent.toFixed(2)}% 
                    </span>                        
                    <span className='card-span-amount'>
                        {format(region.amount.toFixed(2))} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> }

                {(region.percent === 0  && region.info) && <>
                <div className='card-pad1'>
                    <span className={`card-span-amount card-span-amount${index}`}>
                        {format(region.amount.toFixed(2))} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> } 
            </div>
        </>
    );
};

export default Card;