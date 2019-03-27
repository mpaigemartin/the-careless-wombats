import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

let suggestions = [];

axios
  .get('api/restaurant')
  .then(result => {

    const places = result.data;
    suggestions = places.map(item => {
      const container = {};  
      container.label = item.name;  
      return container;
  })
})



class SearchBar extends React.Component {
  render() {
    return(
  
      <Autocomplete
      getItemValue={(item) => item.label}
      items={[
        { label: 'apple' },
        { label: 'banana' },
        { label: 'pear' }
      ]}
      renderItem={(item, isHighlighted) =>
        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {item.label}
        </div>
      }
      value={value}
      onChange={(e) => value = e.target.value}
      onSelect={(val) => value = val}
    />
        )}
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
