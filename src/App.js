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

  deletePersonHandler =  (personIndex) => {
    const persons = this.state.persons.slice(); // creates copy of the array
    // or const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
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
        {this.state.persons.map((person,index)=>{
          return <Person 
                  click = {() => this.deletePersonHandler(index)}
                  name = {person.name}
                  age = {person.age}/>
        })}
     </div>)
    }

    return (
      <div className="App">
       Names and Ages
       <button style = {style}> 
          Switch name 
       </button>

       <button onClick = {this.displayHandler}> Hide/Show details </button>
       {persons}
      </div>
    );
  }
}

export default App;
