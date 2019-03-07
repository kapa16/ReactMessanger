import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  changeProfileLastname,
  changeProfileName,
  loadProfile
} from "../../redux/actionsCreator/profileActionsCreator";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core";
import WithData from "../hoc/WithData";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const Profile = ({ name, lastName, changeProfileLastname, changeProfileName, classes }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={(e) => changeProfileName(e.target.value)}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Lastname"
        value={lastName}
        onChange={(e) => changeProfileLastname(e.target.value)}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </form>
  )
};

Profile.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

const mapStateToProps = (state) => {
  return state.profileReducer;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeProfileLastname, changeProfileName, loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(WithData(Profile, 'loadProfile')));