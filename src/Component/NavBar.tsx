import * as React from "react";
import ContainedButtons from "./Button";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type Props = {
  toggle: any;
  setToggle: any;
  searchQuery: any;
  setSearchQuery: any;
};

const NavBar: React.FC<Props> = ({ toggle, setToggle, searchQuery,  setSearchQuery }) => {
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
        <ContainedButtons setToggle={setToggle} toggle={toggle} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          label={"Search"}
          sx={{ mt: 1, ml: 1, width: "65%" }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
        ></TextField>
        <Button
          sx={{ mt: 2.3, ml: 2 }}
          variant="contained"
          onClick={() => {
            setSearchQuery("");
          }}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavBar;
