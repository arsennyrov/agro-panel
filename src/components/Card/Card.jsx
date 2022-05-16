import React from 'react';
import { useSelector } from 'react-redux';
import { format } from '../../containers/utils';
import './Card.css';

const Card = ({ color, titleColor, width, region} ) => {
console.log('region.area', region.info);
  const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
  const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  

  const containerTitle = { 
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "62px",
    // backgroundColor: "#eee"
  }

  const styleTitle = { 
    fontSize: "30px",
    color: titleColor,
  }

  const styleContainer = { 
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",

    width: width,
    height: "81px",
    borderRadius: "8px",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: color
  }

  const stylePercent = { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 14*region.percent,  
    height: "100%",
    fontStyle: "normal",
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "42px",
    color: "#000000",
    backgroundColor: color,
    borderRadius: "8px",
    // fontFamily: 'TT Norms';
  }

  const styleAmount = { 
    // width: 2.5*region.amount/1000, 
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingRight: "10px",
    backgroundColor: "white",
    borderRadius: "8px",
    // font-family: 'TT Norms';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "36px",
    lineHeight: "42px",
    color: "#090706"
  }

  return (
    <>
      <div className='container-title' style={containerTitle}>
        <span className='title' style={ styleTitle }>
          {region.area}
        </span>
      </div>
      {region.info && <div className='container' style={ styleContainer } >
        <div className='percent' style={ stylePercent } >
          <span>{region.percent}%</span>
        </div>
        <div className='amount' style={ styleAmount } >
          <span>{format(region.amount)} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}</span>
        </div>
      </div> }

      {!region.info && <div className='container' style={ styleContainer } >
        <div className='percent'>
        <span className='span-none'>{'нет данных'}</span>  
        </div>
      </div> }
    </>        
  );

};

export default Card;