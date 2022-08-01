import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { SvgSelector } from '../../containers/SvgSelector';
import './Grid.css';

const Grid = ({ data }) => {

console.log('======data', data);

  const checkedUnit = useSelector(state => state.crops.selectedRadioUnit);

  const [colorBorder, setColorBorder] = useState(false, false, false, false, false, false);
  
  const format = (num) => {
    return (
    new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 0
  }).format(num))}

  const handleClick = (index) => (event) => {
    const colorInit = [ false, false, false, false, false, false ];
    colorInit[index]=true;
    setColorBorder(colorInit);
  }
  
  return (
    <div className='grid-container'>
        <div className='grid'>
          <div className='head-wrop'>
            <div className='head'><span className='head-span'>Культуры</span></div>
            <div className='head'> 
            </div>
            { <>
                <div className='head'><span className='head-span'>Всего, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано <br></br>не в срок, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано <br></br>за сегодня, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано за сегодня<br></br>не в срок, {checkedUnit}</span></div>
                <div className='head'><span className='head-span'>Убрано <br></br>всего, {'%'}</span></div>
              </>
            }
            </div>
          {data.map((item, index) => { 
            return (
              <div className={ colorBorder[index] ? `row-wroper row-wrop${index}` : 'row-wroper row-wrop' } 
                   key={item.id}
                   onClick={handleClick(index)}
                   style={ (data.length === 2) ?  { top: '-9vh'} : { top: '-1.4vh'}  }
                   >
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
                  <div className='colh col col8'><span className='row-span'>{item.progress.toFixed(1)}</span></div>
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