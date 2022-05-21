import React from 'react';
import { useSelector } from 'react-redux';

import crops from '../../containers/data';
import { format } from '../../containers/utils';
import { SvgSelector } from '../../containers/SvgSelector';
import './TableRow.css';

const TableRow = ({crop}) => {
  const checkedRadioUnit = useSelector(state => state.crops.selectedRadioUnit);
  const cropLength = crops().length;
  const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);

  const styleTableRow = { 
    height:  (cropLength < 4) ? "115px" : "65px",
    marginTop: (cropLength < 4) ? "30px" : "10px"
  }

console.log('=====checkedRadioUnit', checkedRadioUnit);

  return (
    <>
    <table className="table-row" style={styleTableRow}>
      <tbody>
        <tr className='tr-wrap'>
          <td className='td0'>
            <SvgSelector id={crop.title} fill={'#6EAF41'} />
          </td>
          <td className='td1'><span>{crop.title}</span></td>
          <td className='td2'><span>{(checkedRadioUnit===defaultLeft) ? format(crop.sumHa1) : format(crop.sumThing1)}</span></td>
          <td className='td3'><span>{(checkedRadioUnit===defaultLeft) ? format(crop.sumHa2) : format(crop.sumThing2)}</span></td>
          <td className='td4'><span>{(checkedRadioUnit===defaultLeft) ? format(crop.sumHa3) : format(crop.sumThing3)}</span></td>
          <td className='td5'><span>{(checkedRadioUnit===defaultLeft) ? format(crop.sumHa4) : format(crop.sumThing4)}</span></td>
          <td className='td6'><span>{(checkedRadioUnit===defaultLeft) ? format(crop.sumHa5) : format(crop.sumThing5)}</span></td>
          <td className='td7'><span>{(checkedRadioUnit===defaultLeft) ? format(crop.sumHa6) : format(crop.sumThing6)}{crop.sumHa6 === 0 ? "" : "%"}</span></td>
        </tr>
      </tbody>
    </table>
    </>
  );
};

export default TableRow;