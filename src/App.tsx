import classNames from 'classnames';
import { DateTime } from 'luxon';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
import { IoLogoFacebook, IoLogoGithub, IoLogoXing, IoMdCheckmark } from 'react-icons/io';
import Scrollspy from 'react-scrollspy';

export default class App extends React.Component {
  data = {
    about: {
      birthDate: DateTime.fromISO('1987-03-26'),
    },
    experiences: [
      {
        title: 'Software Developer',
        company: 'Model Engineering Solutions GmbH, Berlin',
        description:
          'A company specialized in quality assurance of software projects, well-known in the automobile industry. I am developing the Quality Commander, a huge project to visualize Big Data collected from other inhouse software. Used technologies are C# in backend and Typescript, React as well as D3 in frontends.',
        startDate: DateTime.fromISO('2019-03'),
        endDate: DateTime.local(),
      },
      {
        title: 'Senior Full-Stack Developer',
        company: 'Cybay New Media GmbH, Hanover',
        description:
          'In the agency I dealt with the creation of websites, further development of existing websites, as well as the care of existing customers. In addition to PHP, Laravel and WordPress, the technologies used include JavaScript, React for the development of Progressive Web Apps and React Native for mobile app development.',
        startDate: DateTime.fromISO('2018-01'),
        endDate: DateTime.fromISO('2019-02'),
      },
      {
        title: 'Software Developer',
        company: 'ABIAN GmbH, Hanover',
        description:
          'Originally hired as a developer for web-based software (e.g. for the Deutsche Messe AG and CEBIT), over time I took over more and more tasks and was responsible for the implementation of responsive websites and mobile apps, from conception to development towards implementation with PHP, JavaScript and CSS with well known frameworks like Laravel, Angular, React and Bootstrap.',
        startDate: DateTime.fromISO('2014-01'),
        endDate: DateTime.fromISO('2017-12'),
      },
      {
        title: 'Junior Web Developer',
        company: 'eMedienservice Nord, Oldenburg',
        description:
          'An agency, a subsidiary of the Nordwest-Zeitung, from which I was taken over after working at QP media GmbH. In addition to the independent development of responsive websites and WordPress theming, my activities also included the programming of www.nwzonline.de with Java.',
        startDate: DateTime.fromISO('2013-08'),
        endDate: DateTime.fromISO('2013-12'),
      },
      {
        title: 'Junior Web Developer',
        company: 'QP media GmbH, Oldenburg',
        description:
          'A small startup, sponsored by Nordwest-Zeitung, which dealt with couponing and printing vouchers. From the first day on I accompanied the startup, developed a well-known, regional coupon platform. Programming languages used included Python (with Django) and JavaScript.',
        startDate: DateTime.fromISO('2011-10'),
        endDate: DateTime.fromISO('2013-07'),
      },
    ],
    educations: [
      {
        title: 'Hochschule Emden/Leer',
        graduation: 'Bachelor of Science',
        subject: 'Computer Science - Web Development Track',
        gpa: 2.31,
        startDate: DateTime.fromISO('2008-09'),
        endDate: DateTime.fromISO('2012-03'),
      },
    ],
    skills: {
      tools: [
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
      ],
    },
  };

  contactMe = (ev: any) => {
    ev.preventDefault();
    window.location.href = atob('bWFpbHRvOmVpa2Vmb2tlbkBnbWFpbC5jb20=');
  };

