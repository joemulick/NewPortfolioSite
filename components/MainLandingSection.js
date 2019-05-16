import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'


const styles = theme => ({
    root: {
        flexGrow: 1,
    }, 
    mainGrid: {
      minHeight: '500px',
      backgroundColor: '#FFF7EF',
    },
    font: {
      fontFamily: 'Comfortaa, cursive'
    },
    lastNamePadding: {
      marginLeft: '2.30%'
    }


    
  });

  function Thing({ vertices, color }) {
    return (
      <group ref={ref => console.log('we have access to the instance')}>
        <line>
          <geometry
            attach="geometry"
            vertices={vertices.map(v => new THREE.Vector3(...v))}
            onUpdate={self => (self.verticesNeedUpdate = true)}
          />
          <lineBasicMaterial attach="material" color="black" />
        </line>
        <mesh 
          onClick={e => console.log('click')} 
          onPointerOver={e => console.log('hover')} 
          onPointerOut={e => console.log('unhover')}>
          <octahedronGeometry attach="geometry" />
          <meshBasicMaterial attach="material" color="peachpuff" opacity={0.5} transparent />
        </mesh>
      </group>
    )
  }
  
  class MainLandingSection extends React.Component {


  
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
                    <Canvas>
                      <Thing vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]} />
                    </Canvas>
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