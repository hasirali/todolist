import React from 'react';

const List = (props) => {
  return (
    <>
      <div className="cross-button" onClick={() => {
          // When the cross button is clicked, call the onSelect function with the item's index
          props.onSelect(props.id);
      }}>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default List;