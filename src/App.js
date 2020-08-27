import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Toc from "./Toc";

class App extends Component {
  state = { 
    pgTitle: "Header title",
    menu: [
      {"Home" : "/home"},
      {"Register" : "/register"},
      {"Login" : "/login"},
      {"About us" : "/about us"}
    ],
    handlers : [{
        getFullname : (evt)=>{

      }
    }],
    hasError: false 
   }
  render() { 
    let headerComponent;
    if (typeof(this.state.pgTitle) !=  typeof(""))
    {
      throw new TypeError("Invalid state object");
    }
    headerComponent = <Header></Header>;
    return ( 
      <div>
          {headerComponent}
          <p>This is App</p>
          <Toc></Toc>
       </div>
     );
  }
}
 
export default App;

