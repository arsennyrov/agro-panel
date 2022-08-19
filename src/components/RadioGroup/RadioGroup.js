import React from 'react';
import { useDispatch } from 'react-redux';
import './RadioGroup.css';

import { changeRadioLeft, changeRadioRight, changeRadioUnit } from '../../stores/cropSlice';

const RadioGroup = (props) => {

  const dispatch = useDispatch()
  const { 
      name, 
      title,
      y,
      fSize='1.5vw'
  } = props; 

  const handleChange = (e) => {
    switch(name) {
      case 'left': 
        dispatch(changeRadioLeft(e.target.value));
        dispatch(changeRadioUnit(e.target.value));
        break;
      case 'right': 
        dispatch(changeRadioRight(e.target.value));
        break;
      case 'redioTable': 
        dispatch(changeRadioUnit(e.target.value));
        break;
      default:
    }        
  }
  
  let selected = (name === 'right') ? 3 : 0;

  return (
    <>
    <div className='radio-group'>
      {title.map((item, index) => 
        <div className='radio-group-item' key={item.id}>
            <input
              type="radio" 
              value={item.name}
              id={item.id}
              onChange={handleChange} 
              name={name} 
              defaultChecked={(index === selected)}
            />
            <label htmlFor = {item.id} style={{lineHeight: y, fontSize: fSize}}>
                {item.name}
            </label>
        </div>           
        )}
    </div> 
    </>
  );
}

export default RadioGroup;