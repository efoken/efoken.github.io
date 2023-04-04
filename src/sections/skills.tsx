import { Box, Typography } from '@mui/material';
import { FC, cloneElement } from 'react';
import {
  DiAtom,
  DiAws,
  DiBootstrap,
  DiComposer,
  DiDjango,
  DiDocker,
  DiGit,
  DiGrunt,
  DiGulp,
  DiJava,
  DiJira,
  DiLaravel,
  DiLess,
  DiLinux,
  DiMongodb,
  DiMysql,
  DiNginx,
  DiPhp,
  DiPostgresql,
  DiReact,
  DiRedis,
} from 'react-icons/di';
import {
  IoLogoAngular,
  IoLogoBitbucket,
  IoLogoChrome,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoMarkdown,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoPython,
  IoLogoSass,
  IoLogoWordpress,
  IoMdCheckmark,
} from 'react-icons/io';

const Skills: FC = () => (
  <Box
    component="section"
    id="skills"
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
  >
    <Box my="auto" width="100%">
      <Box mb={6} sx={{ pageBreakAfter: 'avoid' }}>
        <Typography variant="h2" color="textSecondary">
          Skills
        </Typography>
      </Box>
      <Typography gutterBottom component="h3" variant="h4">
        Programming Languages &amp; Tools
      </Typography>
      <Box display="flex" flexWrap="wrap" mb={2}>
        {[
          { title: 'Amazon Web Services', icon: <DiAws /> },
          { title: 'Angular', icon: <IoLogoAngular /> },
          { title: 'Atom', icon: <DiAtom /> },
          { title: 'Bitbucket', icon: <IoLogoBitbucket /> },
          { title: 'Bootstrap', icon: <DiBootstrap /> },
          { title: 'Chrome', icon: <IoLogoChrome /> },
          { title: 'Composer', icon: <DiComposer /> },
          { title: 'CSS3', icon: <IoLogoCss3 /> },
          { title: 'Django', icon: <DiDjango /> },
          { title: 'Docker', icon: <DiDocker /> },
          { title: 'Git', icon: <DiGit /> },
          { title: 'GitHub', icon: <IoLogoGithub /> },
          { title: 'Grunt', icon: <DiGrunt /> },
          { title: 'gulp', icon: <DiGulp /> },
          { title: 'HTML5', icon: <IoLogoHtml5 /> },
          { title: 'Java', icon: <DiJava /> },
          { title: 'JavaScript', icon: <IoLogoJavascript /> },
          { title: 'Jira', icon: <DiJira /> },
          { title: 'Laravel', icon: <DiLaravel /> },
          { title: 'Less', icon: <DiLess /> },
          { title: 'Linux', icon: <DiLinux /> },
          { title: 'Markdown', icon: <IoLogoMarkdown /> },
          { title: 'MongoDB', icon: <DiMongodb /> },
          { title: 'MySQL', icon: <DiMysql /> },
          { title: 'Nginx', icon: <DiNginx /> },
          { title: 'Node.js', icon: <IoLogoNodejs /> },
          { title: 'NPM', icon: <IoLogoNpm /> },
          { title: 'PHP', icon: <DiPhp /> },
          { title: 'PostgreSQL', icon: <DiPostgresql /> },
          { title: 'Python', icon: <IoLogoPython /> },
          { title: 'React', icon: <DiReact /> },
          { title: 'Redis', icon: <DiRedis /> },
          { title: 'Sass', icon: <IoLogoSass /> },
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
        <IoMdCheckmark />
        <Typography>Offline-First, Mobile-First, Responsive Design</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IoMdCheckmark />
        <Typography>Cross Browser/Platform Testing &amp; Debugging</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IoMdCheckmark />
        <Typography>Cross Functional Teams</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IoMdCheckmark />
        <Typography>Agile Development, Scrum &amp; Kanban</Typography>
      </Box>
    </Box>
  </Box>
);

export default Skills;
