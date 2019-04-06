/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import MainLandingSection from '../components/MainLandingSection';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },

});

class Index extends React.Component {

    constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll(event) {
      console.log('the scroll things', event)
    };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navbar />
        <MainLandingSection />

      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
