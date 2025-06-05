'use client';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: 'B.E. Information Technology',
      institution: 'Pune University',
      year: '2023',
      score: '8.88 CGPA',
    },
    {
      degree: 'XII (Mathematics)',
      institution: 'Maharashtra State Board',
      year: '2021',
      score: '89.17%',
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate software developer with a focus on creating impactful solutions and
            maintaining continuous improvement through innovative problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a dedicated software developer with experience in web and mobile development.
              My focus is on creating responsive and user-friendly applications using modern
              technologies. I am passionate about learning new technologies and implementing
              best practices in software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-8 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{edu.degree}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end text-sm text-accent-500 dark:text-accent-400">
                        <span>{edu.year}</span>
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;