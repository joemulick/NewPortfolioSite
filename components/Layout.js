import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar'

const styles = {
  root: {
    flexGrow: 1,
  },
  layoutStyle: {
    padding: '0'
  },
  bgColor: {
    maxWidth: '1200px',
    backgroundColor: '#FFF7EF',
  }
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

        <Grid
          container 
          spacing={24}
          justify='center'
        >
          <Grid item>
            <Navbar />
            {props.children}              
          </Grid>
        </Grid>
    </div>
  );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);


              <Grid
                container 
                spacing={24}
                >
                <Grid item lg={8}>
                    
                </Grid>
              </Grid>