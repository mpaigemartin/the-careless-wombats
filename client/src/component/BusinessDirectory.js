import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../src/CSS/App.css";
import axios from "axios";

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
    container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});


class BusinessDirectory extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }
  state = {
    open: false
  };

  handleClick = (event) => {
    axios
    .get(`/api/restaurant/${event.target.value}`
    ).then(
      result => {
        this.props.sendData(result)
      });
    this.props.handleClick();
  };



  componentDidMount() {
    console.log(this.props.restaurantList)
    console.log('sup')
    console.log(this.props.restaurantList);
  }

  render(props) {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} id="businessList">
        <Grid>
          <Grid
            container
            spacing={16}
            alignItems="flex-start"
            direction="column"
            justify="center"
          >
            <Grid item className="businessPaper clearfix">
            {this.props.restaurantList.map(d => (
              <Paper key={d._id} className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  {d.name}
                </Typography>  
                <Typography variant="body1" component="h3">
                  {d.tagline}
                </Typography>              
                <button
                value={d.name}
                id="bizModalBtn"
                type="submit"
                onClick={this.handleClick}
                color="secondary"
                className={classes.button}
                >
                  check us out
                </button>
               
              </Paper>

            ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

BusinessDirectory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BusinessDirectory);
