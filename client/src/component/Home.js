import React, { Component } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import BusinessDirectory from '../component/BusinessDirectory';
import SearchBar from '../component/SearchBar';
import FilterButtonRow from '../component/FilterButtonRow';
import GoogleMap from '../component/GoogleMap';
import '../../src/App.css';
import restaurantList from '../utils/Variables';

class Home extends Component {

  state = {
    restaurantList: [], 
    keywordSearch: '',
    searchResults: [],
    single: '',
  }

  

  // createRestaurantList = () => {
  //   axios
  //     .get('api/restaurant')
  //     .then(result => {
  //       // const places = result.data; //these two lines return an array of strings=restaurant names only
  //       // this.setState({ restaurantList: places.map(({ name }) => name)})
  //       this.setState({restaurantList: result.data}) // this line returns an array of objects
  //       console.log(this.state.restaurantList
  //         );
  //     })
  // };

  searchResults = event => {
    axios
      .get(`/api/restaurant/${this.state.keywordSearch}`)
      .then(result => {
        this.setState({ searchResults: result.body });
        console.log(this.state.searchResults);
      });
  };  

  searchChangeHandler = event => {
    event.preventDefault();
    const keywordSearch = event.target.value;
    this.setState({ keywordSearch: keywordSearch });
    console.log(this.state.keywordSearch);
  }; 
  searchClickHandler = event => {
    event.preventDefault();
    this.searchResults();
  };

  componentDidMount() {
    this.setState({restaurantList: restaurantList});
  //   this.createRestaurantList();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar 
          searchChangeHandler={this.searchChangeHandler}
          searchClickHandler={this.searchClickHandler}
          />
        <FilterButtonRow />
        <GoogleMap />
        <BusinessDirectory />
      </div>
    );
  }
}

export default Home;