import React, { useState} from 'react';
import Button from "./Button";

export const MyForm = ({ addItem }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addItem(value);
        setValue("");
    }

    return( 
    <div>
        <form className='My-form' onSubmit={handleSubmit}>
            <h1>Write your tasks here</h1> <br />
            <input type='text' className='My-input' value={value} placeholder='Write your task here...' onChange={(e) => setValue(e.target.value)}/>
       <Button text="Add" disabled={!value}/>
        </form>
    </div>
    )
}





