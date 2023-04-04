import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { FC } from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import data from '../data.json';

const Experience: FC = () => (
  <Section id="experience">
    <SectionHeading>Experience</SectionHeading>
    {data.experience.map((experience, index) => (
      <Box
        key={experience.company}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={1}
        mt={index === data.experience.length - 1 ? 6 : undefined}
        my={index === data.experience.length - 1 ? undefined : 6}
        sx={{ pageBreakBefore: 'void', pageBreakInside: 'avoid' }}
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
  </Section>
);

export default Experience;
