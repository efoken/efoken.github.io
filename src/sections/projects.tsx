import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { BiLogoGraphql, BiLogoPhp, BiLogoTypescript } from 'react-icons/bi';
import {
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoReact,
  IoLogoSass,
  IoLogoWebComponent,
} from 'react-icons/io5';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';
import data from '../data.json';

const technologyIcons: Record<string, React.ReactElement> = {
  graphql: <BiLogoGraphql />,
  javascript: <IoLogoJavascript />,
  laravel: <IoLogoLaravel />,
  php: <BiLogoPhp />,
  react: <IoLogoReact />,
  reactnative: <IoLogoReact />,
  sass: <IoLogoSass />,
  typescript: <BiLogoTypescript />,
  webcomponents: <IoLogoWebComponent />,
};

const Projects: React.FC = () => (
  <Section id="projects">
    <SectionHeading>Projects</SectionHeading>
    {data.projects.map((project, index) => (
      <Box
        key={project.title}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={1}
        mt={index === data.projects.length - 1 ? 6 : undefined}
        my={index === data.projects.length - 1 ? undefined : 6}
        sx={{ pageBreakInside: 'avoid' }}
      >
        <Box mr="auto">
          <Typography variant="h3" color="textSecondary">
            {project.title}
          </Typography>
          <Typography gutterBottom variant="h4">
            {project.technologies.join(', ')}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} fontSize={32} lineHeight={1} mb={1}>
            {project.technologies.map(
              (technology) => technologyIcons[technology.toLowerCase().replace(/\s+/g, '')],
            )}
          </Box>
          <Typography dangerouslySetInnerHTML={{ __html: project.description }} />
        </Box>
        <Box minWidth={1 / 4}>
          <Typography color="primary" align="right">
            {DateTime.fromISO(project.startDate).toFormat('MMMM yyyy')} -{' '}
            {project.endDate === 'now'
              ? 'Present'
              : DateTime.fromISO(project.endDate).toFormat('MMMM yyyy')}
          </Typography>
        </Box>
      </Box>
    ))}
  </Section>
);

export default Projects;
