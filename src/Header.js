import React, { Component } from 'react';
import { UserContext } from './contexts/UserContext';

class Header extends Component {
    constructor(props)
    {
        super(props);
        //console.log(props);
    }
    state = {  }
    render() { 
        return ( 
            <UserContext.Consumer>{ (ctx)=>
                {
                console.log(ctx);
                return( 
                <div>
                    <center>
                        <h1>Header</h1>
                        <h3>User: {ctx.user}</h3>
                        <h3>Email: {ctx.email}</h3>
                        <h3>Password: {ctx.password}</h3>
                    </center>
                </div>
                )
                }}
            </UserContext.Consumer>
           
         );
    }
}
 
export default Header;