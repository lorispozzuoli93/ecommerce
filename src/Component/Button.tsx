import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

type Props = {
  toggle: any;
  setToggle: any;
};

const ContainedButtons: React.FC<Props> = ({ toggle, setToggle }) => {
  return (
    <Box mt={3} ml={1}>
      <ButtonGroup>
        <Button
          variant={toggle === "in" ? "contained" : "outlined"}
          onClick={() =>
            toggle === "in" ? setToggle("none") : setToggle("in")
          }
        >
          IN STOCK
        </Button>
        <Button
          variant={toggle === "out" ? "contained" : "outlined"}
          onClick={() =>
            toggle === "out" ? setToggle("none") : setToggle("out")
          }
        >
          OUT OF STOCK
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ContainedButtons;
