import React from 'react';
import { Id } from '../../convex/_generated/dataModel';

interface Skill {
  _id: Id<"skills"> | string; // string for example data
  name: string;
  level?: number;
  category?: string;
}

const SkillItem: React.FC<{ skill: Skill, delay: number }> = ({ skill, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">{skill.name}</h3>
      {skill.category && <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{skill.category}</p>}
      {skill.level !== undefined && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-primary to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

const SkillsSection: React.FC<{ skills: Skill[] | null | undefined }> = ({ skills }) => {
  if (!skills || skills.length === 0) {
     return (
      <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">Loading skills or no skills to display yet.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
                <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Group skills by category
  const groupedSkills: Record<string, Skill[]> = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);


  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white animate-fadeIn">Skills & Expertise</h2>
        {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 
              className="text-2xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300 animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {categorySkills.map((skill, skillIndex) => (
                <SkillItem 
                  key={skill._id} 
                  skill={skill} 
                  delay={(categoryIndex * 0.2) + (skillIndex * 0.05)} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
