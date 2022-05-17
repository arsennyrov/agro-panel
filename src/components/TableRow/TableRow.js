
import React from 'react';
import { useSelector } from 'react-redux';
import { format } from '../../containers/utils';
import './TableRow.css';
import { SvgSelector } from '../Svg/SvgSelector';

const TableRow = ({crop}) => {
  const defaultUnit = useSelector(state => state.crops.unitRadioGroup[0].name);
  const checkedRadioUnit = useSelector(state => state.crops.selectedRadioUnit);

  return (
    <>
    <table className="table-row">
      <tbody>
        <tr>
          <td className='td0'>
            <SvgSelector id={crop.title} fill={'#6EAF41'} />
          </td>
          <td className='td1'><span>{crop.title}</span></td>
          <td className='td2'><span>{(checkedRadioUnit===defaultUnit) ? format(crop.sumHa1) : format(crop.sumThing1)}</span></td>
          <td className='td3'><span>{(checkedRadioUnit===defaultUnit) ? format(crop.sumHa2) : format(crop.sumThing2)}</span></td>
          <td className='td4'><span>{(checkedRadioUnit===defaultUnit) ? format(crop.sumHa3) : format(crop.sumThing3)}</span></td>
          <td className='td5'><span>{(checkedRadioUnit===defaultUnit) ? format(crop.sumHa4) : format(crop.sumThing4)}</span></td>
          <td className='td6'><span>{(checkedRadioUnit===defaultUnit) ? format(crop.sumHa5) : format(crop.sumThing5)}</span></td>
          <td className='td7'><span>{(checkedRadioUnit===defaultUnit) ? format(crop.sumHa6) : format(crop.sumThing6)}%</span></td>
        </tr>
      </tbody>
    </table>
    </>
  );
};

export default TableRow;