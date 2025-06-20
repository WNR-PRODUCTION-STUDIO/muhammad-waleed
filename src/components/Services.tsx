
import React from 'react';
import { Settings, Code, Image, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Embedded Systems Prototyping',
      description: 'Custom Arduino-based solutions for automation, IoT devices, and smart systems with complete hardware-software integration.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Arduino & Microcontroller Programming',
        'Circuit Design & Simulation',
        'Sensor Integration & IoT',
        'Custom PCB Design',
        'Real-time System Development'
      ],
      technologies: ['Arduino', 'C++', 'Proteus', 'Altium', 'MATLAB']
    },
    {
      title: 'Web Design (Front-End)',
      description: 'Modern, responsive websites built with clean code, optimized performance, and engaging user experiences.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      features: [
        'Responsive Web Design',
        'Modern CSS & JavaScript',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'GitHub Pages Deployment'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design']
    },
    {
      title: 'Logo Design & Branding',
      description: 'Professional brand identity solutions including logo design, visual branding, and complete brand packages.',
      icon: <Image className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Custom Logo Creation',
        'Brand Identity Development',
        'Vector Graphics Design',
        'Color Palette & Typography',
        'Brand Guidelines'
      ],
      technologies: ['Illustrator', 'Photoshop', 'Figma', 'Canva', 'Typography']
    },
    {
      title: '3D Animation (Blender)',
      description: 'Professional 3D modeling, animation, and rendering services for product visualization and creative projects.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      features: [
        '3D Modeling & Sculpting',
        'Product Visualization',
        'Animation & Rigging',
        'Realistic Rendering',
        'Visual Effects'
      ],
      technologies: ['Blender', '3D Modeling', 'Animation', 'Rendering', 'VFX']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions from embedded systems to creative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">What I Offer:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm border border-gray-600 hover:border-blue-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="#contact"
                  className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with innovative technology solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Let's Collaborate</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
