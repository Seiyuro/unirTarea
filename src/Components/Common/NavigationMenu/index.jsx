import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./styles.js";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const NavigationMenu = () => {
  const classes = styles();
  return (
    <Grid container spacing={4} style={classes.container}>
      <Grid item xs={4}>
        <Link style={classes.link} to="/content">
          <Button variant="contained">Check List</Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link style={classes.link} to="/">
          <Button variant="contained">Home</Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link style={classes.link} to="/addGame">
          <Button variant="contained">Add New Game</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default NavigationMenu;
