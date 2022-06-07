import React from 'react';
import './Prompt.css';


const Prompt = ({color="white", text=['','','']}) => {
    return (
        <div className='prompt'>
            <div className='prompt__square' 
                style={{ backgroundColor: color}} >
            </div>
            <div className='prompt__text'>
                <span className='span123'>{ text[0] }</span>
                {text[1] && <span className='span123'>{ text[1] }</span>}
                {text[2] && <span className='span123'>{ text[2] }</span>}
            </div>
        </div>
    );
};

export default Prompt;