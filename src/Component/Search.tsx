import * as React from "react";
import styled from "styled-components";
import Ripple from "./Ripple";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

type AnimationButton = {
  colorBg: boolean;
};

const Grid = styled.div`
  margin-right: 1px;
  @media (min-width: 1280px) {
    margin-right: 115px;
  }
`;

const TextField = styled.input`
  font-size: 17px;
  padding: 10px;
  padding-left: 20px;
  height: 34px;
  margin-right: 16px;
  border: 1px solid rgb(100, 100, 100, 0.5);
  border-radius: 3px;
  &:focus {
    outline: none;
    border: 2px solid #1976d2;
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

const Label = styled.label`
  color: gray;
  font-size: 17px;
  letter-spacing: inherit;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 13px;
  top: 15px;
  transition: 0.2s ease all;
  ${TextField}:focus ~ & {
    top: -10px;
    font-size: 13px;
    color: #1976d2;
    background-color: white;
    width: 40px;
    padding-left: 5px;
  }
  &.up {
    top: -10px;
    font-size: 13px;
    color: #1976d2;
    background-color: white;
    width: 40px;
    padding-left: 5px;
  }
`;
const SearchBarWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  margin-left: 10px;
  display: flex;
`;

const ButtonReset = styled.button<AnimationButton>`
  position: relative;
  height: 36px;
  margin-top: 10px;
  overflow: hidden;
  background: ${(props) => (props.colorBg ? "#1976d2" : "white")};
  color: ${(props) => (props.colorBg ? "white" : "#1976d2")};
  /* ripple effect */
  background-position: center;
  transition: background 0.5s;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  border: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  &:hover {
    background: rgb(21, 101, 192)
      radial-gradient(circle, transparent 1%, rgb(21, 101, 192) 1%)
      center/15000%;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
  &:active {
    background-color: white;
    background-size: 100%;
    transition: background 0s;
  }
`;

const SearchBox: React.FC<Props> = ({ searchQuery, setSearchQuery }) => (
  <SearchBarWrapper>
    <TextField
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
    />
    <Label className={searchQuery === "" ? "" : "up"}>search</Label>
    <ButtonReset
      colorBg
      onClick={() => {
        setSearchQuery("");
      }}
    >
      RESET
      <Ripple />
    </ButtonReset>
  </SearchBarWrapper>
);

const Search: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Grid>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Grid>
  );
};

export default Search;
