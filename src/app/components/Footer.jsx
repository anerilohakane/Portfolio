const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* <div className="flex space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/aneri-lohakane-aba89627b/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lohakaneaneril@gmail.com"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Email
            </a>
          </div> */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Aneri Lohakane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
