import React, {Component} from 'react';
import './UserInput.css'

class UserInput extends Component {

    render(){
        return(
            <div className = "UserInput">
                <input type ="text" onChange={this.props.change} value={this.props.name}/>
                <button onClick = {this.props.click}> change-name </button>
            </div>
        )
    }
}

export default UserInput;