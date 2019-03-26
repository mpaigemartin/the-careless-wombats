import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home';
import SearchPage from './component/SearchPage'
import './App.css';

class App extends Component {

  render() {
    return (
      // <div>
      //   <Home />
      // </div>
      <BrowserRouter>
        <Route exact path="/" render={SearchPage} />
        <Route exact path="/Home" render={Home} />
        <Route path="*" render={Home} />
      </BrowserRouter>
    )
  }
}

export default App;
