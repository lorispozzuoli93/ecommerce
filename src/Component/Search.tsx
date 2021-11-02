import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Search: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Grid>
      <TextField
        label={"Search"}
        sx={{ mt: 1, ml: 1, width: "65%" }}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      ></TextField>
      <Button
        sx={{ mt: 2.3, ml: 2 }}
        variant="contained"
        onClick={() => {
          setSearchQuery("");
        }}
      >
        Reset
      </Button>
    </Grid>
  );
};

export default Search;
