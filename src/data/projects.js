import biitConnectImage from '../assets/project/biitconnect.png';
import expTracker from '../assets/project/expensetracker.png';
import userManager from '../assets/project/usermang.png';
import weatherApp from '../assets/project/weatherapp.png';

export const PROJECTS = [
  {
    id: 1,
    title: 'BIIT Connect',
    subtitle: 'Final Year Project',
    description:
      'A campus-wide communication platform supporting 1,000 students, cutting manual information distribution time by 80%. Includes real-time messaging, role-based access for announcements, timetables, seating plans, evaluations, notes, assignments, and quizzes.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    image: biitConnectImage,
    demoUrl: null,
    repoUrl: null,
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'Expense Tracker',
    subtitle: 'Full-Stack Financial Management Platform',
    description:
      'A personal finance app with secure authentication, income/expense tracking, and real-time financial summaries. RESTful backend deployed on Render, React frontend on Vercel, using Context API and Reducers for global state.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Context API'],
    image: expTracker,
    demoUrl: 'https://expense-tracker-app-pink-gamma.vercel.app/',
    repoUrl: null,
    category: 'Full-Stack',
  },
  {
    id: 3,
    title: "User's Task Management System",
    subtitle: 'Full-Stack Task & User Management',
    description:
      'A responsive task and user management platform with secure role-based authentication, persistent storage, and full CRUD workflows. Clean dark-mode UI built with React, Tailwind CSS v4, and React Router, including interactive data tables and advanced form validation.',
    tech: ['React.js', 'Tailwind CSS v4', 'React Router', 'Node.js'],
    image: userManager,
    demoUrl: 'https://user-task-manager-cyan.vercel.app/',
    repoUrl: null,
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Weather',
    subtitle: 'Weather Forecast Web App',
    description:
      'A weather app with current conditions, a 24-hour forecast graph, and a 5-day outlook, driven by the OpenWeatherMap API. Features debounced city search with geocoding autocomplete, browser geolocation with reverse geocoding, and a weather-themed UI that dynamically shifts its background and icon set based on live conditions and time of day.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API'],
    image: weatherApp,
    demoUrl: 'https://my-weather-app-31.vercel.app/',
    repoUrl: null,
    category: 'Frontend',
  },
];