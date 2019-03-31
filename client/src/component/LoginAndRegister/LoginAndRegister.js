import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Login from './Login';
import Signup from './Signup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: `${theme.spacing.unit *3}px`,
  },
	section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  }
});
class LoginAndRegister extends Component {

	render () {
		const { classes } = this.props;

		return (

      <div className={classes.root}>
      <Grid container className="Login">
        <div className={classes.section1}>
          <Typography gutterBottom variant="h5">
              Login
            </Typography>
            <Login/>
        </div>
        <div className={classes.section2}>
          <Typography gutterBottom variant="h5">
              Signup
            </Typography>
            <Signup/>
        </div>
        </Grid>
      </div>
		);
	}
}

	LoginAndRegister.propTypes = {
		classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(LoginAndRegister))