import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

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

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: true
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>
          Click to get the full Modal experience!
        </Typography>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleModalClose}
         
        >
          <div style={getModalStyle()} className={classes.paper}  id="modal">
            <Typography variant="h4" id="modal-title">
              thinking man tavern
            </Typography>
            <Typography varian="h5" id="modal-subtitle">
              housemade and locally sourced
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              We showcase American made libations with 21 craft beer taps, well
              over 100 hand crafted spirits, and 20 west coast wines.
            </Typography>
            <Button onClick={this.handleModalClose}>Close</Button>{" "}
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const BusinessModal = withStyles(styles)(SimpleModal);

export default BusinessModal;
