import axios from 'axios';

let restaurantList = [];

axios
    .get('api/restaurant')
    .then(result => {
    // const places = result.data; //these two lines return an array of strings=restaurant names only
    // this.setState({ restaurantList: places.map(({ name }) => name)})
    restaurantList = result.data // this line returns an array of objects
    })
    
export default restaurantList;

