'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center pt-8 sm:pt-10 md:pt-12 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="absolute -top-10 -left-10 w-48 h-48 sm:-top-16 sm:-left-16 sm:w-60 sm:h-60 md:-top-20 md:-left-20 md:w-72 md:h-72 bg-primary-500/10 dark:bg-primary-400/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 sm:-bottom-16 sm:-right-16 sm:w-60 sm:h-60 md:-bottom-20 md:-right-20 md:w-72 md:h-72 bg-accent-500/10 dark:bg-accent-400/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 animate-gradient-text">Aneri Lohakane</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 font-light">
              Software Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Passionate about leveraging technical expertise to deliver impactful solutions while
              maintaining continuous improvement through innovative problem-solving approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 text-base sm:px-8 sm:text-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transform transition-all duration-300 w-full sm:w-auto"
              >
                Contact Me
              </button>
              <button
                onClick={() => setActiveSection('projects')}
                className="font-semibold rounded-lg px-6 py-3 text-base sm:px-8 sm:text-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5 transform w-full sm:w-auto"
              >
                View Projects
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full filter blur-3xl transform animate-pulse"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-full border-4 border-primary-200/50 dark:border-primary-700/50 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/Mehh.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 