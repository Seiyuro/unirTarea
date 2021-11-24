import React, { useEffect, useState } from "react";
import api from "../../Api";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import NavigationMenu from "../Common/NavigationMenu";
import { useParams } from "react-router-dom";

const VideoGamesAdd = ({ isEdit }) => {
  let { idEdit } = useParams();

  const [data, setData] = useState({
    name: "",
    type: "",
    maker: "",
    rating: "",
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState("success");

  useEffect(() => {
    if (isEdit) {
      api.getGameById(idEdit).then((response) => {
        setData({
          name: response.data.data.name,
          type: response.data.data.type,
          maker: response.data.data.maker,
          rating: response.data.data.rating,
        });
      });
    }
  }, [isEdit]);

  const addNewGame = () => {
    api
      .insertGame(data)
      .then((response) => {
        if (response.data.success) {
          setMessage(response.data.message);
          setOpen(true);
          setData({
            name: "",
            type: "",
            maker: "",
            rating: "",
          });
        }
      })
      .catch((err) => {
        setMessage("Error: Missing Fields");
        setOpen(true);
        setTypeMessage("error");
      });
  };

  const updateGame = (game) => {
    const id = game.currentTarget.id;
    api.updateGameById(id, data).then((response) => {
      setOpen(true);
      setMessage(response.data.message);
    });
  };

  const onChangeEvent = (event) => {
    const nameField = event.currentTarget.name;
    const value = event.currentTarget.value;
    setData({ ...data, [nameField]: value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <NavigationMenu />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            color: "#282c34",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            border: "2px solid #282c34",
            padding: "1em",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5">
              {isEdit ? "UPDATE CURRENT GAME" : "ADD NEW GAME"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ color: "white" }}
              id="name"
              name="name"
              label="Game Name:"
              required
              variant="standard"
              onChange={onChangeEvent}
              value={data.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="maker"
              name="maker"
              label="Game Maker:"
              required
              variant="standard"
              onChange={onChangeEvent}
              value={data.maker}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="type"
              name="type"
              label="Game Type:"
              required
              variant="standard"
              onChange={onChangeEvent}
              value={data.type}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="rating"
              name="rating"
              label="Game Rating"
              required
              variant="standard"
              onChange={onChangeEvent}
              value={data.rating}
            />
          </Grid>
          <Grid item xs={12}>
            {isEdit ? (
              <Button variant="contained" onClick={updateGame} id={idEdit}>
                Update Game
              </Button>
            ) : (
              <Button variant="contained" onClick={addNewGame}>
                Add new Game
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={typeMessage}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default VideoGamesAdd;
