import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "LIGHTGREY", p: 2}}>
      <Grid container direction="row-reverse" item xs={12}>
        <ButtonGroup variant="text" aria-label="outlined primary button group">
          <a href="https://www.twitter.com">
            <Button>TWITTER</Button>
          </a>
          <a href="https://www.facebook.com">
            <Button>FACEBOOK</Button>
          </a>
        </ButtonGroup>
      </Grid>
    </Box>
  );
}
