import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { FC } from 'react';
import data from '../data.json';

const Education: FC = () => (
  <Box
    component="section"
    id="education"
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
  >
    <Box my="auto" width="100%">
      <Box mb={6} sx={{ pageBreakAfter: 'avoid' }}>
        <Typography variant="h2" color="textSecondary">
          Education
        </Typography>
      </Box>
      {data.education.map((education, index) => (
        <Box
          key={education.title}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          mb={index === data.education.length - 1 ? 0 : 6}
          sx={{ pageBreakInside: 'avoid' }}
        >
          <Box mr="auto">
            <Typography variant="h3" color="textSecondary">
              {education.title}
            </Typography>
            <Typography gutterBottom variant="h4">
              {education.graduation}
            </Typography>
            <Typography>{education.subject}</Typography>
            <Typography>GPA: {education.gpa}</Typography>
          </Box>
          <Box minWidth={1 / 4}>
            <Typography color="primary" align="right">
              {DateTime.fromISO(education.startDate).toFormat('MMMM yyyy')} -{' '}
              {DateTime.fromISO(education.endDate).toFormat('MMMM yyyy')}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Education;
