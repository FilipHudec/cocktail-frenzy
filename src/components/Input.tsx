import React from 'react';

import InputCss from './Input.module.css';

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input 
            className={InputCss.input}
            type="text" 
            placeholder="cocktail" 
            value={value} 
            onChange={(e) => {
                console.log("Input changed:", e.target.value);
                onChange(e);
            }} 
        />
    );
};


export default Input;
