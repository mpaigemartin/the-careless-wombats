import React, { Component } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import BusinessDirectory from '../component/BusinessDirectory';
import SearchBar from './SearchMapFilter/SearchBar';
import FilterButtonRow from './SearchMapFilter/FilterButtonRow';
import AllAtlanta from './SearchMapFilter/Maps/AtlantaMap';
import BusinessModal from '../component/BusinessModal';
import '../../src/CSS/App.css';

class Home extends Component {
  state = {
    restaurantList: [],
    keywordSearch: '',
    searchResults: [],
    single: '',
    restaurantQuery: '',
    whichMap: <AllAtlanta />,
    place: "",
    address: "",
    tagline: "",
    url: "",
    open: false
  };

  //for BusinessModal
  handleOpen = () => {
    this.setState({ open: true });
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  handleBusinessChange = () => {
    this.setState({
      [name]: newValue
    });
  };
  handleBusinessClick = () => {
    this.setState({
      result: this.state.single
    });
    console.log(this.state.single);
    this.setState({ open: true });
    axios.get(`/api/restaurant/${this.state.single}`).then(res => {
      const result = res.data[0];
      console.log(result);
      this.setState({ place: result.name });
      this.setState({ address: result.address });
      this.setState({ url: result.url });
      this.setState({ tagline: result.tagline });
    });
  }
  

  createRestaurantList = () => {
    axios
      .get('api/restaurant')
      .then(result => {
        // const places = result.data; //these two lines return an array of strings=restaurant names only
        // this.setState({ restaurantList: places.map(({ name }) => name)})
        this.setState({restaurantList: result.data}) // this line returns an array of objects
        console.log(this.state.restaurantList
          );
      })
  };

  searchResults = () => {
    axios.get(`/api/restaurant/${this.state.keywordSearch}`).then(result => {
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

  handleMap = event => {
    event.preventDefault();
    const mapMe = `<${event.target.value} />`;
    this.setState({whichMap: mapMe});
    console.log(this.whichMap);
  }

  componentDidMount() {
    // this.searchResults();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar
          single={this.state.single}
          searchChangeHandler={this.searchChangeHandler}
          searchClickHandler={this.searchClickHandler}
          handleChange={this.handleBusinessChange}
          handleClick={this.handleBusinessClick}
          handleClose={this.handleClose}
        />
        <FilterButtonRow onClick={this.handleMap}/>
        {/* {this.state.whichMap} */}
        <BusinessDirectory />
        <BusinessModal 
        handleClose={ this.handleClose} 
        handleOpen={this.handleOpen} 
        open={this.state.open}
        place={this.state.place}
        tagline={this.state.tagline}
        url={this.state.url}
        />
      </div>
    );
  }
}

export default Home;
