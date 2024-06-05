import React from 'react';

const logos = [
  {
    href: "https://aws.amazon.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "aws",
    text: "Amazon Web Services",
  },
  {
    href: "https://getbootstrap.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    alt: "bootstrap",
    text: "Bootstrap",
  },
  {
    href: "https://www.cprogramming.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    alt: "c",
    text: "C Programming",
  },
  {
    href: "https://www.w3schools.com/css/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3",
    text: "CSS3",
  },
  {
    href: "https://www.djangoproject.com/",
    src: "https://cdn.worldvectorlogo.com/logos/django.svg",
    alt: "django",
    text: "Django",
  },
  {
    href: "https://www.docker.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "docker",
    text: "Docker",
  },
  {
    href: "https://expressjs.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    alt: "express",
    text: "Express",
  },
  {
    href: "https://www.figma.com/",
    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    alt: "figma",
    text: "Figma",
  },
  {
    href: "https://git-scm.com/",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "git",
    text: "Git",
  },
  {
    href: "https://heroku.com",
    src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    alt: "heroku",
    text: "Heroku",
  },
  {
    href: "https://www.w3.org/html/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5",
    text: "HTML5",
  },
  {
    href: "https://www.java.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    alt: "java",
    text: "Java",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
    text: "JavaScript",
  },
  {
    href: "https://www.linux.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    alt: "linux",
    text: "Linux",
  },
  {
    href: "https://www.mongodb.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "mongodb",
    text: "MongoDB",
  },
  {
    href: "https://www.mysql.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    alt: "mysql",
    text: "MySQL",
  },
  {
    href: "https://nextjs.org/",
    src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    alt: "nextjs",
    text: "Next.js",
  },
  {
    href: "https://nodejs.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs",
    text: "Node.js",
  },
  {
    href: "https://www.postgresql.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    alt: "postgresql",
    text: "PostgreSQL",
  },
  {
    href: "https://postman.com",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    alt: "postman",
    text: "Postman",
  },
  {
    href: "https://www.python.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    alt: "python",
    text: "Python",
  },
  {
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react",
    text: "React",
  },
  {
    href: "https://redux.js.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    alt: "redux",
    text: "Redux",
  },
  {
    href: "https://tailwindcss.com/",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    alt: "tailwind",
    text: "Tailwind CSS",
  },
];

const LogoGroup = () => {
  return (
    <div className="flex flex-wrap p-2 space-x-2 bg-gradient-to-b from-pink-200 via-pink-300 to-purple-300 rounded-md">
      {logos.map((logo) => (
        <div className="group relative ml-2" key={logo.alt}>
          <a href={logo.href} target="_blank" rel="noreferrer">
            <img
              src={logo.src}
              alt={logo.alt}
              className="m-2 w-16 h-16 transition-transform duration-300 hover:scale-150"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 w-32 p-2 text-center bg-gray-800 text-white text-s rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-sans">
              {logo.text}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default LogoGroup;
