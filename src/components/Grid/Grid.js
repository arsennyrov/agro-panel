import React from 'react';
import { useSelector } from 'react-redux';

import { SvgSelector } from '../../containers/SvgSelector';
import './Grid.css';

const Grid = ({ data }) => {

  const checkedUnit = useSelector(state => state.crops.selectedRadioUnit);

  const format = (num) => {
    return (
    new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 0
  }).format(num))}

  const gapGrid = (data.length <4) ? "30px" : "10px";

  return (
    <div className='grid-container'>
        <div className='grid' style={{ gridRowGap: gapGrid }}>
          <div className='head'><span className='head-span'>Культуры</span></div>
          <div className='head'></div>
          <div className='head'><span className='head-span'>Всего, {checkedUnit}</span></div>
          <div className='head'><span className='head-span'>Засеяно, {checkedUnit}</span></div>
          <div className='head'><span className='head-span'>Засеяно <br></br>не в срок, {checkedUnit}</span></div>
          <div className='head'><span className='head-span'>Засеяно <br></br>сегодня, {checkedUnit}</span></div>
          <div className='head'><span className='head-span'>Засеяно сегодня <br></br>не в срок, {checkedUnit}</span></div>
          <div className='head'><span className='head-span'>Засеяно <br></br>всего, {checkedUnit}</span></div>

          {data.map((item) => { 
            return (
              <>
                { item.info && <>
                  <div className='col1'>
                    <div className='svgselector-wropper'>
                      <SvgSelector id={item.title} fill={'#6EAF41'} />
                    </div>  
                  </div >
                  <div className='col col2'><span className='row-span'>{item.title}</span></div>
                  <div className='col col3'><span className='row-span'>{format(item.sumHa1)}</span></div>
                  <div className='col col4'><span className='row-span'>{format(item.sumHa2)}</span></div>
                  <div className='col col5'><span className='row-span'>{format(item.sumHa3)}</span></div>
                  <div className='col col6'><span className='row-span'>{format(item.sumHa4)}</span></div>
                  <div className='col col7'><span className='row-span'>{format(item.sumHa5)}</span></div>
                  <div className='col col8'><span className='row-span'>{format(item.sumHa6)}</span></div>
                </>
                }
                { !item.info && <>
                    <div className='col1 col-false'>
                      <div className='svgselector-wropper'>
                        <SvgSelector id={item.title} fill={'rgba(9, 7, 6, 0.2)'} />
                      </div>  
                    </div >
                    <div className='col col2 col-false' ><span className='row-span'>{item.title}</span></div>
                    <div className='col col3 col-false'><span className='row-span'>-</span></div>
                    <div className='col col4 col-false'><span className='row-span'>-</span></div>
                    <div className='col col5 col-false'><span className='row-span'>-</span></div>
                    <div className='col col6 col-false'><span className='row-span'>-</span></div>
                    <div className='col col7 col-false'><span className='row-span'>-</span></div>
                    <div className='col col8 col-false'><span className='row-span'>-</span></div>
                </>
                }
              </>
            )
          })}
      </div>
    </div>  
  );
};

export default Grid;