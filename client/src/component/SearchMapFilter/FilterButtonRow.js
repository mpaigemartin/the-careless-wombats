import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import AtlantaMap from "./Maps/AtlantaMap";
import axios from "axios";
import Button from '@material-ui/core/Button';

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  bootstrapFormLabel: {
    fontSize: 18
  },
  containerCal: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class FilterButtonRow extends React.Component {
  state = {
    day: "",
    type: "",
    neighborhood: "",
    neighborhoodName: "",
    businessDirectory: [],
    decaturMap: false,
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 12,
    //////////////lat-------lng------zoom
    allAtlanta: [33.77463, -84.36098, 12],
    midtown: [33.789295, -84.375387, 13],
    decatur: [33.774231, -84.299458, 13],
    westMidtown: [33.797919, -84.40458, 13],
    currentLat:33.77463,
    currentLon:-84.36098,
    currentZoom: 11,
  };

  handleLocationChange = event => {
    const { selectedIndex } = event.target;
    const selectedOption = event.target[selectedIndex];
    const cLat = selectedOption.getAttribute("latitude");
    const clng = selectedOption.getAttribute("longitude");
    const czoom = parseInt(selectedOption.getAttribute("zoom"));
    

    this.setState({       
      currentLat: cLat,
      currentLon: clng,
      currentZoom: czoom,
      neighborhood: event.target.value,
    });
    axios
    .get(
      `api/restaurant/${event.target.value}`
      ).then(result => {
        this.setState({ businessDirectory: result.data })
        console.log(result.data)
      });
  };
   
  handleClick = () => {
    let filter=  {
      day: this.state.day,
      neighborhood: this.state.neighborhood,
      category: this.state.category
    }
    Object.keys(filter).forEach((key) => (filter[key] == null || filter[key] == "") && delete filter[key]);
    console.log(filter)
    this.props.sendFilter(filter);
  }

  handleDayChange = event => {
    this.setState({ day: event.target.value });
    console.log(event.target.value);
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} id="filter" autoComplete="off">
        <FormControl className={classes.margin} id="locationOption">
          <InputLabel
            htmlFor="location-customized-select"
            className={classes.bootstrapFormLabel}
          />
          <NativeSelect
            value={this.state.location}
            onChange={this.handleLocationChange}
            input={
              <BootstrapInput
                name="location"
                className="option"
                id="location-customized-native-simple"
              />
            }
          >
            <option longitude={-84.36098} latitude={33.77463} zoom={11} value="">Atlanta</option>
            <option longitude={-84.375387} latitude={33.789295} zoom={14} value="Midtown">Midtown</option>
            <option longitude={-84.299458} latitude={33.774231} zoom={14} value="Decatur">Decatur</option>
            <option longitude={-84.40458} latitude={33.797919} zoom={14}  value="West Midtown">West Midtown</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="type-customized-native-simple"
            className={classes.bootstrapFormLabel}
            id="typeOption"
          >
            
          </InputLabel>
          <NativeSelect
            value={this.state.category}
            onChange={this.handleCategoryChange}
            input={
              <BootstrapInput
                name="category"
                className="option"
                id="type-customized-native-simple"
              />
            }
          >
            <option value="" label="all events" />
            <option value="Karaoke">Karaoke</option>
            <option value="Trivia">Trivia</option>
            <option value="Happy Hour">Happy Hour</option>
            <option value="Live Music">Live Music</option>
            <option value="Bingo">Bingo</option>
            <option value="Food Specials">Food Specials</option>
            <option value="Drink Specials">Drink Specials</option>
            <option value="Brunch">Brunch</option>
            <option value="Unique">Unique</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="day-customized-native-simple"
            className={classes.bootstrapFormLabel}
            id="dayOption"
          />
          <NativeSelect
            value={this.state.day}
            onChange={this.handleDayChange}
            input={
              <BootstrapInput
                name="day"
                className="option"
                id="day-customized-native-simple"
              />
            }
          >
            <option className="option" defaultValue="" label="all days" />
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </NativeSelect>
        </FormControl>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={this.handleClick}
          >
          Search
          </Button>
        <AtlantaMap 
        latitude={this.state.currentLat} 
        longitude={this.state.currentLon} 
        zoom={this.state.currentZoom} 
        restaurantList={this.props.restaurantList}/>
      </form>
    );
  }
}

FilterButtonRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterButtonRow);
