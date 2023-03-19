import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Homepage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "60vh" }}
      color="#333333"
    >
      <Typography variant="h4" sx={{ fontSize: "48px", fontWeight: "700" }}>
        Welcome to Next js app with MUI
      </Typography>

      <Grid mt={5} mb={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Grid>

      <Grid mt={2} mb={2}>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Grid>

      <Grid mt={2} mb={2}>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Grid>
    </Grid>
  );
}

export default Homepage;
