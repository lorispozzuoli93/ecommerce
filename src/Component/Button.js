import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ContainedButtons(props) {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      sx={{ m: 2 }}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton
        value="ALL"
        variant="contained"
        onClick={() => props.toggle("all")}
      >
        ALL
      </ToggleButton>
      <ToggleButton
        value="IN STOCK"
        variant="contained"
        onClick={() => props.toggle("in")}
      >
        IN STOCK
      </ToggleButton>
      <ToggleButton
        value="OUT OF STOCK"
        variant="contained"
        onClick={() => props.toggle("out")}
      >
        OUT OF STOCK
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
