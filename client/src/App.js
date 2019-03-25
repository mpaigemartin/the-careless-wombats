import React, { Component } from 'react';
import Header from './component/Header'
import BusinessDirectory from './component/BusinessDirectory';
import SearchBar from './component/SearchBar';
import FilterButtonRow from './component/FilterButtonRow';
import GoogleMap from './component/GoogleMap';
// import BusinessModal from './component/BusinessModal';
import './App.css';



class App extends Component {

  state = {
    open: false,
  };

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false})
  };

  render() {
    return (
     <div className="container">
        <Header/>
        <SearchBar/>
        <FilterButtonRow/>
        <GoogleMap/>
        <BusinessDirectory/>
     </div>
    );
  }
}

export default App;
