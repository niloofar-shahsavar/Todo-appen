import React, { useState, useEffect } from "react";
import { MyForm } from "./MyForm.jsx";
import { v4 as uuidv4 } from "uuid";
import { Item } from "./Item.jsx";
uuidv4();

export const ParentForm = () => {
  const [items, setItems] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const addItem = (item) => {
    const newItems = [...items, { id: uuidv4(), task: item }];
    setItems(newItems);
    localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  const clearTasks = () => {
    setItems([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="parentForm">
      <MyForm addItem={addItem} />
      {items.length > 1 && (
        <button className="clear-Button" onClick={clearTasks}>Clear all tasks</button>
      )}
      {items.length > 0 ? (
        items.map((item, index) => (
          <div className="myItem" key={index}>
            <Item task={item} deleteItem={deleteItem} />
          </div>
        ))
      ) : (
        <p>Your task list is empty.</p>
      )}
    </div>
  );
};
export default ParentForm;
