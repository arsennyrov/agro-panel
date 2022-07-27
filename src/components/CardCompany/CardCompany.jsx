// Расставляет окна культур внутри окна компании

import React from 'react';
import PropTypes from 'prop-types';

import './CardCompany.css';
import Mosaic from '../Mosaic';

const CardCompany = ({ cropsCompany }) => {

    CardCompany.propTypes = {
        cropsCompany: PropTypes.object
    }

    let region = 0;
    let w0 = 0;
    let h0 = 0;
    switch (cropsCompany.region) {
        case 'Центр':
            region = 1;
            w0 = 31.7;
            h0 = 16.1;
            break;
        case 'Юг':
            region = 2;
            w0 = 30.15;
            h0 = 12;
            break;
        case 'Север':
            region = 3;
            w0 = 28.7;
            h0 = 23;
            break;
        default:    
            region = 0;
    }

    const name =  cropsCompany.company;
    const crops0 = cropsCompany.crops;

    const crops1 = [].concat(crops0);

    const sum1 = [];
    let flag = 0;
    let sum1All = 0;
    for(let i=0; i<crops1.length; i++) {
        sum1[i] = crops1[i].sum.reduce((a, b) => a + b, 0);
        if (sum1[i] === 1) flag = flag+1;
        sum1All = sum1All + sum1[i];
    }        

    const wcol = [];
    for(let i=0; i<crops1.length; i++) {
        wcol[i] = 1+(10*sum1[i]/sum1All).toFixed(1);
    }

    if (crops1.length === 2) {
            wcol[0] = (1+(sum1[0]/(sum1[0]+sum1[1]))).toFixed(1);
            wcol[1] = (1+(sum1[1]/(sum1[0]+sum1[1]))).toFixed(1);
    }

    let styleContainer = {}
        switch (cropsCompany.layCrops) {
        case 1:
            styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr ${wcol[2]}fr`}; 
            if (flag > 1) styleContainer = {gridTemplateColumns: `1fr 1fr 1fr`};
            break;
        case 8:
            styleContainer = {gridTemplateColumns: `1fr`};
            break;
        default:
            styleContainer = {gridTemplateColumns: `${wcol[0]}fr ${wcol[1]}fr`};
            if (flag > 1) styleContainer = {gridTemplateColumns: `1fr 1fr`}; 
        }

        const data = [
            { value: 600,
              blocks: [
                  { percent: '20%',
                    color: 'rgb(192, 192, 200)'
                  }, 
                  { percent: '30%',
                    color: 'rgb(239, 239, 239)'
                  }, 
                  { percent: '50%',
                    color: 'rgb(255, 255, 255)'
                  }
                ],
            },
            { value: 300,
              blocks: [
                  { percent: '60%',
                    color: 'rgb(170, 210, 147)'
                  }, 
                  { percent: '20%',
                    color: 'rgb(204, 239, 183)'
                  }, 
                  { percent: '20%',
                    color: 'rgb(255, 255, 255)'
                  }
                ],
            },
            { value: 200,
              blocks: [
                  { percent: '70%',
                    color: 'rgb(217, 171, 156)'
                  }, 
                  { percent: '30%',
                    color: 'rgb(255, 199, 176)'
                  }, 
                ],
            },
            { value: 100,
              blocks: [
                  { percent: '50%',
                    color: 'rgb(192, 192, 200)'
                  }, 
                  { percent: '40%',
                    color: 'rgb(239, 239, 239)'
                  }, 
                  { percent: '10%',
                    color: 'rgb(255, 255, 255)'
                  }
                ],
            },
            { value: 50,
              blocks: [
                  { percent: '100%',
                    color: 'rgb(170, 210, 147)'
                }, 
                ],
            },
            { value: 10,
              blocks: [
                  { percent: '20%',
                    color: 'rgb(217, 171, 156)'
                  }, 
                  { percent: '70%',
                    color: 'rgb(255, 199, 176)'
                  }, 
                  { percent: '10%',
                    color: 'rgb(255, 255, 255)'
                  }
                ],
            }
        ];
        

    return (
        <div className={`card-company card-company${region}`}>
            <div className={`card-company__name card-company__name${region}`}>
                <span className={(cropsCompany.layCompany < 2) ? `card-company__name-span`
                                  : `card-company__name-span1`}>
                    {name}
                </span>
            </div>

            <div className='card-company__container' style={styleContainer}>
                {/* <Puzzl w={ w0 } h={ h0} crops={crops1} /> */}
                <Mosaic w={w0} h={h0} data={data} />
            </div>     
        </div>
    );
};

export default CardCompany;