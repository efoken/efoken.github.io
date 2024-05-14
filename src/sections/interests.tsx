import { Typography } from '@mui/material';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';

const Interests: React.FC = () => (
  <Section id="interests" sx={{ pageBreakInside: 'avoid' }}>
    <SectionHeading>Interests</SectionHeading>
    <Typography gutterBottom>
      In my free time, I really like to go to concerts, festivals and exhibitions, travel and
      explore new places on this planet, relax in nature and read news about outer space. I enjoy
      being at home and spending a large amount of time with exploring the latest technology
      advancements in the Web Development world.
    </Typography>
    <Typography gutterBottom>
      Also I am running a small online shop together with my wife, who is an artist and tattooist.
      We are selling clothes and art and like to spend weekends on markets, making people smile.
    </Typography>
  </Section>
);

export default Interests;
