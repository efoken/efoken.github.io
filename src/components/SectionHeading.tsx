import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const SectionHeading: FC<{ children: string }> = ({ children }) => (
  <Box mb={6} sx={{ pageBreakAfter: 'avoid', pageBreakInside: 'avoid' }}>
    <Typography variant="h2" color="textSecondary">
      {children}
    </Typography>
  </Box>
);

export default SectionHeading;
