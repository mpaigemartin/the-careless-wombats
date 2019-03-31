import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import AtlantaMap from "./Maps/AtlantaMap";
import axios from "axios";
import { get } from "http";

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
      neighborhood: event.target.value
    });
    axios
    .get(
      `api/restaurant/${event.target.value}`
      ).then(result => {
        this.setState({ businessDirectory: result.data })
        console.log(result.data)
      });
  };
   

  handleDayChange = event => {
    this.setState({ day: event.target.value });
  };

  handleTypeChange = event => {
    this.setState({ type: event.target.value });
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
            <option longitude={-84.375387} latitude={33.789295} zoom={14} value="area/Midtown">Midtown</option>
            <option longitude={-84.299458} latitude={33.774231} zoom={14} value="area/Decatur">Decatur</option>
            <option longitude={-84.40458} latitude={33.797919} zoom={14}  value="area/West Midtown">West Midtown</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="type-customized-native-simple"
            className={classes.bootstrapFormLabel}
            id="typeOption"
          >
            type
          </InputLabel>
          <NativeSelect
            value={this.state.type}
            onChange={this.handleTypeChange}
            input={
              <BootstrapInput
                name="type"
                className="option"
                id="type-customized-native-simple"
              />
            }
          >
            <option value="" label="all events" />
            <option value="karaoke">Karaoke</option>
            <option value="trivia">Trivia</option>
            <option value="happyHour">Happy Hour</option>
            <option value="liveMusic">Live Music</option>
            <option value="specialEvent">Special Event</option>
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
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            <option>choose date</option>
          </NativeSelect>
        </FormControl>
        <AtlantaMap latitude={this.state.currentLat} longitude={this.state.currentLon} zoom={this.state.currentZoom} />
      </form>
    );
  }
}

FilterButtonRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterButtonRow);
