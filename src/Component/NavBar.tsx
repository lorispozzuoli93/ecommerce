import * as React from "react";
import styled from "styled-components";
import ContainedButtons from "./Button";
import Search from "../Component/Search";

const Grid = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NavBar: React.FC = () => {
  return (
    <Grid>
      <img
        style={{ display: "block" }}
        src="https://via.placeholder.com/150x80"
        alt="logo"
      />
      <ContainedButtons />
      <Search />
    </Grid>
  );
};

export default NavBar;
