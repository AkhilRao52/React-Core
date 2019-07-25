import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {


  state = {
    persons: [
      {
        name: "Akhi",
        age: 24
      },
      {
        name: "Max",
        age: 28
      }
  ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 24
        },
        {
          name: "Max",
          age: 27
        }
    ],
    display: true
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Akhil",
          age: 24
        },
        {
          name: event.target.value,
          age: 27
        }
    ]
    })
  }

  displayHandler = () => {
    const doesShow = this.state.display;
    this.setState({display:!doesShow})    
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.display){
      persons =    
      (<div> 
        {this.state.persons.map((person)=>{
          return <Person 
                  name = {person.name}
                  age = {person.age}/>
        })}
     </div>)
    }

    return (
      <div className="App">
       Names and Ages
       <button style = {style}
               onClick = {this.switchNameHandler.bind(this,"AkhilRao")}> Switch name 
       </button>

       <button onClick = {this.displayHandler}> Hide/Show details </button>
       {persons}
      </div>
    );
  }
}

export default App;
