import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Toc from "./Toc";

class App extends Component {
  state = { 
    pgTitle: "A React App With Testing",
    menu: [
      {"Home" : "/home"},
      {"Register" : "/register"},
      {"Login" : "/login"},
      {"About us" : "/about us"}
    ]
   }
  render() { 
    return ( 
      <div>
        <Header></Header>
        <p>This is App</p>
        <Toc></Toc>
      </div>
     );
  }
}
 
export default App;

