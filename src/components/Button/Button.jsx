import React from 'react';
import './Button.css';

const Button = ({ name, onClick, bgcolor }) => {
    return (
        <div> 
            <button className='btn-pag' 
                    onClick={onClick}
                    style={{ backgroundColor: bgcolor }}
                    >{name}</button>
        </div>
    );
};

export default Button;