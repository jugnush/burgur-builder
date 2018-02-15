import React from 'react';
const Buildcontrol =(props)=>{
    return (
        <div>
           <div>{props.label}</div>
           <button onClick={props.removtt}>Less</button>
           <button onClick={props.addt}>Add</button>
        </div>
    );
}

export default Buildcontrol;