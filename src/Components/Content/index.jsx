import React from "react";
import styles from "./styles.js";
import Grid from "@mui/material/Grid";
import VideoGamesList from "../VideoGamesList";
import Users from "../Users";

const Content = () => {
  const classes = styles();

  return (
    <div style={classes.font}>
      <div style={classes.bodyContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <VideoGamesList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Content;
