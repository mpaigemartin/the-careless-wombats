import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    maxHeight: '80vh',
    overflow: `auto`,
    borderRadius: "5px"
  };
}


class BusinessModal extends React.Component {

    
  handleOpen = () => {
    this.props.handleOpen();
  };

  handleClose = () => {
    this.props.handleClose()
  };



    render () {
        const { classes } = this.props;

        return (
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.open}
            onClose={this.handleClose}
            >
            <div style={getModalStyle()} className={classes.paper} id="modal">
                <Typography variant="h5" id="modal-title">
                {this.props.name}
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                {this.props.tagline}
                </Typography>
                <Typography variant="body2">{this.props.events.map(event => (
                  <div className="eventsDiv" key={event.publishedAt}>
                    <p>{event.name}  |  {event.day.map(day => (
                      <span>{day}s </span>))}
                    </p>
                    <p>{event.describes}</p>
                    <p>{event.tagline}</p>
                  </div>
                  
                )
                )}
                </Typography>
                <Button href={this.props.url} variant="extendedFab" target="_blank" id="modalLink">
                our site
                </Button>
                <Button variant="secondary" onClick={this.handleClose}>
                close
                </Button>
            </div>
            </Modal>
        );
    }
}

BusinessModal.propTypes = {
    classes: PropTypes.object.isRequired
  };  
  export default withStyles(styles)(BusinessModal);