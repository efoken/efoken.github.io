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
            Vahrenwalder Str. 115 · Hanover, DE 20165 · (1578) 5916655 ·
            <a href="mailto:kontakt@eikefoken.de">kontakt@eikefoken.de</a>
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
              aria-label="Xing"
            >
              <i
                class="ion ion-logo-xing"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://github.com/efoken"
              aria-label="GitHub"
            >
              <i
                class="ion ion-logo-github"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.facebook.com/eike.foken"
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

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Senior Web Developer</h3>
              <div class="subheading mb-3">Cybay New Media GmbH, Hanover</div>
              <p>
                In the agency I am dealing with the creation of websites, further development of
                existing websites, as well as the care of existing customers. In addition to PHP,
                Laravel and WordPress, the technologies used include JavaScript, React for the
                development of Progressive Web Apps and React Native for mobile app development.
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">January 2018 - Present</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Software Developer</h3>
              <div class="subheading mb-3">ABIAN GmbH, Hanover</div>
              <p>
                Originally hired as a developer for web-based software (e.g. for the Deutsche Messe
                AG and CEBIT), over time I took over more and more tasks and was responsible for the
                implementation of responsive websites and mobile apps, from conception to
                development towards implementation with PHP, JavaScript and CSS with well known
                frameworks like Laravel, Angular, React and Bootstrap.
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">January 2014 - December 2017</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Junior Web Developer</h3>
              <div class="subheading mb-3">eMedienservice Nord, Oldenburg</div>
              <p>
                An agency, a subsidiary of the Nordwest-Zeitung, from which I was taken over after
                working at QP media GmbH. In addition to the independent development of responsive
                websites and WordPress theming, my activities also included the programming of
                <a
                  href="https://www.nwzonline.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.nwzonline.de
                </a>
                with Java.
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2013 - December 2013</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Junior Web Developer</h3>
              <div class="subheading mb-3">QP media GmbH, Oldenburg</div>
              <p>
                A small startup, sponsored by Nordwest-Zeitung, which dealt with couponing and
                printing vouchers. From the first day on I accompanied the startup, developed a
                well-known, regional coupon platform. Programming languages used included Python
                (with Django) and JavaScript.
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">October 2011 - July 2013</span>
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

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Hochschule Emden/Leer</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 2.31</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2008 - March 2012</span>
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
            <li class="list-inline-item">
              <i
                class="devicon-angularjs-plain"
                aria-label="Angular"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-amazonwebservices-original"
                aria-label="Amazon Web Services"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-atom-original"
                aria-label="Atom"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-babel-plain"
                aria-label="Babel"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-bootstrap-plain"
                aria-label="Bootstrap"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-css3-plain"
                aria-label="CSS3"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-django-plain"
                aria-label="Django"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-docker-plain"
                aria-label="Docker"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-express-original"
                aria-label="Express"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-html5-plain"
                aria-label="HTML5"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-git-plain"
                aria-label="Git"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-gulp-plain"
                aria-label="gulp"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-javascript-plain"
                aria-label="JavaScript"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-laravel-plain"
                aria-label="Laravel"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-nginx-original"
                aria-label="Nginx"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-nodejs-plain"
                aria-label="Node.js"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-php-plain"
                aria-label="PHP"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-postgresql-plain"
                aria-label="PostgreSQL"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-python-plain"
                aria-label="Python"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-react-original"
                aria-label="React"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-redis-plain"
                aria-label="Redis"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-sass-original"
                aria-label="Sass"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-vuejs-plain"
                aria-label="Vue.js"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-webpack-plain"
                aria-label="webpack"
              />
            </li>
            <li class="list-inline-item">
              <i
                class="devicon-wordpress-plain"
                aria-label="WordPress"
              />
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0 list-unstyled">
            <li>
              <i class="fa-li ion ion-md-checkmark" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <i class="fa-li ion ion-md-checkmark" />
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i class="fa-li ion ion-md-checkmark" />
              Cross Functional Teams
            </li>
            <li>
              <i class="fa-li ion ion-md-checkmark" />
              Agile Development, Scrum &amp; Kanban
            </li>
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
