import { Box, Typography } from '@mui/material';

const SectionHeading: React.FC<{ children: string }> = ({ children }) => (
  <Box mb={6} sx={{ pageBreakAfter: 'avoid', pageBreakInside: 'avoid' }}>
    <Typography variant="h2" color="textSecondary">
      {children}
    </Typography>
  </Box>
);

export default SectionHeading;
