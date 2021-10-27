import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function ContainedButtons(props) {
  return (
    <Box mt={3} ml={1}>
      <ButtonGroup>
        <Button
          variant={props.toggle === "in" ? "contained" : "outlined"}
          onClick={() =>
            props.toggle === "in"
              ? props.setToggle("none")
              : props.setToggle("in")
          }
        >
          IN STOCK
        </Button>
        <Button
          variant={props.toggle === "out" ? "contained" : "outlined"}
          onClick={() =>
            props.toggle === "out"
              ? props.setToggle("none")
              : props.setToggle("out")
          }
        >
          OUT OF STOCK
        </Button>
      </ButtonGroup>
    </Box>
  );
}
