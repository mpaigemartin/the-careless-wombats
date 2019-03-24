import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import "../component/Styles.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    width: "100%",
    height: "100%",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class BusinessDirectory extends React.Component {
  render() {
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
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  The Fuzzy Mule
                </Typography>
                <Typography variant="h6" component="h3">
                  Tuesday NasCar Trivia Night
                </Typography>
                <Typography component="p">
                  Try our Possum Burger with a flight of moonshine. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum<Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  style={{position: "relative", float: "right"}}
                >
                  check us out!
                </Button>{" "}
                </Typography>
                
              </Paper>
            </Grid>
            <Grid item className="businessPaper">
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  Mabel's Bar & Chainsaw Repair
                </Typography>
                <Typography component="p">
                  Whatever you do... tear it up
                </Typography>
              </Paper>{" "}
            </Grid>

            <Grid item className="businessPaper">
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  The Duke and Duck
                </Typography>
                <Typography variant="h6" component="h3">
                  Get pissed the English way
                </Typography>
                <Typography component="p">Bip Bip Cheerio</Typography>
              </Paper>{" "}
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
