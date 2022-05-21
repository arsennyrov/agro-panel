import React from 'react';
import { useSelector } from 'react-redux';
import { format } from '../../containers/utils';
import './Card.css';

const Card = ({ color, titleColor, width, region} ) => {
  const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
  const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  

  const styleTitle = { 
    color: titleColor,
  }

  const styleContainer = { 
    width: width-2,
    borderColor: color,
  }

  const stylePad ={
    width: `${region.percent}%`,
    backgroundColor: color,    
  }

  return (
    <>
      {region.info && <div className='container-title'>
        <span className='title' style={ styleTitle }>
          {region.area}
        </span>
      </div>}

      {!region.info && <div className='container-title'>
        <span className='title' style={{ color: "rgba(9, 7, 6, 0.2)" }}>
          {region.area}
        </span>
      </div>}

      {region.info && <div className='container-card' style={ styleContainer } >
        <div className='pad-card' style={ stylePad }>
          {(region.percent !== 0) && <>
            <div className='percent' >
              <span>{region.percent}%</span>
            </div>
            <div className='amount'>
              <span>{format(region.amount)} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}</span>
            </div>
          </>}
          {(region.percent === 0) && <>
            <div className='amount0' style={{ color: titleColor }}>
              <span>{format(region.amount)} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}</span>
            </div>
          </>}
        </div>
      </div> }

      {!region.info && <div className='container-card' style={ styleContainer } >
        <span className='span-none'>{'нет данных'}</span>  
      </div> }
    </>        
  );

};

export default Card;