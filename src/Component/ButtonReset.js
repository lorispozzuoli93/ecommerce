import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtonsReset(props) {
  return (
    <Stack direction="row">
      <Button variant="contained" onClick={() => props.reset()}>
        Reset
      </Button>
    </Stack>
  );
}