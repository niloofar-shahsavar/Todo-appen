import React from "react";

const DeleteButton = ({ color, text, onClick, taskId }) => {
    const handleClick = () => {
        onClick(taskId);
    };

    return (
        <button onClick={handleClick}  type='submit' className='delete-Button'>
            {text}
        </button>
    );
};

export default DeleteButton;
