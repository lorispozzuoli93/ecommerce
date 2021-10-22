import * as React from "react";
import { useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import InputBase from "@mui/material/InputBase";
import ContainedButtons from "./Button";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

// const Search = styled("div")(({ theme }) => ({
//   // position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: "white",
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   // width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     // // vertical padding + font size from searchIcon
//     // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "40ch",
//     },
//   },
//   padding: 10,
//   marginLeft: 10,
// }));

export default function NavBar(props) {
  const commonStyles = {
    bgcolor: "white",
    borderColor: "text.primary",
  };

  const [text, setText] = useState("");

  return (
    <Box sx={{ flexGrow: 1, ...commonStyles, borderBottom: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={8} lg={4}>
          <img
            className="block"
            src="https://via.placeholder.com/150x80"
            alt="logo"
          />
        </Grid>
        <Grid item xs={6} md={8} lg={4}>
          <ContainedButtons
            toggle={(value) => {
              props.toggle(value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <TextField
            label={"Search"}
            sx={{ mt: 1, ml: 1, width: "60%" }}
            // prendo cerca e toggle che ho impostato nella home passando i props e prendendo il valore che ho quando digito idem per set text che ho impostato vuoto
            onChange={(e) => {
              props.cerca(e.target.value);
              setText(e.target.value);
            }}
            value={text}
          ></TextField>
          <Button
            sx={{ mt: 2, ml: 2 }}
            variant="contained"
            onClick={() => {
              props.cerca("");
              setText("");
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
