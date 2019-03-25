import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '20%',
  },
//   containerCal: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: "95%",
  },
});

class SpecialEventDate extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root} id="specialEventDate">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>date</Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <form noValidate>
      <TextField
        id="date"
        label="Special Event Date"
        type="date"
        defaultValue="2019-04-02"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
       
      </div>
    );
  }
}

SpecialEventDate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecialEventDate);