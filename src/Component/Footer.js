import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box style={{backgroundColor: '#bdbdbd'}} sx={{  p: 2, mt: 2 }}>
      <Grid container direction="row-reverse">
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
