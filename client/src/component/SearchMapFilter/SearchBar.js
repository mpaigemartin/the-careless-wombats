import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import "../../../src/App.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  }
});
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

let suggestions = [];

axios.get("api/restaurant").then(result => {
  //creates a list of restaurants as an array of objects [{labe: <name>}, {label: <name>} etc...]
  const places = result.data;
  suggestions = places.map(item => {
    const container = {};
    container.label = item.name;
    return container;
  });
});

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      fullWidth
      onChange={inputProps.searchChangeHandler}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

class SearchBar extends React.Component {
  state = {
    single: "",
    suggestions: [],
    place: "",
    address: "",
    tagline: "",
    url: "",
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  queryRestaurant = event => {
    axios.get(`https:///api/restaurant/${this.state.single}`).then(result => {
      this.setState({ place: result.name });
      this.setState({ address: result.address });
      this.setState({ url: result.url });
      this.setState({ tagline: result.tagline });
      console.log(
        this.state.name +
          "at" +
          this.state.address +
          "www." +
          this.state.url +
          "    " +
          this.state.tagline
      );
    });
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  handleClick = () => {
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
      console.log(
        this.state.name +
          "at" +
          this.state.address +
          "www." +
          this.state.url +
          "    " +
          this.state.tagline
      );
    });
    // this.queryRestaurant();
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <div className={classes.root} id="search">
        <Autosuggest
          style={{ display: "inline" }}
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Search a Local Resturant",
            value: this.state.single,
            onChange: this.handleChange("single")
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <Button
          type="submit"
          color="secondary"
          className={classes.button}
          onClick={this.handleClick}
          style={{ display: "inline" }}
          id="searchBtn"
        >
          view info
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper} id="modal">
            <Typography variant="h6" id="modal-title">
              {this.state.place}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {this.state.tagline}
            </Typography>
            <Button href={this.state.url} target="_blank" id="modalLink">
              check us out
            </Button>
            <Typography variant="subtitle2">
              ........events go here........
            </Typography>
            <Button variant="secondary" onClick={this.handleClose} >close</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
