import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function ContainedButtons(props) {
  return (
    <Box mt={3} ml={1}>
      <ButtonGroup>
        <Button
          variant={props.selected == "all" ? "contained" : "outlined"}
          onClick={() => props.toggle("all")}
        >
          ALL
        </Button>
        <Button
          variant={props.selected == "in" ? "contained" : "outlined"}
          onClick={() => props.toggle("in")}
        >
          IN STOCK
        </Button>
        <Button
          variant={props.selected == "out" ? "contained" : "outlined"}
          onClick={() => props.toggle("out")}
        >
          OUT OF STOCK
        </Button>
      </ButtonGroup>
    </Box>
  );
}
