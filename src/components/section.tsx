import { Box, SxProps } from '@mui/material';

const Section: React.FC<{ children: React.ReactNode; id: string; sx?: SxProps }> = ({
  children,
  id,
  sx,
}) => (
  <Box
    component="section"
    id={id}
    borderBottom="1px solid rgba(0, 0, 0, 0.12)"
    display="flex"
    minHeight={{ xs: 0, md: 'calc(100vh + 1px)' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
    sx={{
      '&:last-of-type': {
        borderBottom: 0,
      },

      '@media print': {
        display: 'block',
        mb: '10mm',
        minHeight: 0,
        pb: '10mm',
        pt: 0,
        px: '10mm',
      },

      ...sx,
    }}
  >
    <Box my="auto" width="100%">
      {children}
    </Box>
  </Box>
);

export default Section;
