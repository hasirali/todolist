import React, { useState } from 'react';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  // intiialize with an empty array as we get input it get store in the array

  const inputEvent = (event) => {
    setInputList(event.target.value);
  };

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
            <ol className="todo-list"> 
              {items.map((itemval) => {
                return <li>{itemval}</li>
              })}
            </ol>
          </div>
        </div>
    </>
  )
};
export default App;