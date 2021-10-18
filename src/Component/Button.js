import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">IN STOCK</Button>
      <Button variant="contained" href="#contained-buttons">
        OUT OF STOCK
      </Button>
    </Stack>
  );
}
