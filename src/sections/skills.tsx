import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { DiAtom, DiDjango, DiGit, DiNginx, DiPostgresql, DiRedis } from 'react-icons/di';
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaDocker,
  FaGitlab,
  FaGrunt,
  FaGulp,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaLess,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaSketch,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';

const Skills: React.VFC = () => (
  <Box
    component="section"
    id="skills"
    boxSizing="border-box"
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
  >
    <Box my="auto" width="100%">
      <Box mb={6}>
        <Typography variant="h2" color="textSecondary">
          Skills
        </Typography>
      </Box>
      <Typography gutterBottom variant="h4">
        Programming Languages &amp; Tools
      </Typography>
      <Box display="flex" flexWrap="wrap" mb={2}>
        {[
          { title: 'Amazon Web Services', icon: <FaAws /> },
          { title: 'Angular', icon: <FaAngular /> },
          { title: 'Atom', icon: <DiAtom /> },
          { title: 'Bootstrap', icon: <FaBootstrap /> },
          { title: 'Chrome', icon: <FaChrome /> },
          { title: 'CSS3', icon: <FaCss3Alt /> },
          { title: 'Django', icon: <DiDjango /> },
          { title: 'Docker', icon: <FaDocker /> },
          { title: 'Git', icon: <DiGit /> },
          { title: 'GitLab', icon: <FaGitlab /> },
          { title: 'Grunt', icon: <FaGrunt /> },
          { title: 'gulp', icon: <FaGulp /> },
          { title: 'HTML5', icon: <FaHtml5 /> },
          { title: 'JavaScript', icon: <FaJs /> },
          { title: 'Laravel', icon: <FaLaravel /> },
          { title: 'Less', icon: <FaLess /> },
          { title: 'Nginx', icon: <DiNginx /> },
          { title: 'Node.js', icon: <FaNodeJs /> },
          { title: 'PHP', icon: <FaPhp /> },
          { title: 'PostgreSQL', icon: <DiPostgresql /> },
          { title: 'Python', icon: <FaPython /> },
          { title: 'React', icon: <FaReact /> },
          { title: 'Redis', icon: <DiRedis /> },
          { title: 'Sass', icon: <FaSass /> },
          { title: 'Sketch', icon: <FaSketch /> },
          { title: 'Vue.js', icon: <FaVuejs /> },
          { title: 'WordPress', icon: <FaWordpress /> },
        ].map((tool) => (
          <Box key={tool.title} fontSize={48} lineHeight={1} mr={2} mb={2}>
            {React.cloneElement(tool.icon, { 'aria-label': tool.title })}
          </Box>
        ))}
      </Box>
      <Typography gutterBottom variant="h4">
        Workflow
      </Typography>
      <Box display="flex" alignItems="center">
        <IoMdCheckmark />
        <Box ml={1}>
          <Typography>Offline-First, Mobile, Responsive Design</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IoMdCheckmark />
        <Box ml={1}>
          <Typography>Cross Browser Testing &amp; Debugging</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IoMdCheckmark />
        <Box ml={1}>
          <Typography>Cross Functional Teams</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IoMdCheckmark />
        <Box ml={1}>
          <Typography>Agile Development, Scrum &amp; Kanban</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Skills;
