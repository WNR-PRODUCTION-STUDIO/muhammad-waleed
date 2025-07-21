
import React from 'react';
import { Code, Settings, Image, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'C++ (OOP Expert)', level: 90 },
        { name: 'Object-Oriented Programming', level: 95 },
        { name: 'Arduino Programming', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Git/GitHub', level: 85 }
      ]
    },
    {
      title: 'Hardware & Electronics',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Circuit Simulation', level: 85 },
        { name: 'Proteus Design', level: 80 },
        { name: 'MATLAB', level: 75 },
        { name: 'Altium Designer', level: 70 },
        { name: 'Embedded Systems', level: 80 }
      ]
    },
    {
      title: 'Design & Creative',
      icon: <Image className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 80 },
        { name: 'Blender 3D', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'Canva', level: 90 }
      ]
    },
    {
      title: 'Tools & Software',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Excel Advanced', level: 90 },
        { name: 'Debugging', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Documentation', level: 85 },
        { name: 'Problem Solving', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across hardware, software, and design domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full animate-skill-bar`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
