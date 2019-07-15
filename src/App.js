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
    ]
    })
  }



  render() {
    return (
      <div className="App">
       Names and Ages
       <button onClick = {this.switchNameHandler.bind(this,"AkhilRao")}> Switch name </button>
       <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age}/>
       <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age}
               click= {() => this.switchNameHandler("Aki")}> He is a tutor </Person>
       <Person/>
      </div>
    );
  }
}

export default App;
