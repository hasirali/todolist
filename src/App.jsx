import React from 'react';

const App = () => {
  return (
    <>
      <div className="app-container">
        <div className="card main-card">
          <div className="card-header">
            <h1 className="card-title">TodoList</h1>
          </div>
          <div className="input-container">
            <input type="text" className="input-field" placeholder="Enter your note" onChange={inputEvent} value={inputList} />
            <button className="add-button" onClick={addItems} >+</button>
          </div>
        </div>
      </div>
    </>
  )
};
export default App;