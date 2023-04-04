import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const Interests: FC = () => (
  <Box
    component="section"
    id="interests"
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
  >
    <Box my="auto" width="100%">
      <Box mb={6} sx={{ pageBreakAfter: 'avoid' }}>
        <Typography variant="h2" color="textSecondary">
          Interests
        </Typography>
      </Box>
      <Typography gutterBottom>
        In my free time, I really like to go to concerts and festivals, travel and explore new
        places on this planet, relax in nature and read news about outer space or cats. But I also
        enjoy being at home and spend time with my wife and our lovely cats. A large amount of my
        free time I also spend with exploring the latest technology advancements in the Web
        Development world.
      </Typography>
      <Typography gutterBottom>
        Also I am running a small online shop together with my wife, who is an artist and tattooist.
        We are selling clothes and art and like to spend weekends on markets, making people smile.
      </Typography>
    </Box>
  </Box>
);

export default Interests;
