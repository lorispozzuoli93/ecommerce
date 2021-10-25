import * as React from "react";
import { useState } from "react";
import ContainedButtons from "./Button";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function NavBar(props) {
  const [text, setText] = useState("");

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
          toggle={(value) => {
            props.toggle(value);
          }}
          selected={props.selected}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          label={"Search"}
          sx={{ mt: 1, ml: 1, width: "65%" }}
          onChange={(e) => {
            props.search(e.target.value);
            setText(e.target.value);
          }}
          value={text}
        ></TextField>
        <Button
          sx={{ mt: 2.3, ml: 2 }}
          variant="contained"
          onClick={() => {
            props.search("");
            setText("");
          }}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}
