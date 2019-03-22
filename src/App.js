import React, { Component } from 'react';
import NavBar from './component/NavBar'
import BusinessDirectory from './component/BusinessDirectory';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <NavBar />
       <BusinessDirectory/>

     </div>
    );
  }
}

export default App;
