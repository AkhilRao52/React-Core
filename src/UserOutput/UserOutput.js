import React from 'react';

const UserOutput = (props) => {

   const h1Style = {
          color: 'red',
          textAlign: 'center'
    }

    return(
        <div>
            <h1 style={h1Style}>{props.name}</h1>
            <p>  </p>
            <p>  </p>
        </div>    
    )
}

export default UserOutput;