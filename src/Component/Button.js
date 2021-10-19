import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={() => props.toggle("all")}>
        ALL
      </Button>
      <Button variant="contained" onClick={() => props.toggle("in")}>
        IN STOCK
      </Button>
      <Button variant="contained" onClick={() => props.toggle("out")}>OUT OF STOCK</Button>
    </Stack>
  );
}
