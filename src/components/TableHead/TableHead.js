import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './TableHead.css';

const TableHead = (props) => {

  let checkedRadioUnit = useSelector(state => state.crops.selectedRadioUnit);  
    
  if  (checkedRadioUnit==='Количество - Га') checkedRadioUnit = 'Га';  // временно
  if  (checkedRadioUnit==='Количество - Поля') checkedRadioUnit = 'Шт'; // временно

  const { cropHead } = props;

  return (
  <>
  <table className="table-head">
    <thead>
      <tr>
        <th className='th0'>
          <span>Культуры&nbsp;&nbsp;&nbsp;</span>
        </th>
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
