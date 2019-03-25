import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../component/Styles.css';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class BusinessDirectory extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  {/* <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    style={{ position: "relative", float: "right", }}
                  >
                    check us out!
                  </Button>{" "} */}
                  <Typography gutterBottom>
                    Click to get the full Modal experience!
                  </Typography>
                  <Button onClick={this.handleOpen}>Open Modal</Button>
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                    <div style={getModalStyle()} className={classes.paper}>
                      <Typography variant="h6" id="modal-title">
                        Text in a modal
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        id="simple-modal-description"
                      >
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </div>
                  </Modal>
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
              </Paper>{' '}
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
              </Paper>{' '}
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
