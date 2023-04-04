import { Avatar, Box, Button, Divider, Drawer, Link } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { MouseEvent } from 'react';
import Scrollspy from 'react-scrollspy';
import About from '../sections/about';
import Education from '../sections/education';
import Experience from '../sections/experience';
import Interests from '../sections/interests';
import Skills from '../sections/skills';

function handleScrollToAnchor(ev: MouseEvent<HTMLElement>) {
  const href = ev.currentTarget.getAttribute('href');
  const target = href?.startsWith('#') ? document.querySelector(href) : null;

  if (target != null) {
    target.scrollIntoView({ behavior: 'smooth' });
    ev.preventDefault();
  } else if (href === '/') {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    ev.preventDefault();
  }
}

const Home: NextPage = () => (
  <Box display="flex">
    <Box
      display={{ xs: 'none', md: 'block' }}
      sx={{
        '@media print': {
          display: 'none',
        },
      }}
    >
      <Drawer variant="permanent" PaperProps={{ sx: { width: 272 } }}>
        <Box mt="auto" mx="auto">
          <Link href="/" onClick={handleScrollToAnchor}>
            <Avatar>
              <Image fill src="/images/profile.jpg" alt="Eike Foken" />
            </Avatar>
          </Link>
        </Box>
        <Box component="nav" mt={2} mb="auto">
          <Scrollspy
            items={['about', 'experience', 'education', 'skills', 'interests']}
            // @ts-expect-error: `children` must be explicitly defined since React 18
            componentTag={({ children }) => (
              <Box display="flex" flexDirection="column">
                {children}
              </Box>
            )}
            currentClassName="active"
          >
            <Button href="#about" onClick={handleScrollToAnchor}>
              About
            </Button>
            <Button href="#experience" onClick={handleScrollToAnchor}>
              Experience
            </Button>
            <Button href="#education" onClick={handleScrollToAnchor}>
              Education
            </Button>
            <Button href="#skills" onClick={handleScrollToAnchor}>
              Skills
            </Button>
            <Button href="#interests" onClick={handleScrollToAnchor}>
              Interests
            </Button>
          </Scrollspy>
        </Box>
      </Drawer>
    </Box>
    <main>
      <About />
      <Divider />
      <Experience />
      <Divider sx={{ pageBreakAfter: 'always' }} />
      <Education />
      <Divider />
      <Skills />
      <Divider />
      <Interests />
    </main>
  </Box>
);

export default Home;
