import React, { useState } from 'react';
import List from './List';
const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  // intiialize with an empty array as we get input it get store in the array

  const inputEvent = (event) => {
    setInputList(event.target.value);
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
  }

  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");
  }
  return (
    <>
      <div className="app-container">
        <div className="card main-card">
          {/* <div> */}
          <h1 className="card-title">TodoList</h1>
          {/* </div> */}
          <div className="input-container">
            <input type="text"
              className="input-field"
              placeholder="Enter your note"
              onChange={inputEvent}
              value={inputList}
            />
            <button className="add-button" onClick={addItems} > + </button>
          </div>
          <ul className="todo-list">
            {items.map((itemval, index) => {
              return <List text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            })}
          </ul>
        </div>
      </div>
    </>
  )
};
export default App;