import * as React from "react";
import "../App.css";
import styled from "styled-components";

type Props = {
  toggle: string;
  setToggle: (toggle: string) => void;
};

const Box = styled.div`
  margin-top: 20px;
  margin-left: 8px;
`;

const ButtonLeft = styled.button`
  color: #1976d2;
  background-color: transparent;
  min-width: 64px;
  padding: 6px 16px;
  cursor: pointer;
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 5px 0 0 5px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  box-shadow: 0px 1px #888888;
`;

const ButtonRight = styled.button`
  color: #1976d2;
  background-color: transparent;
  min-width: 64px;
  padding: 6px 16px;
  cursor: pointer;
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 0 5px 5px 0;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  box-shadow: 0px 1px #888888;
`;

const ContainedButtons: React.FC<Props> = ({ toggle, setToggle }) => {
  return (
    <Box>
      <ButtonLeft
        className={toggle === "in" ? "bg-button" : ""}
        onClick={() => (toggle === "in" ? setToggle("none") : setToggle("in"))}
      >
        IN STOCK
      </ButtonLeft>
      <ButtonRight
        className={toggle === "out" ? "bg-button" : ""}
        onClick={() =>
          toggle === "out" ? setToggle("none") : setToggle("out")
        }
      >
        OUT OF STOCK
      </ButtonRight>
    </Box>
  );
};

export default ContainedButtons;
