import React from 'react';

const List = (props) => {
    
    return (
        <>
        <div className="cross-button" onClick={()=>{
            props.onSelect(props.id);
        }}>

        <li>{props.text}</li>
        </div>
        </>

    )
};
export default List;