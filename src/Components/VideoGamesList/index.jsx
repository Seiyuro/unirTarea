import React, { useEffect, useState } from "react";
import api from "../../Api";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NavigationMenu from "../Common/NavigationMenu";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const VideoGamesList = () => {
  const [state, setState] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getGamesList();
  }, []);

  const getGamesList = () => {
    api.getAllGames().then((response) => {
      setState(response.data);
    });
  };

  const deleteGame = (game) => {
    api.deleteGAmeById(game.currentTarget.id).then(() => {
      getGamesList();
      setOpen(true);
    });
  };

  const editGame = (game) => {
    setRedirect(game.currentTarget.id);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return React.useMemo(() => {
    return redirect ? (
      <Navigate to={"/edit/" + redirect} />
    ) : (
      <>
        <Grid item xs={12}>
          <NavigationMenu />
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={"h3"}>Games List</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"h5"}>Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"h5"}>Action</Typography>
          </Grid>

          {state &&
            state.data.map((game) => {
              return (
                <Grid key={game._id} item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Grid container style={{ border: "2px solid white" }}>
                        <Grid item xs={12}>
                          <Typography variant={"h6"}>
                            Name:{game.name}{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant={"h6"}>
                            Type:{game.type}{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant={"h6"}>
                            Maker:{game.maker}{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant={"h6"}>
                            Rating: {game.rating}{" "}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ border: "2px solid white" }}>
                      <Button>
                        <DeleteIcon
                          onClick={deleteGame}
                          id={game._id}
                          fontSize={"large"}
                        />
                      </Button>
                      <Button id={game._id} onClick={editGame}>
                        <EditIcon fontSize={"large"} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {"Removed Game"}
          </Alert>
        </Snackbar>
      </>
    );
  }, [state, redirect, editGame]);
};

export default VideoGamesList;
