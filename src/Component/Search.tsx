import * as React from "react";
import styled from "styled-components";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Grid = styled.div`
  margin-right: 1px;
  @media (min-width: 1280px) {
    margin-right: 120px;
  }
`;

const TextField = styled.input`
  padding: 17px;
  margin-top: 8px;
  font-size: 16px;
  letter-spacing: inherit;
  border-radius: 4px;
  margin-left: 8px;
  border: 1px solid lightgrey;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    border: 1px solid #1976d2 !important;
  }
  @media (min-width: 1280px) {
    width: 380px;
  }
  @media (max-width: 540px) {
    width: 380px;
  }
  @media (max-width: 414px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 100px;
  }
`;

const ButtonReset = styled.button`
  margin-left: 10px;
  background: #1976d2;
  transition: background 0.5s;
  &:hover {
    background: #3d91d6;
    transition: background 0s;
    box-shadow: rgb(0 0 0 / 80%) 0px 3px 1px -2px;
  }
  &:active {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
    background-size: 100%;
    transition: background 0s;
  }
  color: #fff;
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
        placeholder="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      ></TextField>
      <ButtonReset
        onClick={() => {
          setSearchQuery("");
        }}
      >
        RESET
      </ButtonReset>
    </Grid>
  );
};

export default Search;
