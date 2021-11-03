import * as React from "react";
import styled from "styled-components";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const TextField = styled.input`
  width: 60%;
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
    <div>
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
    </div>
  );
};

export default Search;

// font: inherit;
//   letter-spacing: inherit;
//   color: currentColor;
//   padding: 4 px 0 5 px;
//   border: 0;
//   box-sizing: content-box;
//   background: none;
//   height: 1.4375 em;
//   margin: 0;
//   -webkit-tap-highlight-color: transparent;
//   display: block;
//   min-width: 0;
//   width: 100%;
//   -webkit-animation-name: mui-auto-fill-cancel;
//   animation-name: mui-auto-fill-cancel;
//   -webkit-animation-duration: 10ms;
//   animation-duration: 10ms;
//   padding: 16.5 px 14 px;
