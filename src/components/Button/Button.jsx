import React from 'react';
import './Button.css';

const Button = ({name, onClick}) => {
    return (
        <div> 
            <button className='btn' onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;