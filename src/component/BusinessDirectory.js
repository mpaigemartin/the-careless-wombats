import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class BusinessDirectory extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <Grid
            container
            spacing={16}
            alignItems="flex-start"
            direction="column"
            justify="center"
          >
            <Grid item>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ paddingTop: 2, paddingBottom: 2 }}
              >
              <Typography variant="h5" component="h3">
                The Fuzzy Mule
              </Typography>
              <Typography variant="h6" component="h3">
                  Tuesday NasCar Trivia Night
                </Typography>
               <Typography component="p">
                  Try our Possum Burger with a flight of moonshine
                </Typography>
              </Paper>
              </Grid>
            <Grid item>
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  Mabel's Bar & Chainsaw Repair
                </Typography>
                <Typography component="p">
                  Whatever you do... tear it up
                </Typography>
              </Paper>{" "}
            </Grid>
          
            <Grid item>
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  The Duke and Duck
                </Typography>
                <Typography variant="h6" component="h3">
                  Get pissed the English way
                </Typography>
                <Typography component="p">
                  Bip Bip Cheerio
                </Typography>
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
