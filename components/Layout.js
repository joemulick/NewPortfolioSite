import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'

const styles = {
  root: {
    flexGrow: 1,
  },
  layoutStyle: {
    
  }
};


function Layout(props) {

  const { classes } = props;

  return (
    <div className={classes.layoutStyle}>
      <CssBaseline />
      <Navbar />
      {props.children}
    </div>
  );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
