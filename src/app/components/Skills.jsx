'use client';
import { motion } from 'framer-motion';

const skillsData = {
  'Programming Languages': ['Java', 'JavaScript'],
  'Web Development': ['HTML', 'CSS', 'Tailwind CSS'],
  'Frameworks & Libraries': ['React Native', 'Bootstrap'],
  'Design': ['UI/UX Designing'],
  'Version Control': ['Git', 'GitHub'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 dark:from-primary-400 dark:via-accent-400 dark:to-primary-400 animate-gradient-text">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:bg-primary-200 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-0.5 transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 