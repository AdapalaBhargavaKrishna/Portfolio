export const projectData = [
  {
    title: "StreamSync – Watch Together, From Anywhere",
    description:
      "Built a real-time co-watching platform using Socket.IO to synchronize YouTube playback state across multiple clients with sub-second latency. Engineered room-based session management where a host controls play/pause/seek events that broadcast to all connected peers. Handled edge cases like late-joiners syncing to current timestamp, user disconnection cleanup, and chat message ordering. Deployed backend on a persistent Node.js server to maintain WebSocket connections across sessions.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/streamsync.png",
    live: "https://streamsyncc.vercel.app",
    code: "https://github.com/AdapalaBhargavaKrishna/StreamSync",
    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "MongoDB",
      "API",
      "Vercel",
    ],
    video: "https://www.youtube.com/embed/QucA4W4RBL0?si=RT7TAq605ry0vwlz",
  },
  {
    title: "AutoTube – AI-Powered Learning Assistant",
    description:
      "Integrated Groq AI's inference API to generate structured summaries and Q&A pairs from YouTube video transcripts. Built a Node.js/Express backend that handles transcript extraction, sends prompts to the Groq API, and returns structured learning content. Used Firebase for user authentication and MongoDB to persist watch history and generated summaries per user. Designed the prompt pipeline to produce consistent, parseable output for rendering in the frontend dashboard.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/autotube.png",
    live: "https://autotubeai.netlify.app",
    code: "https://github.com/AdapalaBhargavaKrishna/AutoTube",
    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "API",
      "Groq AI",
      "Netlify",
    ],
    video: "",
  },
  {
    title: "InternTrack – Internship Management System",
    description:
      "Designed a role-based access control system with JWT authentication separating student and faculty permissions. Students submit and manage internship records through a protected dashboard; faculty review, approve, or reject submissions via a separate admin interface. Built an automated Excel report generator using ExcelJS that compiles all student internship data into formatted spreadsheets on demand — replacing a fully manual process. Modeled relational-style data in MongoDB with references between users, submissions, and review states.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/InternTrack.png",
    live: "https://interntrack-rust.vercel.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/InternTrack",
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "ExcelJS",
      "Vercel",
      "Framer Motion",
    ],
  },
  {
    title: "AttendEz – College Management System",
    description:
      "Built a multi-role college management system with separate student and faculty views. Faculty can record attendance, post announcements, and manage schedules; students see their attendance percentage, academic reports, and fee status in a unified dashboard. Used Express.js REST APIs to handle all data operations against a MongoDB database, with session-based auth to protect routes by role. Vanilla JS frontend with no framework overhead, keeping bundle size minimal.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/attendz.png",
    live: "https://adapalabhargavakrishna.github.io/AttendEz/index.html",
    code: "https://github.com/AdapalaBhargavaKrishna/AttendEz",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GSAP",
    ],
    video: "https://www.youtube.com/embed/FBZh1hZPT3U?si=ZJuNoNHLfk8oQNEO",
  },
  {
    title: "Attendance Calculator – Automated Web App",
    description:
      "Built a full-stack attendance prediction tool with a Selenium-based scraper on the backend that fetches live attendance data from the college portal using a student's roll number. The Express server runs the Selenium script in a headless browser, parses the HTML response, and returns structured attendance data to the frontend. The React client calculates how many classes a student can skip or must attend to hit a target percentage, handling edge cases like already-below-threshold scenarios.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/attendancecalculator.png",
    live: "https://attendance-calculate.vercel.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Attendance-Calculator",
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Selenium",
      "Framer Motion",
    ],
    video: "https://www.youtube.com/embed/oa77CjwTnxE?si=jeu5otIbgyEE4-SC",
  },
  {
    title: "FileSwitch – In-Browser File Converter",
    description:
      "Leveraged FFmpeg.wasm to run a full media conversion pipeline entirely in the browser with no server required. Users drag and drop image, audio, or video files; the app detects the format, offers compatible output options, and processes the conversion client-side using WebAssembly. Handled large file performance by running FFmpeg in a Web Worker to prevent UI thread blocking during heavy encoding tasks.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/fileswitch.png",
    live: "https://fileswitch.vercel.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/FileSwitch",
    tech: ["React", "Tailwind", "Framer Motion", "FFmpeg.wasm", "Vercel"],
  },
  {
    title: "SafePass – Password Vault",
    description:
      "Built a credential manager with encrypted storage using a Node.js/Express backend and MongoDB. Passwords are encrypted before being written to the database and decrypted server-side on retrieval, ensuring plaintext credentials are never persisted. The React frontend provides copy-to-clipboard, show/hide toggles, and credential editing with optimistic UI updates.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/safepass.png",
    live: "https://safepassx.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/PassWord%20Manager",
    tech: ["React", "Tailwind", "MongoDB", "Node.js", "Express.js", "GSAP"],
  },
  {
    title: "Get Me a Coffee – Creator Donation Platform",
    description:
      "Built a Next.js donation platform with server-side rendering for fast initial page loads and SEO. MongoDB stores creator profiles and donation records; donors can leave messages alongside contributions. Used Next.js API routes as a lightweight backend, avoiding a separate Express server. GSAP animations enhance the landing experience without impacting core Web Vitals.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/getmeacoffee.png",
    live: "https://get-me-a-coffee-rho.vercel.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/get-me-a-coffee",
    tech: ["Next.js", "React", "Tailwind", "MongoDB", "GSAP"],
    video: "https://www.youtube.com/embed/I5ieo1I5Lx8?si=2fSblcU-sm4osa_U",
  },
  {
    title: "MovieShelf – Watchlist & Reviews",
    description:
      "Integrated the TMDB API to fetch movie metadata, trailers, cast details, and ratings. Firebase Auth handles user sign-in with persistent watchlist storage per user in Firestore. Built a search flow with debounced API calls to reduce unnecessary requests, and a filtering system for genre and rating-based browsing.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/movieshelf.png",
    live: "https://movieshelf-bk.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/MovieShelf",
    tech: ["React", "Tailwind", "GSAP", "TMDB API", "Firebase"],
  },
  {
    title: "NewzX – Personalized News Feed",
    description:
      "Consumed a third-party news API to deliver categorized headlines with topic filtering and keyword search. Implemented client-side pagination and loading state management to handle variable API response times gracefully. Responsive layout adapts across mobile and desktop with a card-based feed design.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/newzx.png",
    live: "https://newzzx.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/NewzX",
    tech: ["React", "Tailwind", "Framer Motion", "News API", "Netlify"],
  },
  {
    title: "RecipeMate – Recipe Discovery Platform",
    description:
      "Built a recipe browsing app consuming a food API to display ingredients, step-by-step instructions, and embedded tutorial videos. Implemented search with debouncing and category-based filtering. Fully responsive layout with smooth page transitions.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/RecipeMate.png",
    live: "https://recipemate-bk.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/RecipeMate",
    tech: ["React", "Tailwind", "GSAP", "API", "Netlify"],
  },
  {
    title: "WeatherNow – Global Weather App",
    description:
      "Integrated the OpenWeatherMap API to display current conditions and 5-day forecasts including temperature, wind speed, humidity, and sunrise/sunset times. Handles geolocation-based auto-detection and manual city search with error states for invalid queries.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/Weather.png",
    live: "https://adapalabhargavakrishna.github.io/Web-Development/Weather/index.html",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/Weather",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "GSAP"],
  },
  {
    title: "TaskFocus – Productivity Tracker",
    description:
      "A minimalist task manager with status tracking (todo, in-progress, done), local persistence, and priority tagging. Focused on clean UX with keyboard-accessible interactions and smooth GSAP state transitions.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/Todo.png",
    live: "https://taskfocus-bk.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/Todo-List",
    tech: ["React", "Tailwind", "GSAP", "Netlify"],
  },
  {
    title: "Class Performance Dashboard",
    description:
      "A static data visualization dashboard displaying student scores, attendance, and extracurricular data using Chart.js-style HTML/CSS/JS charts. Built without any framework — pure vanilla JS DOM manipulation for rendering dynamic tables and interactive comparisons.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/class.png",
    live: "https://adapalabhargavakrishna.github.io/Web-Development/Class%20Performance%20dashboard/class.html",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/Class%20Performance%20dashboard",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "X Clone – Twitter UI Rebuild",
    description:
      "A frontend-only UI clone of X (Twitter) built to practice responsive layout and component structure. Replicates the sidebar, post feed, and trending panel using Tailwind utility classes and GSAP micro-animations.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/X.png",
    live: "https://adapalabhargavakrishna.github.io/Web-Development/X/index.html",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/X",
    tech: ["HTML", "Tailwind", "GSAP"],
  },
  {
    title: "Spotify Clone – Web Player UI",
    description:
      "A static frontend replica of Spotify's web player built to practice CSS layout and audio controls. Implements a functional music playbar with play/pause and track progress using vanilla JS audio APIs.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/Spotify.png",
    live: "https://adapalabhargavakrishna.github.io/Web-Development/spotify/spotify.html",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/spotify",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
  },
  {
    title: "Netflix UI Clone",
    description:
      "A static HTML/CSS replica of the Netflix landing page built as an early CSS practice project. Demonstrates responsive grid layout, hover effects, and accurate recreation of the original design system.",
    image:
      "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/Netflix.png",
    live: "https://adapalabhargavakrishna.github.io/Web-Development/Netflix/Netflix.html",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/tree/main/Netflix",
    tech: ["HTML", "CSS"],
  },
];
