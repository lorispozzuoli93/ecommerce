import * as React from "react";
import { useState } from "react";
import ContainedButtons from "./Button";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function NavBar(props) {
  return (
    <Grid container borderBottom="solid 1px">
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <img
          style={{ display: "block" }}
          src="https://via.placeholder.com/150x80"
          alt="logo"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <ContainedButtons
          setToggle={props.setToggle}
          toggle={props.toggle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          label={"Search"}
          sx={{ mt: 1, ml: 1, width: "65%" }}
          onChange={(e) => {
            props.setSearchQuery(e.target.value);
          }}
          value={props.searchQuery}
        ></TextField>
        <Button
          sx={{ mt: 2.3, ml: 2 }}
          variant="contained"
          onClick={() => {
            props.setSearchQuery("");
          }}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}
