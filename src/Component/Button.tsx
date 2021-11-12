import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleActions } from "../Features/ToggleSlice/ToggleSlice";
import { RootState } from "../Store/store";

const Box = styled.div`
  margin-top: 22px;
  @media (min-width: 1280px) {
    margin-left: 82px;
  }
  @media (min-width: 768px) {
    margin-right: -20px;
  }
  @media (max-width: 540px) {
    margin-left: 10px;
    margin-right: 50px;
  }
  @media (max-width: 414px) {
    margin-right: 50px;
  }
  @media (max-width: 280px) {
    margin-right: 0px;
  }
`;

const Button = styled.button<BgButton>`
  background-color: transparent;
  color: #1976d2;
  height: 36px;
  min-width: 64px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid rgba(25, 118, 210, 0.5);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  box-shadow: 0px 1.5px #888888;
  vertical-align: middle;
  transition: 250ms;
  &.in {
    border-radius: 5px 0 0 5px;
  }
  &.out {
    border-radius: 0 5px 5px 0;
  }
  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
    color: #1976d2;
    border: 1px solid rgb(25, 118, 210);
  }
  &.selected {
    background-color: #1976d2;
    color: #fff;
  }
  &.selected:hover {
    background-color: #155697;
  }
`;

type BgButton = {
  activeButton: boolean;
};

const ContainedButtons: React.FC = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const dispatch = useDispatch();
  return (
    <Box>
      <Button
        className={toggle === "in" ? "in selected" : "in"}
        activeButton={toggle === "in"}
        onClick={() =>
          dispatch(
            toggle === "in"
              ? toggleActions.setToggle("none")
              : toggleActions.setToggle("in")
          )
        }
      >
        IN STOCK
      </Button>
      <Button
        className={toggle === "out" ? "out selected" : "out"}
        activeButton={toggle === "out"}
        onClick={() =>
          dispatch(
            toggle === "out"
              ? toggleActions.setToggle("none")
              : toggleActions.setToggle("out")
          )
        }
      >
        OUT OF STOCK
      </Button>
    </Box>
  );
};

export default ContainedButtons;
