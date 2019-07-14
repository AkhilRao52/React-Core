import React from 'react';

const person = (props) => {
    return(
      <div>
        <div> {props.name} {props.age} </div>
        <div> {props.children} </div>
      </div>        
    )
}


export default person;