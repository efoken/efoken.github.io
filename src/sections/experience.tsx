import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { FC } from 'react';
import data from '../data.json';

const Experience: FC = () => (
  <Box
    component="section"
    id="experience"
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
  >
    <Box my="auto" width="100%">
      <Box mb={6} sx={{ pageBreakAfter: 'avoid' }}>
        <Typography variant="h2" color="textSecondary">
          Experience
        </Typography>
      </Box>
      {data.experience.map((experience, index) => (
        <Box
          key={experience.company}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          mb={index === data.experience.length - 1 ? 0 : 6}
          sx={{ pageBreakInside: 'avoid' }}
        >
          <Box mr="auto">
            <Typography variant="h3" color="textSecondary">
              {experience.title}
            </Typography>
            <Typography gutterBottom variant="h4">
              {experience.company}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: experience.description }} />
          </Box>
          <Box minWidth={1 / 4}>
            <Typography color="primary" align="right">
              {DateTime.fromISO(experience.startDate).toFormat('MMMM yyyy')} -{' '}
              {experience.endDate === 'now'
                ? 'Present'
                : DateTime.fromISO(experience.endDate).toFormat('MMMM yyyy')}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Experience;
