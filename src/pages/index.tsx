import { Avatar, Box, Button, Divider, Drawer, Hidden, Link } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';
import Scrollspy from 'react-scrollspy';
import smoothscroll from 'smoothscroll-polyfill';
import About from '../sections/about';
import Education from '../sections/education';
import Experience from '../sections/experience';
import Interests from '../sections/interests';
import Skills from '../sections/skills';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

function handleScrollToAnchor(ev: React.MouseEvent<HTMLElement>) {
  const href = ev.currentTarget.getAttribute('href');
  const target = href && href !== '#' ? document.querySelector(href) : null;
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    ev.preventDefault();
  } else if (href === '#') {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    ev.preventDefault();
  }
}

const Home: NextPage = () => {
  return (
    <Box display="flex">
      <Hidden smDown>
        <Drawer variant="permanent" PaperProps={{ style: { width: 272 } }}>
          <Box mt="auto" mx="auto">
            <Link href="/" onClick={handleScrollToAnchor}>
              <Avatar
                alt="Eike Foken"
                src="/images/profile.jpg"
                srcSet="/images/profile@2x.jpg 2x, /images/profile@3x.jpg 3x"
              />
            </Link>
          </Box>
          <Box component="nav" mt={2} mb="auto">
            <Scrollspy
              items={['about', 'experience', 'education', 'skills', 'interests']}
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
      </Hidden>
      <main>
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
        <Interests />
      </main>
    </Box>
  );
};

export default Home;
