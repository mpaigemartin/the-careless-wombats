import React, { Component } from 'react';
import Header from './component/Header';
import BusinessDirectory from './BusinessDirectory';
import SearchBar from './component/SearchBar';
import FilterButtonRow from './component/FilterButtonRow';
import GoogleMap from './component/GoogleMap';
import '../../src/App.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar />
        <FilterButtonRow />
        <GoogleMap />
        <BusinessDirectory />
      </div>
    );
  }
}

export default Home;