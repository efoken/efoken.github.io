import { Box, Typography } from '@mui/material';
import { cloneElement } from 'react';
import {
  BiLogoAws,
  BiLogoBootstrap,
  BiLogoDjango,
  BiLogoFigma,
  BiLogoGit,
  BiLogoGraphql,
  BiLogoJava,
  BiLogoLess,
  BiLogoMongodb,
  BiLogoPhp,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import {
  DiAtom,
  DiComposer,
  DiGrunt,
  DiGulp,
  DiJira,
  DiLinux,
  DiMysql,
  DiNginx,
  DiPostgresql,
  DiRedis,
} from 'react-icons/di';
import {
  IoCheckmark,
  IoLogoAngular,
  IoLogoBitbucket,
  IoLogoChrome,
  IoLogoCss3,
  IoLogoDocker,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoMarkdown,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoPython,
  IoLogoReact,
  IoLogoSass,
  IoLogoWebComponent,
  IoLogoWordpress,
} from 'react-icons/io5';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';

const Skills: React.FC = () => (
  <Section id="skills">
    <SectionHeading>Skills</SectionHeading>
    <Box sx={{ pageBreakInside: 'avoid' }}>
      <Typography gutterBottom component="h3" variant="h4">
        Programming Languages &amp; Tools
      </Typography>
      <Box display="flex" flexWrap="wrap" mb={2}>
        {[
          { title: 'Amazon Web Services', icon: <BiLogoAws /> },
          { title: 'Angular', icon: <IoLogoAngular /> },
          { title: 'Atom', icon: <DiAtom /> },
          { title: 'Bitbucket', icon: <IoLogoBitbucket /> },
          { title: 'Bootstrap', icon: <BiLogoBootstrap /> },
          { title: 'Chrome', icon: <IoLogoChrome /> },
          { title: 'Composer', icon: <DiComposer /> },
          { title: 'CSS3', icon: <IoLogoCss3 /> },
          { title: 'Django', icon: <BiLogoDjango /> },
          { title: 'Docker', icon: <IoLogoDocker /> },
          { title: 'Figma', icon: <BiLogoFigma /> },
          { title: 'Git', icon: <BiLogoGit /> },
          { title: 'GitHub', icon: <IoLogoGithub /> },
          { title: 'GitLab', icon: <IoLogoGitlab /> },
          { title: 'GraphQL', icon: <BiLogoGraphql /> },
          { title: 'Grunt', icon: <DiGrunt /> },
          { title: 'gulp', icon: <DiGulp /> },
          { title: 'HTML5', icon: <IoLogoHtml5 /> },
          { title: 'Java', icon: <BiLogoJava /> },
          { title: 'JavaScript', icon: <IoLogoJavascript /> },
          { title: 'Jira', icon: <DiJira /> },
          { title: 'Laravel', icon: <IoLogoLaravel /> },
          { title: 'Less', icon: <BiLogoLess /> },
          { title: 'Linux', icon: <DiLinux /> },
          { title: 'Markdown', icon: <IoLogoMarkdown /> },
          { title: 'MongoDB', icon: <BiLogoMongodb /> },
          { title: 'MySQL', icon: <DiMysql /> },
          { title: 'Nginx', icon: <DiNginx /> },
          { title: 'Node.js', icon: <IoLogoNodejs /> },
          { title: 'NPM', icon: <IoLogoNpm /> },
          { title: 'PHP', icon: <BiLogoPhp /> },
          { title: 'PostgreSQL', icon: <DiPostgresql /> },
          { title: 'Python', icon: <IoLogoPython /> },
          { title: 'React', icon: <IoLogoReact /> },
          { title: 'Redis', icon: <DiRedis /> },
          { title: 'Sass', icon: <IoLogoSass /> },
          { title: 'Tailwind CSS', icon: <BiLogoTailwindCss /> },
          { title: 'TypeScript', icon: <BiLogoTypescript /> },
          { title: 'WebComponents', icon: <IoLogoWebComponent /> },
          { title: 'WordPress', icon: <IoLogoWordpress /> },
        ].map((tool) => (
          <Box key={tool.title} fontSize={48} lineHeight={1} mr={2} mb={2}>
            {cloneElement(tool.icon, { 'aria-label': tool.title })}
          </Box>
        ))}
      </Box>
      <Typography gutterBottom component="h3" variant="h4">
        Workflow
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <IoCheckmark />
        <Typography>Offline-First, Mobile-First, Responsive Design</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IoCheckmark />
        <Typography>Cross Browser/Platform Testing &amp; Debugging</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IoCheckmark />
        <Typography>Cross Functional Teams</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IoCheckmark />
        <Typography>Agile Development, Scrum &amp; Kanban</Typography>
      </Box>
    </Box>
  </Section>
);

export default Skills;
