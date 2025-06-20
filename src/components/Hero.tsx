
import React from 'react';
import { ChevronDown, Download, Github, Mail } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{
        animationDelay: '1.5s'
      }}></div>
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
                <span className="text-blue-400">Founder of WNR Productions Studio</span>
                <span className="text-gray-500"> | </span>
                <span className="text-green-400">Embedded Systems Developer</span>
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
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                View Portfolio
              </a>
              <a href="#contact" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/W-N-R" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group">
                <Github size={24} className="text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="mailto:waleednaeem133@gmail.com" className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group">
                <Mail size={24} className="text-gray-400 group-hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Right content - Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end rounded-lg">
            <div className="relative w-96 h-96">
              {/* Multiple glow layers for enhanced lighting */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{
              animationDelay: '0.5s'
            }}></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-green-500/25 to-cyan-500/25 rounded-full blur-xl animate-pulse" style={{
              animationDelay: '1s'
            }}></div>
              
              {/* Rim lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/15 to-transparent rounded-full"></div>
              
              {/* Profile image container with enhanced lighting */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full border-2 border-gray-700/50 backdrop-blur-sm overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-2 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full"></div>
                
                {/* Profile image */}
                <img src="https://i.postimg.cc/jjQHTq2p/Black.png" alt="Muhammad Waleed - Founder of WNR Productions Studio" className="w-full h-full object-cover rounded-full relative z-10" />
                
                {/* Highlight overlay for professional lighting */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-full"></div>
                <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-blue-400/15 to-transparent rounded-full"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-bounce shadow-lg shadow-green-500/50" style={{
              animationDelay: '0.5s'
            }}></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>;
};
export default Hero;
