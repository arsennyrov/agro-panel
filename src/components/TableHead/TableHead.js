import React from 'react';
import { useSelector } from 'react-redux';
import RadioGroup from '../RadioGroup';

import './TableHead.css';

const nameUnit = 'unit';
const lHeight = "20px"

const TableHead = (props) => {

  const unitRadioGroup = useSelector(state => state.crops.unitRadioGroup);  
  const checkedRadioUnit = useSelector(state => state.crops.selectedRadioUnit);  

  const { cropHead } = props;

  return (
  <>
  <table className="table-head">
    <thead>
      <tr>
        <th className='th0'>
          <span>Культуры&nbsp;&nbsp;&nbsp;</span>
          <div>
            <RadioGroup name={nameUnit}
              title={unitRadioGroup} 
              lHeight = {lHeight}
            /> 
          </div>            
        </th>
        {/* <th className='th1'></th> */}
        <th className='th1'><span>{cropHead.sum1}, {checkedRadioUnit}</span></th>
        <th className='th2'><span>{cropHead.sum2}, {checkedRadioUnit}</span></th>
        <th className='th3'><span>{cropHead.sum3}, {checkedRadioUnit}</span></th>
        <th className='th4'><span>{cropHead.sum4}, {checkedRadioUnit}</span></th>
        <th className='th5'><span>{cropHead.sum5}, {checkedRadioUnit}</span></th>
        <th className='th6'><span>{cropHead.percent}, {checkedRadioUnit}</span></th>
      </tr>
    </thead>
  </table>
  </>
);
};

export default TableHead;
