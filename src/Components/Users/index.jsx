import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import api from "../../Api";

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    api.getUsers().then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <Grid container spacing={4}>
      {users &&
        Object.values(users).map((user) => (
          <Grid item xs={12} key={user.name}>
            {user.name}
          </Grid>
        ))}
    </Grid>
  );
};

export default Users;
