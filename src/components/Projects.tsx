import React, { useState } from 'react';
import { Github, Settings, Code, Image, ArrowRight } from 'lucide-react';
import ledCubeImg from '../assets/led-cube-project.jpg';
import carShowroomImg from '../assets/car-showroom-system.jpg';
import logoCollectionImg from '../assets/logo-collection.jpg';
import webProjectsImg from '../assets/web-projects.jpg';
import arduinoAutomationImg from '../assets/arduino-automation.jpg';
import animationImg from '../assets/3d-animation.jpg';
const Projects = () => {
  const [filter, setFilter] = useState('All');
  const projects = [{
    title: '4x4x4 LED Cube Display',
    description: 'Arduino Nano-based LED cube with multiplexing control, featuring dynamic light patterns and animations.',
    image: ledCubeImg,
    technologies: ['Arduino', 'C++', 'Electronics', 'Multiplexing'],
    category: 'Hardware',
    github: 'https://github.com/WNR-Official/My-Electronics-Embedded-Systems-Project-Hub-/tree/main/4%20X%204%20X%204_MATRIX_Ardiuno%20nano%20project',
    features: ['64 individual LEDs', 'Custom animation patterns', 'Real-time control', 'Efficient multiplexing']
  }, {
    title: 'Car Showroom Sales System',
    description: 'Comprehensive C++ desktop application for managing car sales with modern UI and complete documentation.',
    image: carShowroomImg,
    technologies: ['C++', 'Qt', 'Database', 'OOP'],
    category: 'Software',
    github: 'https://github.com/WNR-Official/-Car-Showroom-Sales-System-C-',
    features: ['Inventory management', 'Sales tracking', 'Customer database', 'Financial reports']
  }, {
    title: 'Professional Logo Collection',
    description: 'Comprehensive branding and logo design portfolio showcasing various design styles and approaches.',
    image: logoCollectionImg,
    technologies: ['Illustrator', 'Photoshop', 'Branding', 'Typography'],
    category: 'Design',
    github: 'https://github.com/WNR-Official/logo-portfolio',
    features: ['Vector graphics', 'Brand identity', 'Color theory', 'Typography mastery']
  }, {
    title: 'Responsive Web Projects',
    description: 'Collection of static websites built with HTML/CSS and hosted on GitHub Pages with modern design.',
    image: webProjectsImg,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'Web',
    github: 'https://github.com/WNR-Official/web-projects',
    features: ['Mobile responsive', 'Modern CSS', 'Performance optimized', 'Cross-browser compatible']
  }, {
    title: 'Arduino Automation Hub',
    description: 'Smart home automation system using Arduino with sensor integration and mobile app control.',
    image: arduinoAutomationImg,
    technologies: ['Arduino', 'IoT', 'Sensors', 'Mobile App'],
    category: 'Hardware',
    github: 'https://github.com/WNR-Official/My-Electronics-Embedded-Systems-Project-Hub-',
    features: ['IoT connectivity', 'Sensor integration', 'Remote control', 'Data logging']
  }, {
    title: '3D Animation Showcase',
    description: 'Professional 3D animations and modeling projects created using Blender for various applications.',
    image: animationImg,
    technologies: ['Blender', '3D Modeling', 'Animation', 'Rendering'],
    category: 'Design',
    github: 'https://github.com/WNR-Official/3d-animation-portfolio',
    features: ['Realistic rendering', 'Complex animations', '3D modeling', 'Visual effects']
  }];
  const categories = ['All', 'Hardware', 'Software', 'Web', 'Design'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  const getCategoryIcon = category => {
    switch (category) {
      case 'Hardware':
        return <Settings className="w-4 h-4" />;
      case 'Software':
        return <Code className="w-4 h-4" />;
      case 'Design':
        return <Image className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };
  const getCategoryColor = category => {
    switch (category) {
      case 'Hardware':
        return 'from-green-500 to-green-600';
      case 'Software':
        return 'from-blue-500 to-blue-600';
      case 'Design':
        return 'from-purple-500 to-purple-600';
      case 'Web':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };
  return <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Innovative solutions spanning embedded systems, software development, and creative design
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${filter === category ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'}`}>
                {category !== 'All' && getCategoryIcon(category)}
                <span>{category}</span>
              </button>)}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 duration-300 flex items-center justify-center rounded-none px-0 mx-0 bg-gray-900">
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-medium flex items-center space-x-1`}>
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                    {project.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>)}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a href="https://github.com/WNR-Official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700">
            <Github className="w-6 h-6" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>;
};
export default Projects;