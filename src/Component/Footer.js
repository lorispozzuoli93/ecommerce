import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "GREY", py: 2, mt: 2 }}>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={0}>
          <ButtonGroup
            variant="text"
            aria-label="outlined primary button group"
          >
            <a href="https://www.twitter.com">
              <Button>TWITTER</Button>
            </a>
            <a href="https://www.facebook.com">
              <Button>FACEBOOK</Button>
            </a>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}
