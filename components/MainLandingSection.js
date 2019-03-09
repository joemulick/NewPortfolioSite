import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        flexGrow: 1,
    }, 
    mainGrid: {
        minHeight: '100vmin',
        width: 'auto',
        background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1548226609/carlos-muza-84523-unsplash_kcw88s.jpg) no-repeat fixed',
        position: 'relative',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
    },
  });
  
  class MainLandingSection extends React.Component {
  
    render() {
      const { classes } = this.props;
  
      return (
        <React.Fragment>
          <Grid className={classes.mainGrid} container>

          </Grid>
        </React.Fragment>
      );
    }
  }
  
  
  
  MainLandingSection.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainLandingSection);