import React from 'react';
import { useSelector } from 'react-redux';

import { format } from '../../containers/utils';
import './Card.css';

const Card = ({item, region, type}) => {
    const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name);   
    const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  

    console.log('==item', item);
    console.log('==region', region);
    console.log('==type', type);

    const width = item.width;
    const title = item.title;
    const index = item.index;

    const fieldPercent = 3.25;

    const regPercent = type === 1 ? region?.percent : 100*region?.fieldComplite/region?.fieldCount
    const regAmount = type ===1 ? region?.amount : region?.fieldCount

    const stylePercent = {
        width: `${region?.percent*width/100}vw`,
    }

    return (
        <>
            {region.info && <div className='card-title'>
                <span className='card-span-title'>{title}</span>
            </div>}
            {!region.info && <div className='card-title'>
                <span className='card-span-title-none'>{title}</span>
            </div>}

            <div className={`card-wropper card-wropper${index}`}>

                {!region.info && <span className='span-none'>{'нет данных'}
                </span>}

                {(region.percent !== 0 && region.info) && <>
                <div className={`card-percent card-percent${index}`} style={stylePercent}>
                </div>
                <div className='card-pad'>
                    <span className='card-span-percent'>
                        {regPercent.toFixed(2)}% 
                    </span>                        
                    <span className='card-span-amount'>
                        {format(regAmount.toFixed(2))} {(type === 1) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> }

                {(region.percent === 0  && region.info) && <>
                <div className='card-pad1'>
                    <span className={`card-span-amount card-span-amount${index}`}>
                        {format(region.amount.toFixed(2))} {(type === 1) ? 'Га' : 'Шт'}
                    </span>
                </div> 
                </> } 
            </div>
        </>
    );
};

export default Card;







//     return (

//         <>
//         {console.log('=====region', region)}
//             <div className='card-title'>
//                 <span className='card-span-title'>{title}</span>
//             </div>

//             <div className={`card-wropper card-wropper${index}`}>

//                 {/* {!region.info && <span className='span-none'>{'нет данных'}
//                 </span>} */}

//                 <>
//                 <div className={`card-percent card-percent${index}`} style={stylePercent}>
//                 </div>
//                 <div className='card-pad'>
//                     <span className='card-span-percent'>
//                         {regPercent.toFixed(2)}% 
//                     </span>                        
//                     <span className='card-span-amount'>
//                         {format(regAmount)} Га
//                     </span>
//                 </div> 
//                 </>

//                 {(region.percent === 0  && region.info) && <>
//                 <div className='card-pad1'>
//                     <span className={`card-span-amount card-span-amount${index}`}>
//                         {format(regAmount.toFixed(2))} {(checkedRadioLeft===defaultLeft) ? 'Га' : 'Шт'}
//                     </span>
//                 </div> 
//                 </> } 
//             </div>
//         </>
//     );
// };

// export default Card;