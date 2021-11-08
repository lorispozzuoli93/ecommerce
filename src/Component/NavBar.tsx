import * as React from "react";
import styled from "styled-components";
import ContainedButtons from "./Button";
import Search from "../Component/Search";

type Props = {
  toggle: string;
  setToggle: (toggle: "none" |"in" | "out") => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Grid = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NavBar: React.FC<Props> = ({
  toggle,
  setToggle,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Grid>
      <img
        style={{ display: "block" }}
        src="https://via.placeholder.com/150x80"
        alt="logo"
      />
      <ContainedButtons toggle={toggle} setToggle={setToggle} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Grid>
  );
};

export default NavBar;
