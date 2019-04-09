import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// let lastScrollY = 0;
// let ticking = false;

const styles = theme => ({
    root: {
        flexGrow: 1,
    }, 
    mainGrid: {
        // will likely need to remove minHeight and width in future once content is built out.
        backgroundColor: '#FFF7EF',
    },
    font: {
      fontFamily: 'Comfortaa, cursive'
    },
    lastNamePadding: {
      marginLeft: '2.30%'
    }


    
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
              <div className={classes.root}>
                <Grid className={classes.mainGrid} 
                container
                direction="column"
                >

                  <Grid item>
                    <Typography variant="h1" className={classes.font}>
                    Joseph
                    <br/>
                    <span className={classes.lastNamePadding}>
                    Mulick
                    </span>
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant="subtitle1">
                    Email developer by day, react developer by night.
                    <br/>
                    <br/>
                    I'm a full stack developer who enjoys discovering the newest technologies and incorporating them into my projects. I am always driven and looking to tackle the next challenge. 
                    <br/>
                    <br/>
                    Originally from southern California, I attended UCLA extension coding bootcamp which was a tremendous experience where I learned to create and impliment full stack web applications using the most relevent web technologies. See my skill set below, or check out my github
                    </Typography> 
                  </Grid>

                </Grid>
              </div>
          </nav>
        </React.Fragment>
      );
    }
  }
  
  
  
  MainLandingSection.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainLandingSection);