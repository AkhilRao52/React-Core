import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const app = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: "Akhi",age: 24},
      {name: "Max",age: 28}
    ],
  });

  const [otherState,setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {   
    /* This doesn't get the other state property.
    So we need to manually set it like mentioned above (state slices)*/ 
    setPersonState({
      persons: [
        {name: "kingakhil",age: 24},
        {name: "Max",age: 27}
      ],
    })
  }

    return (
      <div className="App">
       Names and Ages
       <button onClick = {switchNameHandler}> Switch name </button>
       <Person name= {personState.persons[0].name} age= {personState.persons[0].age}/>
       <Person name= {personState.persons[1].name} age= {personState.persons[1].age}> He is a tutor </Person>
       <Person/>
      </div>
    );
}

export default app;
