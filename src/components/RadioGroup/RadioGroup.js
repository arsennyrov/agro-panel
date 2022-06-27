import React from 'react';
import { useDispatch } from 'react-redux';
import './RadioGroup.css';

import { changeRadioLeft, changeRadioRight, changeRadioUnit } from '../../stores/cropSlice';

const RadioGroup = (props) => {

  const dispatch = useDispatch()
  const { 
      name, 
      title,   
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
      case 'unit': 
        dispatch(changeRadioUnit(e.target.value));
        break;
      default:
        console.log('swith-default');
    }        
  }
  
  console.log('name', name);
  let selected = (name === 'right') ? 3 : 0;
  console.log('selected', selected);


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
            <label htmlFor = {item.id}>
                {item.name}
            </label>
        </div>           
        )}
    </div> 
    </>
  );
}

export default RadioGroup;