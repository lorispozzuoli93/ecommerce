import * as React from "react";
import styled from "styled-components";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Grid = styled.div`
  margin-right: 7%
`;

const TextField = styled.input`
  padding: 17px;
  margin-top: 8px;
  font-size: 16px;
  letter-spacing: inherit;
  color: currentColor;
  margin-left: 8px;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: rgb(25, 118, 210);
  color: rgb(255, 255, 255);
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  border: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

const Search: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Grid>
      <TextField
        placeholder="Search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      ></TextField>
      <Button
        onClick={() => {
          setSearchQuery("");
        }}
      >
        RESET
      </Button>
    </Grid>
  );
};

export default Search;
