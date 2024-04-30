import React from "react";
import DeleteButton from "./DeleteButton";


export const Item = ({task, deleteItem}) => {
    console.log(task)
    return (
       <div className="item">
       <p>{task.task}</p> 
         <DeleteButton text='Delete' onClick={deleteItem} taskId={task.id}/>
        </div>
    );
}
