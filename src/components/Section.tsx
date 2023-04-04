import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

const Section: FC<{ children: ReactNode; id: string }> = ({ children, id }) => (
  <Box
    component="section"
    id={id}
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
    sx={{
      '@media print': {
        display: 'block',
        minHeight: 0,
        p: '10mm',
      },
    }}
  >
    <Box my="auto" width="100%">
      {children}
    </Box>
  </Box>
);

export default Section;
