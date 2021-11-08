import * as React from "react";
import styled from "styled-components";

type Props = {
  toggle: string;
  setToggle: (toggle: "none" |"in" | "out") => void;
};

type BgButton = {
  activeButton: boolean;
};

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

const ButtonLeft = styled.button<BgButton>`
  color: ${(props) => (props.activeButton ? "#fff" : "#1976d2")};
  background-color: ${(props) =>
    props.activeButton ? "#1976d2" : "transparent"};
  height: 36px;
  min-width: 64px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 5px 0 0 5px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  box-shadow: 0px 1.5px #888888;
  vertical-align: middle;
  align-items: center;
  transition: 250ms;
`;

const ButtonRight = styled.button<BgButton>`
  color: ${(props) => (props.activeButton ? "#fff" : "#1976d2")};
  background-color: ${(props) =>
    props.activeButton ? "#1976d2" : "transparent"};
  height: 36px;
  min-width: 64px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 0 5px 5px 0;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  box-shadow: 0px 1.5px #888888;
  vertical-align: middle;
  transition: 250ms;
`;

const ContainedButtons: React.FC<Props> = ({ toggle, setToggle }) => {
  return (
    <Box>
      <ButtonLeft
        activeButton={toggle === "in"}
        onClick={() => (toggle === "in" ? setToggle("none") : setToggle("in"))}
      >
        IN STOCK
      </ButtonLeft>
      <ButtonRight
        activeButton={toggle === "out"}
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
