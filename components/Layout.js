import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar'

const styles = {
  root: {
    flexGrow: '1',
  },
  layoutStyle: {
    padding: '0'
  },
  bgColor: {
    flexGrow: '1',
    backgroundColor: '#FFF7EF',
  },
  contentWrapper: {
   
  },
};


function Layout(props) {

  const { classes } = props;

  return (
    <div className={classes.bgColor}>
        <CssBaseline />
        {/* <Grid item>
          <CssBaseline />
          <Navbar />
          {props.children}
        </Grid> */}

            <Navbar />
            
              {props.children}
           
                      
    </div>
  );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);