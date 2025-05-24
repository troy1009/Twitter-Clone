import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import Footer from './Footer';

// Example Data (will be replaced by Convex data)
const exampleHeroData = {
  name: "Imole Timileyin", // Updated Name
  title: "Full-Stack Web Developer",
  bio: "Passionate about creating beautiful and functional web applications. Turning ideas into reality with code.",
  profileImageUrl: "https://via.placeholder.com/150/007bff/ffffff?text=IT", // Updated placeholder initials
};

const exampleProjectsData = [
  {
    _id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart, and checkout.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    projectUrl: "#",
    repoUrl: "#",
    imageUrl: "https://via.placeholder.com/600x400/4CAF50/FFFFFF?Text=Project1",
    order: 1,
  },
  {
    _id: "proj2",
    title: "Task Management App",
    description: "A collaborative tool to manage tasks and projects effectively.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    projectUrl: "#",
    repoUrl: "#",
    imageUrl: "https://via.placeholder.com/600x400/FFC107/FFFFFF?Text=Project2",
    order: 2,
  },
  {
    _id: "proj3",
    title: "Portfolio Website",
    description: "This very portfolio, built with Convex and React.",
    technologies: ["React", "Convex", "TailwindCSS", "Vite"],
    projectUrl: "#",
    repoUrl: "#",
    imageUrl: "https://via.placeholder.com/600x400/2196F3/FFFFFF?Text=Project3",
    order: 3,
  },
];

const exampleSkillsData = [
  { _id: "skill1", name: "JavaScript", level: 90, category: "Frontend" },
  { _id: "skill2", name: "React", level: 95, category: "Frontend" },
  { _id: "skill3", name: "Node.js", level: 85, category: "Backend" },
  { _id: "skill4", name: "Python", level: 80, category: "Backend" },
  { _id: "skill5", name: "SQL", level: 75, category: "Database" },
  { _id: "skill6", name: "TailwindCSS", level: 90, category: "Frontend" },
  { _id: "skill7", name: "Convex", level: 80, category: "Backend" },
  { _id: "skill8", name: "Git", level: 90, category: "Tools" },
];


export default function PortfolioPage() {
  // Later, replace exampleData with useQuery(api.module.get)
  // const heroData = useQuery(api.hero.get) ?? exampleHeroData;
  // const projectsData = useQuery(api.projects.list) ?? exampleProjectsData;
  // const skillsData = useQuery(api.skills.list) ?? exampleSkillsData;

  // For now, using example data. I'll inform you that this is example data.
  const heroData = exampleHeroData;
  const projectsData = exampleProjectsData;
  const skillsData = exampleSkillsData;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection data={heroData} />
      <ProjectsSection projects={projectsData} />
      <SkillsSection skills={skillsData} />
      <Footer />
    </div>
  );
}
