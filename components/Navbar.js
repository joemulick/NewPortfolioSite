import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  navbarColor: {
    backgroundColor: '#FFF7EF',
  },


};

function Navbar(props) {
  const { classes } = props;

  return (
        <AppBar className={classes.navbarColor} position="static">
            <Toolbar>
                <Grid
                justify="space-between"
                container 
                spacing={24}
                >
                  <Grid item>
                      <Button>React Developer</Button>
                  </Grid>
                  
                  <Grid item>
                      <Button>
                          About Me
                      </Button>
                      <Button>
                          Dev Blog
                      </Button>
                  </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);