  scrollToAnchor = (ev: any) => {
    const href = ev.currentTarget.getAttribute('href');
    const target = href && href !== '#' ? document.querySelector(href) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      ev.preventDefault();
    } else if (href === '#') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      ev.preventDefault();
    }
  };

  render() {
    const { about, experiences, educations, skills } = this.data;

    return (
      <div className="main-wrapper">
        <Navbar id="sideNav" expand="lg" bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="#" onClick={this.scrollToAnchor}>
            <span className="d-block d-lg-none">Eike Foken</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={require('./assets/profile.jpg')}
                srcSet={`${require('./assets/profile@2x.jpg')} 2x, ${require('./assets/profile@3x.jpg')} 3x`}
                alt="Eike Foken"
              />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav>
              <Scrollspy
                items={['about', 'experience', 'education', 'skills', 'interests']}
                componentTag="div"
                currentClassName="active"
              >
                <a className="nav-link" href="#about" onClick={this.scrollToAnchor}>
                  About
                </a>
                <a className="nav-link" href="#experience" onClick={this.scrollToAnchor}>
                  Experience
                </a>
                <a className="nav-link" href="#education" onClick={this.scrollToAnchor}>
                  Education
                </a>
                <a className="nav-link" href="#skills" onClick={this.scrollToAnchor}>
                  Skills
                </a>
                <a className="nav-link" href="#interests" onClick={this.scrollToAnchor}>
                  Interests
                </a>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid className="p-0">
          <section id="about" className="resume-section p-3 p-lg-5 d-flex d-column">
            <div className="my-auto">
              <h1 className="mb-0">
                Eike <span className="text-primary">Foken</span>
              </h1>
              <div className="subheading mb-5">
                Ebertystr. 10{' · '}Berlin, DE 10249{' · '}
                <a href="tel:+4915785916655">+49 1578 5916655</a>
                {' · '}
                {/* eslint-disable-next-line */}
                <a
                  style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
                  href="#"
                  onClick={this.contactMe}
                >
                  moc.liamg@nekofekie
                </a>
              </div>
              <p className="lead mb-5">
                I am Eike Foken, a Web and Frontend Developer with nearly{' '}
                {Math.ceil(experiences.slice(-1)[0].startDate.diffNow('years').years * -1)} years of
                experience with modern web technologies and frameworks. I am{' '}
                {Math.floor(about.birthDate.diffNow('years').years * -1)} years old, currently
                living in Berlin together with my wife and our two cats. I was born on 26th of March
                1987 in Aurich, a small town in East Frisia near the north sea.
              </p>
              <div className="social-icons">
                <a
                  href="https://www.xing.com/profile/Eike_Foken"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xing"
                >
                  <IoLogoXing aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/efoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IoLogoGithub aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/eike.foken"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <IoLogoFacebook aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <hr className="m-0" />

          <section id="experience" className="resume-section p-3 p-lg-5 d-flex flex-column">
            <div className="my-auto">
              <h2 className="mb-5">Experience</h2>

              {experiences.map((experience, index) => (
                <div
                  key={experience.company}
                  className={classNames('resume-item d-flex flex-column flex-md-row', {
                    'mb-5': index !== experiences.length - 1,
                  })}
                >
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0">{experience.title}</h3>
                    <div className="subheading mb-3">{experience.company}</div>
                    <p>{experience.description}</p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">
                      {experience.startDate.toFormat('MMMM yyyy')}
                      {' - '}
                      {experience.endDate.hasSame(DateTime.local(), 'month')
                        ? 'Present'
                        : experience.endDate.toFormat('MMMM yyyy')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="m-0" />

          <section id="education" className="resume-section p-3 p-lg-5 d-flex flex-column">
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              {educations.map((education, index) => (
                <div
                  key={education.title}
                  className={classNames('resume-item d-flex flex-column flex-md-row', {
                    'mb-5': index !== experiences.length - 1,
                  })}
                >
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0">{education.title}</h3>
                    <div className="subheading mb-3">{education.graduation}</div>
                    <div>{education.subject}</div>
                    <p>GPA: {education.gpa}</p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">
                      {education.startDate.toFormat('MMMM yyyy')}
                      {' - '}
                      {education.endDate.toFormat('MMMM yyyy')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="m-0" />

          <section id="skills" className="resume-section p-3 p-lg-5 d-flex flex-column">
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>

              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline dev-icons">
                {skills.tools.map(tool =>
                  typeof tool.icon === 'string' ? (
                    <li key={tool.icon} className="list-inline-item">
                      <i className={tool.icon} aria-label={tool.title} />
                    </li>
                  ) : (
                    <li key={tool.title} className="list-inline-item">
                      {React.cloneElement(tool.icon, { 'aria-label': tool.title })}
                    </li>
                  ),
                )}
              </ul>

              <div className="subheading mb-3">Workflow</div>
              <ul className="list-icons">
                <li>
                  <IoMdCheckmark />
                  Offline-First, Mobile, Responsive Design
                </li>
                <li>
                  <IoMdCheckmark />
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <IoMdCheckmark />
                  Cross Functional Teams
                </li>
                <li>
                  <IoMdCheckmark />
                  Agile Development, Scrum &amp; Kanban
                </li>
              </ul>
            </div>
          </section>

          <hr className="m-0" />

          <section id="interests" className="resume-section p-3 p-lg-5 d-flex flex-column">
            <div className="my-auto">
              <h2 className="mb-5">Interests</h2>
              <p>
                In my free time, I like to go to concerts, explore new places on this planet, relax
                in nature and read news about outer space or cats.
              </p>
              <p>
                But I also enjoy being at home. So, a large amount of my free time I spend with
                exploring the latest technology advancements in the front-end web development world
                in the company of my wife, who is an artist, and our two cats.
              </p>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
