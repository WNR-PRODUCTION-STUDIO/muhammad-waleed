
import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & Developer',
      company: 'WNR Production Studio',
      period: 'Jan 2023 – Present',
      location: 'Lahore, Pakistan',
      type: 'Entrepreneurship',
      responsibilities: [
        'Developed Arduino-based automation prototypes and embedded systems',
        'Created car showroom management system using C++ with modern UI',
        'Built full-stack websites and web applications',
        '3D animation and modeling using Blender for various projects',
        'Managed complete project lifecycle from conception to deployment'
      ],
      technologies: ['C++', 'Arduino', 'HTML/CSS', 'JavaScript', 'Blender', 'Git'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Accounts & Production Manager',
      company: 'Vintex Traders',
      period: 'Aug 2018 – Sep 2022',
      location: 'Lahore, Pakistan',
      type: 'Management',
      responsibilities: [
        'Developed cost modeling systems and financial analysis tools',
        'Automated Excel workflows for improved efficiency',
        'Contributed to web design and digital presence initiatives',
        'Managed production schedules and inventory management',
        'Streamlined business processes through technology integration'
      ],
      technologies: ['Excel VBA', 'Financial Modeling', 'Web Design', 'Process Automation'],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building innovative solutions through hands-on experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.type !== 'Entrepreneurship' && (
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">{exp.type}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
