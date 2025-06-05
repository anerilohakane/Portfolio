'use client';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Smart-Dairy Mobile Application',
    description: 'Designed and developed a mobile app to streamline the ordering and management of dairy products. Sathes Dairy is a farm-to-door mobile app I designed and developed to digitize dairy ordering for local farmers and consumers.',
    technologies: ['React Native', 'Next.js', 'UI/UX'],
    figmaLink: 'https://www.figma.com/design/hTMFaPMeJ2125ib8eNJCRB/Sathe_Dairy?node-id=0-1&p=f&t=dUPeLva2Vjzfvf1I-0',
    githubLink: 'https://github.com/VaijayantaMengade/SatheDairy-Admin-Dashboard',
    highlights: [
      'Incorporated reusable components for consistent design',
      'Implemented user authentication and product browsing',
      'Enhanced customer experience with real-time order tracking',
    ],
  },
  {
    title: 'DokumentGuru',
    description: 'A Comprehensive document solutions designed to simplify your legal and administrative processes.',
    technologies: ['React.js', 'Next.js', 'UI/UX'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/SameerDelXN/E-Seva-Management-System-Frontend' },
      { label: 'Backend', url: 'https://github.com/SameerDelXN/E-Seva-Management-Backend' },
    ],
    figmaLink: 'https://www.figma.com/design/fajgQdpatQzPlwHp1dNe6H/DokumentGURU?node-id=0-1&p=f&t=2O0PibzGeDOUFVuW-0',
    deployedLink: 'https://dokument-guru.vercel.app/',
    highlights: [
      'Real-time data synchronization for Document Verifications',
      'Multi-language support and offline functionality',
      'Secure payment processing integration',
    ],
  },
  {
    title: 'Gildardo Rochin',
    description: 'Professional landscaping and lawn care services, From regular maintenance to complete redesigns.',
    technologies: ['React.js', 'Next.js', 'UI/'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/Maheshkadam-Delxn/Booking' },
      { label: 'Backend', url: 'https://github.com/Abhijeet-Ghode-DelXN/backend-rochin-landscaping' },
    ],
    figmaLink: 'https://www.figma.com/design/khVCfS8ixXLHzJYUqH2TY7/Landsacping-business?node-id=0-1&p=f&t=Rjri2I8LOGX',
    deployedLink: 'https://booking-one-omega.vercel.app/',
    highlights: [
      'Personalized Plant Dashboard',
      'Smart Care Scheduler',
      'Secure payment processing integration',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex"
            >
              <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg h-full flex flex-col flex-grow w-full transition-all duration-300 hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20 border border-transparent hover:border-primary-200 dark:hover:border-slate-700">
                <div class="relative z-10 flex flex-col flex-grow">
                  <h3 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 dark:from-primary-400 dark:via-accent-400 dark:to-primary-400 animate-gradient-text">
                    {project.title}
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-primary-300 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Key Features
                    </h4>
                    <ul class="space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary-500 dark:marker:text-primary-400">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg class="w-4 h-4 mr-2 text-primary-500 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(project.figmaLink || project.githubLink || (project.githubLinks && project.githubLinks.length > 0) || project.deployedLink) && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-3">
                      {project.figmaLink && (
                        <a
                          href={project.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 dark:bg-slate-600 dark:hover:bg-slate-500 transition-colors duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 3.293A1 1 0 0016 3H4a1 1 0 00-.951.69l-2 6A1 1 0 002 11h16a1 1 0 00.951-1.31l-2-6a1 1 0 00-.658-.69zM4.764 9L6 5h8l1.236 4H4.764z"/><path d="M2 13h16v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3z"/></svg>
                          View Figma Design
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 dark:bg-slate-600 dark:hover:bg-slate-500 transition-colors duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                          View on GitHub
                        </a>
                      )}
                      {project.githubLinks && project.githubLinks.map(link => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 dark:bg-slate-600 dark:hover:bg-slate-500 transition-colors duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                          View {link.label} on GitHub
                        </a>
                      ))}
                      {project.deployedLink && (
                        <a
                          href={project.deployedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-3"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                          View Live Site
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 