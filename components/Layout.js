import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'

const styles = {
  root: {
    flexGrow: 1,
  },
  layoutStyle: {
    margin: '200px',
    padding: '200px',
  }
};


function Layout(props) {

  const { classes } = props;

  return (
    <div className={classes.layoutStyle}>
      <Navbar />
      {props.children}
    </div>
    
  );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
