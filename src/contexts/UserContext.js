import React, { Component } from 'react';

export const UserContext = React.createContext();

class UserContextProvider extends Component {
    constructor(props)
    {
        super(props);
    }
    state = { 
        user: "joebrown",
        email: "joebrown@yahoo.com",
        password: "password"
     }
    render() { 
        if(!UserContext)
        {
            throw new Error("userContext is not defined");
        }
        return ( 
            <UserContext.Provider value = {{...this.state}}>
                {this.props.children}
            </UserContext.Provider>
         );
    }
}
 
export default UserContextProvider;