import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';
import data from '../data.json';

const Education: React.FC = () => (
  <Section id="education">
    <SectionHeading>Education</SectionHeading>
    {data.education.map((education, index) => (
      <Box
        key={education.title}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={1}
        mt={index === data.education.length - 1 ? 6 : undefined}
        my={index === data.education.length - 1 ? undefined : 6}
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
  </Section>
);

export default Education;
