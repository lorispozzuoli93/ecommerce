import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchActions } from "../Features/SearchSlice/SearchSlice";
import { RootState } from "../Store/store";
import Ripple from "../Effect/Ripple";

const Grid = styled.div`
  margin-right: 1px;
  @media (min-width: 1280px) {
    margin-right: 117px;
  }
`;

const TextField = styled.input`
  font-size: 17px;
  padding: 10px;
  padding-left: 19px;
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
  left: 14px;
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
  cursor: pointer;
  background: ${(props) => (props.colorBg ? "#1976d2" : "white")};
  color: ${(props) => (props.colorBg ? "white" : "#1976d2")};
  transition: background 0.5s;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 15.5px;
  border-radius: 4px;
  border: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  transition: 0.8s;
  &:active {
    background-color: #1976d2;
    opacity: 0.7;
    transition: 2s;
    box-shadow: 5px 5px 20px 0px #000000;
  }
  &:hover {
    background-color: #155697;
  }
`;

type AnimationButton = {
  colorBg: boolean;
};

const Search: React.FC = () => {
  const searchQuery = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  return (
    <Grid>
      <SearchBarWrapper>
        <TextField
          onChange={(e) => dispatch(searchActions.setSearchQuery(e.target.value))}
          value={searchQuery}
        />
        <Label className={searchQuery === "" ? "" : "up"}>search</Label>
        <ButtonReset
          colorBg
          onClick={() => {
            dispatch(searchActions.setSearchQuery(""));
          }}
        >
          RESET
          <Ripple />
        </ButtonReset>
      </SearchBarWrapper>
    </Grid>
  );
};

export default Search;
