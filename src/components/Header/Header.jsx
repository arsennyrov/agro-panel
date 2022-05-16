import React from 'react';
import { useSelector } from 'react-redux';
import RadioGroup from '../RadioGroup';
import './Header.css'

const nameLeft = 'left';
const nameRight = 'right';

const Header = () => {

    const leftRadioGroup = useSelector(state => state.crops.leftRadioGroup);  
    const rightRadioGroup = useSelector(state => state.crops.rightRadioGroup);  

    return (
        <>
            <div className='container'>
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL + '/img/logo.svg'} width={270} height={95} /> 
                </div>
                <div className='left-radiogroup'>
                    <RadioGroup 
                        name={nameLeft} 
                        title={leftRadioGroup}
                        lHeight = {'65px'}
                    />
                </div>
                <div className='right-radiogroup'>
                    <RadioGroup 
                        name={nameRight} 
                        title={rightRadioGroup}
                        lHeight = {'65px'}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;