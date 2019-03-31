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
  getData = (val) =>{
    const results = val.data[0];
    this.setState({
      single: val.data[0],
      place: results.name,
      neighborhood: results.neighborhood,
      tagline: results.tagline,
      address: results.address,
      url: results.url
    })
    console.log(val.data[0])
    console.log(this.state.single);
  }
  handleOpen = () => {
    this.setState({ open: true });
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  handleBusinessChange = (newValue) => {
    this.setState({ single: newValue })
  }
  handleBusinessClick = () => {
    console.log(this.state.single);
    this.setState({ open: true });
    axios.get(`/api/restaurant/${this.state.single}`).then(res => {
      const result = res.data[0];
      console.log(result);
 
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

  searchClickHandler = event => {
    event.preventDefault();
    this.searchResults();
  }

  handleMap = event => {
    event.preventDefault();
    const mapMe = `<${event.target.value} />`;
    this.setState({whichMap: mapMe});
    console.log(this.whichMap);
  }

  componentDidMount() {
    this.searchResults();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar
          sendData={this.getData}
          single={this.state.single}
          searchChangeHandler={this.searchChangeHandler}
          handleChange={this.handleBusinessChange}
          handleClick={this.handleBusinessClick}
          handleClose={this.handleClose}
        />
        <FilterButtonRow onClick={this.handleMap}/>
        <BusinessDirectory />
        <BusinessModal 
          name={this.state.place}
          address={this.state.address}
          url={this.state.url}
          tagline={this.state.tagline}
          handleClose={ this.handleClose} 
          handleOpen={this.handleOpen} 
          open={this.state.open}
        
       
        />
      </div>
    );
  }
}

export default Home;
