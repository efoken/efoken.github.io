import { Avatar, Box, Button, Divider, Drawer, Link } from '@mui/material';
import { NextPage } from 'next';
import Scrollspy from 'react-scrollspy';
import About from '../sections/about';
import Education from '../sections/education';
import Experience from '../sections/experience';
import Interests from '../sections/interests';
import Skills from '../sections/skills';

function handleScrollToAnchor(ev: React.MouseEvent<HTMLElement>) {
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
    <Box display={{ xs: 'none', md: 'block' }}>
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
      <Divider />
      <Education />
      <Divider />
      <Skills />
      <Divider />
      <Interests />
    </main>
  </Box>
);

export default Home;
