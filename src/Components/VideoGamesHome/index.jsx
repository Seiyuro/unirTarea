import React from "react";
import styles from "./styles.js";
import { Typography } from "@mui/material";
import NavigationMenu from "../Common/NavigationMenu";
import Users from "../Users";

const VideoGamesHome = () => {
  const classes = styles();
  return (
    <div style={classes.main}>
      <div>
        <Typography variant={"h2"}>Welcome to Video Games Ranking</Typography>
      </div>
      <div>
        <NavigationMenu />
      </div>
      <div>
        <Typography variant={"h3"}>List of Users</Typography>
        <Users />
      </div>
    </div>
  );
};

export default VideoGamesHome;
