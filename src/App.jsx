import React, { useState } from 'react';
import List from './List';

const App = () => {
  // State to manage the input field value and the list of items
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  // Input change handler to update inputList state
  const inputEvent = (event) => {
    setInputList(event.target.value);
  };

  // Function to delete an item by its index
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id; // Filter out the item with the specified index
      });
    });
  };

  // Function to add a new item to the list
  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]; // Add the new inputList value to the list
    });
    setInputList(""); // Clear the input field
  };

  return (
    <>
      <div className="app-container">
        <div className="card main-card">
          <h1 className="card-title">TodoList</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Enter your note"
              onChange={inputEvent}
              value={inputList}
            />
            <button className="add-button" onClick={addItems}>+</button>
          </div>
          <ul className="todo-list">
            {items.map((itemval, index) => {
              // Render each list item using the List component
              return (
                <List
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItems} // Pass the deleteItems function as a prop
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;