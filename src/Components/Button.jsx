import React from "react";

const Button = ({color, text, onClick, disabled}) => {

 
    return (
    <button onClick={onClick} style={{backgroundColor: color}}  type='submit' className='My-button' disabled={disabled}>
        {text}
        </button>
    )
}

export default Button;