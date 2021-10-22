import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function ContainedButtons(props) {
  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={() => props.toggle("all")}>ALL</Button>
        <Button onClick={() => props.toggle("in")}>IN STOCK</Button>
        <Button onClick={() => props.toggle("out")}>OUT OF STOCK</Button>
      </ButtonGroup>
    </Box>
  );
}
