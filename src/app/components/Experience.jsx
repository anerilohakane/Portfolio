'use client';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: 'DeXN Technologies Pvt Ltd',
    position: 'Software Developer Intern',
    period: 'Dec 2024 - Present',
    responsibilities: [
      'Developing responsive and visually appealing user interfaces with Tailwind CSS and React Native',
      'Creating reusable components for consistent design and functionality across devices',
      'Collaborating with product managers and developers to define and implement innovative solutions for product direction, visuals, and experience.',
      'Executing all visual design stages from concept to final hand-off to engineering.',
      'Creating wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas.',
      'Testing and debugging to improve application performance and user experience',
      'Staying updated on mobile development trends to deliver high-quality solutions',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 dark:from-primary-400 dark:via-accent-400 dark:to-primary-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-stretch">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full md:max-w-2xl bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-800/80 p-6 sm:p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-primary-500/30 dark:hover:shadow-primary-400/30 border border-gray-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-500 hover:-translate-y-1.5 hover:scale-[1.02] flex flex-col"
            >
              <div className="pb-3 mb-4 border-b-2 border-primary-200 dark:border-primary-500/40">
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 dark:from-primary-400 dark:via-accent-400 dark:to-primary-400 animate-gradient-text">{experience.company}</h3>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">{experience.position}</p>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider text-primary-700 bg-primary-100 rounded-full dark:bg-primary-500/20 dark:text-primary-300">
                  {experience.period}
                </span>
              </div>
              <ul className="space-y-2.5 text-gray-600 dark:text-gray-300 text-sm sm:text-base flex-grow">
                {experience.responsibilities.map((responsibility, idx) => (
                  <motion.li 
                    key={idx} 
                    className={`flex items-start`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + 0.2 + (idx * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <svg className={`w-4 h-4 mr-2.5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5 sm:mt-1`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
