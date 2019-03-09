/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
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

class Index extends React.Component {
  // state = {
    
  // };

  // handleClose = () => {
  //   // this.setState({
      
  //   // });
  // };

  // handleClick = () => {
  //   // this.setState({
      
  //   // });
  // };

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

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
