
import React from 'react';
import { Calendar, MapPin, Code, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2024 – Present',
      title: 'BSc Electrical Engineering',
      institution: 'FAST-NUCES',
      description: 'Specialized in Computer Engineering with hands-on experience in Proteus, MATLAB, and Altium Designer.',
      icon: <Code className="w-6 h-6" />
    },
    {
      period: '2022 – 2024',
      title: 'FSC (Pre-Engineering)',
      institution: 'KIPS College Lahore',
      description: 'Focused on mathematics and physics with strong analytical foundation.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      period: '2020 – 2022',
      title: 'Matriculation',
      institution: 'Lahore Board',
      description: 'Completed secondary education with distinction in science subjects.',
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about bridging the gap between hardware and software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">672 Johar Town, F2 St #6, Lahore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Electrical Engineering Student</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Career Goal</h3>
              <p className="text-gray-300 leading-relaxed">
                "To integrate software and hardware creatively to solve real-world problems. 
                I aim to contribute to innovative technologies that make a meaningful impact 
                on society through efficient and elegant engineering solutions."
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Educational Background</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                        <span className="text-sm text-blue-400 font-mono">{item.period}</span>
                      </div>
                      <p className="text-green-400 font-medium mb-2">{item.institution}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
