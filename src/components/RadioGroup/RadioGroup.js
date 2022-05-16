import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './RadioGroup.css';

import { changeRadioLeft, changeRadioRight, changeRadioUnit } from '../../stores/cropSlice';

const RadioGroup = (props) => {
  // console.log('props', props);

  const selectorState = useSelector(state => state.crops)
  // const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft)
  // const checkedRadioRight = useSelector(state => state.crops.selectedRadioRight)
  // const checkedRadioUnit = useSelector(state => state.crops.selectedRadioUnit)

  const dispatch = useDispatch()

  // console.log('selectorState', selectorState);

  const { 
      name, 
      title,   
      lHeight = "35px", 
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
   

  return (
    <>
    <div className='radio-group'>
      {title.map((item, index) => 
        <div className='radio-group-item' key={item.id}>
            <input
              type="radio" 
              value={item.name}
              id={''+item.id}
              onChange={handleChange} 
              name={name} 
              defaultChecked={(index===0)}
            />
            <label
              htmlFor = {item.id}
              style = {{ lineHeight: lHeight }}
            >{item.name}</label>
        </div>           
        )}
    </div> 
    </>
  );
}

export default RadioGroup;