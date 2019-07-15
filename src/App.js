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

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "kingakhil",
          age: 24
        },
        {
          name: "Max",
          age: 27
        }
    ]
    })
  }



  render() {
    return (
      <div className="App">
       Names and Ages
       <button onClick = {this.switchNameHandler}> Switch name </button>
       <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age}/>
       <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age}
               click= {this.switchNameHandler}> He is a tutor </Person>
       <Person/>
      </div>
    );
  }
}

export default App;
