import React from 'react';

const person = (props) => {
    return(
      <div>
        <div onClick={props.click}> {props.name} {props.age} </div>
        <div> {props.children} </div>
      </div>        
    )
}


export default person;