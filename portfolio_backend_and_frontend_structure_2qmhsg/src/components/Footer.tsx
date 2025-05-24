import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 text-center animate-fadeIn">
      <div className="container mx-auto px-6">
        <p className="mb-4">
          Connect with me:
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
          <a href="https://github.com/troy1009" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="mailto:email@example.com" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Email</a>
          <span className="hover:text-primary dark:hover:text-blue-400 transition-colors">Phone: 08161575062</span>
          <span className="hover:text-primary dark:hover:text-blue-400 transition-colors">WhatsApp: 08161575062</span>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Imole Timileyin. All rights reserved.</p>
        <p className="text-xs mt-2">Built with Convex & React. Styled with TailwindCSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
