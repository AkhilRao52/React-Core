import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    userName:'Akhil' 
  }

  changeNameHandler = ()=>{
    this.setState({
      userName: 'Aki'
    })
  }

  changeNameClickHandler = (event)=>{
    this.setState({
      userName: event.target.value
    })
  }

  render(){
    return(
      <div>
        <UserInput name={this.state.userName} click={this.changeNameHandler} change={this.changeNameClickHandler}/>
        <UserOutput name={this.state.userName}/> 
      </div>
    )
  }
}

export default App;
