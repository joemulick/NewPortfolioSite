/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
import MainLandingSection from '../components/MainLandingSection';

const styles = theme => ({
  root: {
    flexGrow: 1,
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
      <div className={classes.root}>
        <MainLandingSection />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
