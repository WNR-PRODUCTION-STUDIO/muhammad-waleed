
import React from 'react';
import { ChevronDown, Download, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Muhammad{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Waleed
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl text-gray-300 font-light">
                <span className="text-blue-400">Embedded Systems Developer</span>
                <span className="text-gray-500"> | </span>
                <span className="text-green-400">C++ Programmer</span>
                <span className="text-gray-500"> | </span>
                <span className="text-purple-400">Designer</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Electrical Engineering student at FAST-NUCES transitioning to Computer Engineering, 
              with expertise in C++ programming and embedded systems. Passionate about innovating 
              in software-hardware integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/W-N-R"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Github size={24} className="text-gray-400 group-hover:text-blue-400" />
              </a>
              <a
                href="mailto:waleednaeem133@gmail.com"
                className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group"
              >
                <Mail size={24} className="text-gray-400 group-hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-2xl transform scale-110"></div>
              
              {/* Profile image container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/3c4324c2-3b8d-46c3-b1d6-5b9dd41b9555.png"
                  alt="Muhammad Waleed"
                  className="w-80 h-80 object-cover rounded-xl shadow-2xl"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
