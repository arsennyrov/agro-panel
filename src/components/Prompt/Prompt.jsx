import React from 'react';
import './Prompt.css';


const Prompt = ({color="white", text}) => {
    return (
        <div className='prompt'>
            <div className='prompt__square' 
                style={{ backgroundColor: color}} >
            </div>
            <div className='prompt__text'>
                <span className='prompt-span'>{ text }</span>
            </div>
        </div>
    );
};

export default Prompt;