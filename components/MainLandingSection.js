import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// let lastScrollY = 0;
// let ticking = false;

const styles = theme => ({
    root: {
        flexGrow: 1,
    }, 
    mainGrid: {
        // will likely need to remove minHeight and width in future once content is built out.
        minHeight: '100vmin',
        width: 'auto',
        backgroundColor: '#FFF7EF',
    },
  });
  
  class MainLandingSection extends React.Component {

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // nav = React.createRef();
  
    // handleScroll = () => {
    //     lastScrollY = window.scrollY;

    //     if (!ticking) {
    //     window.requestAnimationFrame(() => {
    //         this.nav.current.style.top = `${lastScrollY}px`;
    //         ticking = false;
    //     });
    
    //     ticking = true;
    //     }
    // };
  
    render() {
      const { classes } = this.props;
  
      return (
        <React.Fragment>
            <nav ref={this.nav}>
                <Grid className={classes.mainGrid} container>

                </Grid>
            </nav>
        </React.Fragment>
      );
    }
  }
  
  
  
  MainLandingSection.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainLandingSection);