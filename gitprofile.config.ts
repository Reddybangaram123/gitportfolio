// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Reddybangaram123',
  },

  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Reddybangaram123/REDDY', 'Reddybangaram123/What-app-timer'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Weather-app',
          description:
            'A simple Weather App built using ReactJS that fetches real-time weather data from an API based on user input. It displays temperature, humidity, and weather conditions in a clean, responsive UI.',
          imageUrl:
            'https://mohamedalosaili.github.io/weather-app/img/logo.png',
          link: 'https://weather-lake-nine.vercel.app/',
        },
        {
          title: 'Feedback-Form',
          description:
            'A responsive Feedback Form built using HTML, CSS, and JavaScript that collects user input like name, email, and message. It includes input validation and displays a success message upon submission.',
          imageUrl:
            'https://d1eipm3vz40hy0.cloudfront.net/images/AMER/meetingfeedbackformscreenshot.png',
          link: 'https://reddybangaram123.github.io/REDDY/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Gopal Reddy',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kummitha-gopal-reddy-237108277',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://www.example.com',
    phone: '',
    email: 'kummithagopalreddy854@gmail.com',
  },
  resume: {
    fileUrl:
      'https://t.me/gopalreddy854/60',
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Edubot',
      position: 'React Native Developer',
      from: 'September 2025',
      to: 'April 2025',
      companyLink: 'https://www.edubottechnologies.com/',
    },
    {
      company: 'Nyeras',
      position: 'BDA-Intern',
      from: 'January 2025',
      to: 'March 2025',
      companyLink: 'https://www.nyeras.com/',
    },
  ],
  certifications: [
    {
      name: 'Excelr',
      body: 'Testing Tools / Selenium with Java & Python /API Testing',
      year: 'November 2024',
      link: 'https://drive.google.com/file/d/121gQko223k6B7d1mmHUOiPmEi5fAwFc5/view?usp=drive_link',
    },
  ],
  educations: [
    {
      institution: 'A.M.Reddy Memorial College of Engineering and Technology',
      degree: 'Bachelor of Technology',
      from: '2021',
      to: '2025',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Reddybangaram123"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
