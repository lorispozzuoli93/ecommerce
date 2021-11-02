import * as React from "react";
import ContainedButtons from "./Button";
import Grid from "@mui/material/Grid";
import Search from "../Component/Search";

type Props = {
  toggle: string;
  setToggle: (toggle: string) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const NavBar: React.FC<Props> = ({
  toggle,
  setToggle,
  searchQuery,
  setSearchQuery,
}) => {
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
        <ContainedButtons toggle={toggle} setToggle={setToggle} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Grid>
    </Grid>
  );
};

export default NavBar;
