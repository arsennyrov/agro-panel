import React from 'react';
import { useSelector } from 'react-redux';

import { format } from '../../containers/utils';
import './Card.css';

const Card = ({color, width, title, region}) => {
    const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
    const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  
    
    const stylePercent = {
        width: `${region.percent*width/100}vw`,
        //  width: `${region.percent}%`,
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

            <div className='card-wropper' style={{borderColor: color}}>

                {!region.info && // <div className='card'>
                        <span className='span-none'>{'нет данных'}</span>
               // </div>
                }

                {(region.percent !== 0 && region.info) && <>
                <div className='card-percent' style={stylePercent}>
                </div>
                <div className='card-pad'>
                    <span className='card-span-percent'>
                        {region.percent}% 
                    </span>                        
                    <span className='card-span-amount'>
                        {format(region.amount)} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> }

                {(region.percent === 0 ) && <>
                <div className='card-pad'  style={{top: "0px", left: "10vw"}}>
                    <span className='card-span-amount' style={{color: color}}>
                        {format(region.amount)} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}
                    </span>
                </div> 

                </> } 


            </div>
        </>
    );
};

export default Card;