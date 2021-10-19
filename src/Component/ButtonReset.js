import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtonsReset() {
  return (
    <Stack direction="row">
      <Button variant="contained">Reset</Button>
    </Stack>
  );
}
