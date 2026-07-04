import firebaseLogo from '../assets/svg/firebase.svg';
import gitLogo from '../assets/svg/git.svg';
import githubLogo from '../assets/svg/github.svg';
import jwtlogo from '../assets/svg/jwt.svg';
import htmlLogo from '../assets/svg/html.svg';
import cssLogo from '../assets/svg/css.svg';
import javaLogo from '../assets/svg/java.svg';
import javascriptLogo from '../assets/svg/javascript.svg';
import typescriptLogo from '../assets/svg/typescript.svg';
import mongodbLogo from '../assets/svg/mongodb.svg';
import mysqlLogo from '../assets/svg/mysql.svg';
import socketioLogo from '../assets/svg/socketio.svg';
import netlifyLogo from '../assets/svg/netlify.svg';
import nodeLogo from '../assets/svg/node.svg';
import postmanLogo from '../assets/svg/postman.svg';
import cloudLogo from '../assets/svg/cloud.svg';
import groqLogo from '../assets/svg/groq.svg';
import pythonLogo from '../assets/svg/python.svg';
import reactjsLogo from '../assets/svg/reactjs.svg';
import bootstrapLogo from '../assets/svg/bootstrap.svg';
import figmaLogo from '../assets/svg/figma.svg';
import nextjsLogo from '../assets/svg/nextjs.svg';
import expressjsLogo from '../assets/svg/expressjs.svg';
import framerLogo from '../assets/svg/framermotion.svg';
import gsapLogo from '../assets/svg/gsap.svg';
import postgreLogo from '../assets/svg/postgresql.svg';
import flasklogo from '../assets/svg/flask.svg';
import ffmpeglogo from '../assets/svg/ffmpeg.svg';
import apilogo from '../assets/svg/api.svg';
import tailwindLogo from '../assets/svg/tailwind.svg';
import npmLogo from '../assets/svg/npm.svg';
import vercelLogo from '../assets/svg/vercel.svg';
import renderLogo from '../assets/svg/render.svg';
import vscodeLogo from '../assets/svg/vscode.svg';
import codeLogo from '../assets/svg/code.svg';
import fastapiLogo from '../assets/svg/fastapi.svg';
import prismaLogo from '../assets/svg/prisma.svg';
import redisLogo from '../assets/svg/redis.svg';

export const techStack = [
  { name: 'React', logo: reactjsLogo },
  { name: 'Next.js', logo: nextjsLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'BootStrap', logo: bootstrapLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Express.js', logo: expressjsLogo },
  { name: 'Cloud', logo: cloudLogo },
  { name: 'Groq AI', logo: groqLogo },
  { name: 'FastAPI', logo: fastapiLogo },
  { name: 'Prisma', logo: prismaLogo },
  { name: 'Redis', logo: redisLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'PostgreSQL', logo: postgreLogo },
  { name: 'Firebase', logo: firebaseLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Framer Motion', logo: framerLogo },
  { name: 'GSAP', logo: gsapLogo },
  { name: 'Postman', logo: postmanLogo },
  { name: 'API', logo: apilogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'npm', logo: npmLogo },
  { name: 'VS Code', logo: vscodeLogo },
  { name: 'Vercel', logo: vercelLogo },
  { name: 'Render', logo: renderLogo },
  { name: 'Netlify', logo: netlifyLogo },
  { name: 'JWT', logo: jwtlogo },
  { name: 'Code', logo: codeLogo },
];

export const techMap = {
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: javascriptLogo,
  TypeScript: typescriptLogo,
  JWT: jwtlogo,
  React: reactjsLogo,
  NextJS: nextjsLogo,
  'Next.js': nextjsLogo,
  'Node.js': nodeLogo,
  'Express.js': expressjsLogo,
  'Flask': flasklogo,
  Python: pythonLogo,
  Java: javaLogo,
  'Socket.IO': socketioLogo,
  Tailwind: tailwindLogo,
  'Framer Motion': framerLogo,
  GSAP: gsapLogo,
  MongoDB: mongodbLogo,
  MySQL: mysqlLogo,
  PostgreSQL: postgreLogo,
  Cloud: cloudLogo,
  'Google OAuth': cloudLogo,
  'Groq AI': groqLogo,
  Firebase: firebaseLogo,
  Git: gitLogo,
  ffmpeg: ffmpeglogo,
  'FFmpeg.wasm': ffmpeglogo,
  GitHub: githubLogo,
  API: apilogo,
  npm: npmLogo,
  'VS Code': vscodeLogo,
  Postman: postmanLogo,
  Vercel: vercelLogo,
  Render: renderLogo,
  Netlify: netlifyLogo,
  ExcelJS: codeLogo,
  Selenium: codeLogo,
  'Monaco Editor': codeLogo,
  'TMDB API': apilogo,
  'News API': apilogo,
  'OpenWeatherMap API': apilogo,
  BootStrap: bootstrapLogo,
  FastAPI: fastapiLogo,
  Prisma: prismaLogo,
  Redis: redisLogo,
};

export const techCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Framer Motion', logo: framerLogo },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'Flask', logo: flasklogo },
    ],
  },
  {
    name: 'Data',
    items: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Redis', logo: redisLogo },
      { name: 'Prisma', logo: prismaLogo },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'npm', logo: npmLogo },
    ],
  },
];