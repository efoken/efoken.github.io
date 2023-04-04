import { Box, IconButton, Link, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { FC, MouseEvent } from 'react';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoXing,
} from 'react-icons/io';
import data from '../data.json';

function handleContact(ev: MouseEvent<HTMLAnchorElement>) {
  ev.preventDefault();
  window.location.href = Buffer.from('bWFpbHRvOmVpa2Vmb2tlbkBnbWFpbC5jb20=', 'base64').toString();
}

const About: FC = () => (
  <Box
    component="section"
    id="about"
    display="flex"
    minHeight={{ xs: 0, md: '100vh' }}
    px={{ xs: 2, md: 6 }}
    py={{ xs: 10, md: 6 }}
  >
    <Box my="auto">
      <Box mb={6}>
        <Typography variant="h1" color="textSecondary">
          Eike Foken
        </Typography>
        <Typography component="p" variant="h4">
          Ebertystr. 10 · Berlin, DE 10249 · <Link href="tel:+4915785916655">+49 1578 5916655</Link>{' '}
          ·{' '}
          <Link
            sx={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
            href="#contact"
            onClick={handleContact}
          >
            moc.liamg@nekofekie
          </Link>{' '}
          · <Link href="https://eikefoken.com/">eikefoken.com</Link>
        </Typography>
      </Box>
      <Box mb={6}>
        <Typography variant="body1">
          I am Eike Foken, a Web and Frontend Developer with nearly{' '}
          {Math.ceil(
            DateTime.fromISO(data.experience.slice(-1)[0].startDate).diffNow('years').years * -1,
          )}{' '}
          years of experience with fullstack and web development, using modern technologies and
          frameworks. I am{' '}
          {Math.floor(DateTime.fromISO(data.about.birthDate).diffNow('years').years * -1)} years
          old, currently living in Berlin together with my lovely wife and our four cats. I was born
          on 26th of March 1987 in Aurich, a small town in East Frisia, Northern Germany near the
          sea.
        </Typography>
      </Box>
      <IconButton
        href="https://www.xing.com/profile/Eike_Foken"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Xing"
      >
        <IoLogoXing aria-hidden="true" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/eike-foken/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <IoLogoLinkedin aria-hidden="true" />
      </IconButton>
      <IconButton
        href="https://github.com/efoken"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <IoLogoGithub aria-hidden="true" />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/eike.foken"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <IoLogoFacebook aria-hidden="true" />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/eike_raju/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <IoLogoInstagram aria-hidden="true" />
      </IconButton>
    </Box>
  </Box>
);

export default About;
