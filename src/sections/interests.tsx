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
      <Box mb={6}>
        <Typography variant="h2" color="textSecondary">
          Interests
        </Typography>
      </Box>
      <Typography gutterBottom>
        In my free time, I like to go to concerts, explore new places on this planet, relax in
        nature and read news about outer space or cats.
      </Typography>
      <Typography gutterBottom>
        But I also enjoy being at home. So, a large amount of my free time I spend with exploring
        the latest technology advancements in the front-end web development world, in the company of
        my wife, who is an artist, and our four cats.
      </Typography>
    </Box>
  </Box>
);

export default Interests;
