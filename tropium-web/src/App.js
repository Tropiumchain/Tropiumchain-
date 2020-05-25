import React from 'react';

import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Appbar } from './components/Appbar';
import { Homepage } from './components/Homepage';

import './App.css';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(27deg, rgba(74,90,98,1) 0%, rgba(55,71,79,1) 34%, rgba(69,82,89,1) 100%)'
  },
  helloThereStyles: {
    fontStyle: 'oblique'
  }

})



function App() {

  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12}>
        <Appbar />
      </Grid>
      <Grid item xs={12}>
        <Homepage />
      </Grid>
    </Grid>
  );
}

export default App;
