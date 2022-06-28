import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { SvgSelector } from '../../containers/SvgSelector';
import './Grid.css';
import Button from '../Button/Button';

const Grid = ({ data, page2Click }) => {

  const checkedUnit = useSelector(state => state.crops.selectedRadioUnit);

  const [data0, setData0] = useState(data);  
  const data3 = data;
  const [colorBorder, setColorBorder] = useState(false, false, false, false, false, false);
  
  const format = (num) => {
    return (
    new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 0
  }).format(num))}

  const onClick1 = () => {
    setData0(data);
  }

  const onClick2 = () => {
    const data4 = data3.slice(0,data0.length-1);
    setData0(data4);
  }

  const handleClick = (index) => (event) => {
    const colorInit = [ false, false, false, false, false, false ];
    colorInit[index]=true;
    setColorBorder(colorInit);
  }

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();

  console.log('data', day, month);

  return (
    <div className='grid-container'>
        <div className='grid'>
          <div className='head-wrop'>
            <div className='head'><span className='head-span'>Культуры</span></div>
            <div className='head'> 
              {/* <Button name={'6'} onClick={onClick1} />
              <Button name={'-'} onClick={onClick2} /> */}
            </div>
            {(page2Click === 0) && <>
                <div className='head'><span className='head-span'>Всего, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Засеяно, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Засеяно <br></br>не в срок, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Засеяно <br></br>сегодня, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Засеяно сегодня <br></br>не в срок, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Засеяно <br></br>всего, {'%'}</span></div>
              </>
            }
            {(page2Click > 0) && <>
                <div className='head'><span className='head-span'>Всего, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано <br></br>не в срок, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано <br></br>{day-2}.{month+1}, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано {day-2}.{month+1}<br></br>не в срок, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано <br></br>всего, {'%'}</span></div>
              </>
            }
            </div>
          {data0.map((item, index) => { 
            return (
              <div className={ colorBorder[index] ? `row-wroper row-wrop${index}` : 'row-wroper row-wrop' } 
                   key={item.id}
                   onClick={handleClick(index)}>
                { item.info && <>
                  <div className='colh col col1'>
                    <div className='svgselector-wropper'>
                      <SvgSelector id={item.name} fill={'#6EAF41'} />
                    </div>  
                  </div >

                  <div className='colh col col2'>
                      <span className='row-span'>{item.name}</span></div>
                  <div className='colh col col3'><span className='row-span'>{format(item.plan)}</span></div>
                  <div className='colh col col4'><span className='row-span'>{format(item.fact)}</span></div>
                  <div className='colh col col5'><span className='row-span'>{format(item.factOverTime)}</span></div>
                  <div className='colh col col6'><span className='row-span'>{format(item.factToday)}</span></div>
                  <div className='colh col col7'><span className='row-span'>{format(item.factTodayOver)}</span></div>
                  <div className='colh col col8'><span className='row-span'>{format(item.progress)}</span></div>
                </>
                }
                { !item.info && <>
                    <div className='col1 col-false'>
                      <div className='svgselector-wropper'>
                        <SvgSelector id={item.name} fill={'rgba(9, 7, 6, 0.2)'} />
                      </div>  
                    </div >
                    <div className='col col2 col-false'><span className='row-span'>{item.name}</span></div>
                    <div className='col col3 col-false'><span className='row-span'>-</span></div>
                    <div className='col col4 col-false'><span className='row-span'>-</span></div>
                    <div className='col col5 col-false'><span className='row-span'>-</span></div>
                    <div className='col col6 col-false'><span className='row-span'>-</span></div>
                    <div className='col col7 col-false'><span className='row-span'>-</span></div>
                    <div className='col col8 col-false'><span className='row-span'>-</span></div>
                </>
                }
              </div>
            )
          })}
      </div>
    </div>  
  );
};

export default Grid;