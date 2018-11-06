<template>
  <div class="main-wrapper">
    <b-navbar
      id="sideNav"
      toggleable="lg"
      type="dark"
      variant="primary"
      fixed="top"
    >
      <b-navbar-brand
        href="#"
        @click="scrollToAnchor"
      >
        <span class="d-block d-lg-none">Eike Foken</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="./assets/profile.jpg"
            srcset="./assets/profile@2x.jpg 2x, ./assets/profile@3x.jpg 3x"
            alt="Eike Foken"
          >
        </span>
      </b-navbar-brand>
      <b-navbar-toggle target="navbarSupportedContent" />
      <b-collapse
        id="navbarSupportedContent"
        is-nav
      >
        <b-navbar-nav v-b-scrollspy>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#about"
              @click="scrollToAnchor"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#experience"
              @click="scrollToAnchor"
            >
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#education"
              @click="scrollToAnchor"
            >
              Education
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#skills"
              @click="scrollToAnchor"
            >
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#interests"
              @click="scrollToAnchor"
            >
              Interests
            </a>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container-fluid p-0">

      <section
        id="about"
        class="resume-section p-3 p-lg-5 d-flex d-column"
      >
        <div class="my-auto">
          <h1 class="mb-0">
            Eike
            <span class="text-primary">Foken</span>
          </h1>
          <div class="subheading mb-5">
            Vahrenwalder Str. 115 · Hanover, DE 20165 · +49 1578 5916655 ·
            <a
              :style="{ unicodeBidi: 'bidi-override', direction: 'rtl' }"
              href="#"
              @click="contactMe"
            >
              ed.nekofekie@tkatnok
            </a>
          </div>
          <p class="lead mb-5">
            I am Eike Foken, a Web and Frontend Developer with 7 years of experience with modern web
            technologies and frameworks. I am 31 years old, currently living in Hanover together
            with my girlfriend and our two cats. I was born on 26th of March 1987 in Aurich, a small
            town in East Frisia near the north sea.
          </p>
          <div class="social-icons">
            <a
              href="https://www.xing.com/profile/Eike_Foken"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xing"
            >
              <i
                class="ion ion-logo-xing"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://github.com/efoken"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i
                class="ion ion-logo-github"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.facebook.com/eike.foken"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i
                class="ion ion-logo-facebook"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      <hr class="m-0">

      <section
        id="experience"
        class="resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div
            v-for="(experience, index) in experiences"
            :key="index"
            :class="{ 'mb-5': index !== experiences.length - 1 }"
            class="resume-item d-flex flex-column flex-md-row"
          >
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ experience.title }}</h3>
              <div class="subheading mb-3">{{ experience.company }}</div>
              <p>{{ experience.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">
                {{ experience.startDate }} - {{ experience.endDate }}
              </span>
            </div>
          </div>

        </div>

      </section>

      <hr class="m-0">

      <section
        id="education"
        class="resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div
            v-for="(education, index) in educations"
            :key="index"
            :class="{ 'mb-5': index !== experiences.length - 1 }"
            class="resume-item d-flex flex-column flex-md-row"
          >
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ education.title }}</h3>
              <div class="subheading mb-3">{{ education.graduation }}</div>
              <div>{{ education.subject }}</div>
              <p>GPA: {{ education.gpa }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">
                {{ education.startDate }} - {{ education.endDate }}
              </span>
            </div>
          </div>

        </div>
      </section>

      <hr class="m-0">

      <section
        id="skills"
        class="resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li
              v-for="tool in skills.tools"
              :key="tool.icon"
              class="list-inline-item"
            >
              <i
                :class="tool.icon"
                :aria-label="tool.title"
              />
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="list-icons">
            <li>
              <i class="ion ion-md-checkmark" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <i class="ion ion-md-checkmark" />
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i class="ion ion-md-checkmark" />
              Cross Functional Teams
            </li>
            <li>
              <i class="ion ion-md-checkmark" />
              Agile Development, Scrum &amp; Kanban
            </li>
          </ul>
        </div>
      </section>

      <hr class="m-0">

      <section
        id="interests"
        class="resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>
            In my free time, I like to go to concerts, explore new places on this planet, relax in
            nature and read news about outer space or cats.
          </p>
          <p>
            But I also enjoy being at home. So, a large amount of my free time I spend with
            exploring the latest technology advancements in the front-end web development world in
            the company of my girlfriend, who is an artist, and our two cats.
          </p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: 'Senior Web Developer',
          company: 'Cybay New Media GmbH, Hanover',
          description: 'In the agency I am dealing with the creation of websites, further development of existing websites, as well as the care of existing customers. In addition to PHP, Laravel and WordPress, the technologies used include JavaScript, React for the development of Progressive Web Apps and React Native for mobile app development.',
          startDate: 'January 2018',
          endDate: 'Present',
        },
        {
          title: 'Software Developer',
          company: 'ABIAN GmbH, Hanover',
          description: 'Originally hired as a developer for web-based software (e.g. for the Deutsche Messe AG and CEBIT), over time I took over more and more tasks and was responsible for the implementation of responsive websites and mobile apps, from conception to development towards implementation with PHP, JavaScript and CSS with well known frameworks like Laravel, Angular, React and Bootstrap.',
          startDate: 'January 2014',
          endDate: 'December 2017',
        },
        {
          title: 'Junior Web Developer',
          company: 'eMedienservice Nord, Oldenburg',
          description: 'An agency, a subsidiary of the Nordwest-Zeitung, from which I was taken over after working at QP media GmbH. In addition to the independent development of responsive websites and WordPress theming, my activities also included the programming of www.nwzonline.de with Java.',
          startDate: 'August 2013',
          endDate: 'December 2013',
        },
        {
          title: 'Junior Web Developer',
          company: 'QP media GmbH, Oldenburg',
          description: 'A small startup, sponsored by Nordwest-Zeitung, which dealt with couponing and printing vouchers. From the first day on I accompanied the startup, developed a well-known, regional coupon platform. Programming languages used included Python (with Django) and JavaScript.',
          startDate: 'October 2011',
          endDate: 'July 2013',
        },
      ],
      educations: [
        {
          title: 'Hochschule Emden/Leer',
          graduation: 'Bachelor of Science',
          subject: 'Computer Science - Web Development Track',
          gpa: 2.31,
          startDate: 'September 2008',
          endDate: 'March 2012',
        },
      ],
      skills: {
        tools: [
          { title: 'Amazon Web Services', icon: 'devicon-amazonwebservices-original' },
          { title: 'Angular', icon: 'devicon-angularjs-plain' },
          { title: 'Atom', icon: 'devicon-atom-original' },
          { title: 'Babel', icon: 'devicon-babel-plain' },
          { title: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
          { title: 'CSS3', icon: 'devicon-css3-plain' },
          { title: 'Django', icon: 'devicon-django-plain' },
          { title: 'Docker', icon: 'devicon-docker-plain' },
          { title: 'Express', icon: 'devicon-express-original' },
          { title: 'Git', icon: 'devicon-git-plain' },
          { title: 'gulp', icon: 'devicon-gulp-plain' },
          { title: 'HTML5', icon: 'devicon-html5-plain' },
          { title: 'JavaScript', icon: 'devicon-javascript-plain' },
          { title: 'Laravel', icon: 'devicon-laravel-plain' },
          { title: 'Nginx', icon: 'devicon-nginx-original' },
          { title: 'Node.js', icon: 'devicon-nodejs-plain' },
          { title: 'PHP', icon: 'devicon-php-plain' },
          { title: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
          { title: 'Python', icon: 'devicon-python-plain' },
          { title: 'React', icon: 'devicon-react-original' },
          { title: 'Redis', icon: 'devicon-redis-plain' },
          { title: 'Sass', icon: 'devicon-sass-original' },
          { title: 'Vue.js', icon: 'devicon-vuejs-plain' },
          { title: 'webpack', icon: 'devicon-webpack-plain' },
          { title: 'WordPress', icon: 'devicon-wordpress-plain' },
        ],
      },
    };
  },
  methods: {
    contactMe(ev) {
      ev.preventDefault();
      window.location.href = atob('bWFpbHRvOmtvbnRha3RAZWlrZWZva2VuLmRl');
    },
    scrollToAnchor(ev) {
      const href = ev.currentTarget.getAttribute('href');
      const target = href && href !== '#' ? document.querySelector(href) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        ev.preventDefault();
      } else if (href === '#') {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        ev.preventDefault();
      }
    },
  },
};
</script>
