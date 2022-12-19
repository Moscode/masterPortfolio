/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Moscode's Portfolio",
  description:
    "I'm an experienced software engineer with a keen interest in solving technical problems and building sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Odunosho Moses Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Odunosho Moses",
  logo_name: "Moscode",
  nickname: "Moscode",
  subTitle:
    "I'm an experienced software engineer with a keen interest in solving technical problems and building sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/14c_15gr4ZtlSyDgvG9CqquFRFQ9aSxzthyb2bik1Hhs/edit?usp=sharing",
  portfolio_repository: "https://github.com/Moscode/pair-programming-platform",
  githubProfile: "https://github.com/Moscode",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Moscode",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/odunoshomoses/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:odunoshomoses@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/moscode_sceptre",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, React-Redux, Tailwind, and Bootstrap",
        "⚡ Creating application backend in Node and Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Have Fundamental knowledge working with Netlify and Vercel cloud platforms",
        "⚡ Hosting and maintaining websites with Netlify",
        "⚡ Ability to debug or troubleshoot while deploying on netlify or Vercel",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    /*{
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },*/
  ],
};

// Education Page
const competitiveSites = {};

const degrees = {
  degrees: [
    {
      title: "University of Lagos",
      subtitle: "BSc in Applied Physics Electronics",
      logo_path: "university-of-lagos-logo.5782c188.png",
      alt_name: "Unilag",
      duration: "2019 - 2024",
      descriptions: [
        "⚡ I have studied subjects like  Algebra, Calculus, Quantum Mechanics, Fundamental of Algorithm etc.",
        "⚡  I am a member of a National Robotics communty where we build embed system projects coded in C++ on an arduno system.",
        "⚡ I am also a core member of Google Developer Student Club and a tutor on front - end technologies",
        /*  "⚡ Apart from this, I have done courses HTML, CSS, JavaScript, ReactJS, Firebase, NodeJS, Express, MongoDB, and AWS.",
        "⚡ I won the Penmen Publication award on my writing work demonstrating how ReactJS work under the hood.",*/
      ],
      website_link: "https://unilag.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to HTML5",
      subtitle: "Colleen van Lent, Ph.D.",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/VGM949VEXEDR",
      alt_name: "Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to CSS3",
      subtitle: "Colleen van Lent, Ph.D.",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/33BVFSPPRRPU",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Interactivity with JavaScript",
      subtitle: "Colleen van Lent, Ph.D.",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RBWQMHY94SJD",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Jobberman Soft Skills Course",
      subtitle: "Precious Imuwahen Ajoonu",
      logo_path: "Jobberman_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6N842GFRQGXU",
      alt_name: "Jobberman",
      color_code: "#1F70C199",
    },
    {
      title: "Social Ambassadorship Certificate",
      subtitle: "Ustacky",
      logo_path: "Ustacky.png",
      certificate_link:
        "https://drive.google.com/file/d/1JAd60RUexv36t7of5mz-m4BzliXpeq6s/view",
      alt_name: "Ustacky",
      color_code: "#D83B0199",
    },
    {
      title: "Best Male Graduating Learner",
      subtitle: "Penmen Publication",
      logo_path: "awardpenmen.png",
      certificate_link:
        "https://drive.google.com/file/d/1RaaFE3ivSnCHnOiz4slfoSVrJb0c1ID2/view",
      alt_name: "Penmen Publication",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have interned as a Back-End Engineer and I am currently working with a startup as a Front-End Engineer. I have also volunteered as an ambassador with one of the top edtech companies in my country. I love sharing knowledge no matter how little it is.",
  header_image_path: "experience.svg",
  sections: [
    /*{
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
      ],
    },*/
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Developer Intern (NodeJS)",
          company: "HNG Internship 8",
          company_url: "https://internship.zuri.team/",
          logo_path: "hng.jpg",
          duration: "Aug 2021 - Oct 2021",
          location: "Remote",
          description:
            "I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Social Ambassadorship",
          company: "Ustacky",
          company_url: "https://ustacky.com/ng",
          logo_path: "Ustacky.png",
          duration: "May 2021 - Aug 2021",
          location: "Remote",
          description:
            "I was helping to create a social media campaign with a team of over 100 people",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of variety of latest technology tools. My best experience is to create work on Frontend and Backend of Web Application using MERN Stack",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "moscode_profile.png",
    description:
      "I am available on both twitter and linkedin social media. You can message me, I will reply within 48 hours. I can help you with both Frontend and Backend Development (React, Node, Express, and MongoDB)",
  },
  /*blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Address",
    subtitle: "Lago, Nigeria.",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 9127538484",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
