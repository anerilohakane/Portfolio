'use client';

import React from 'react';

const Sidebar = ({ setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' }, // Placeholder icon
    { id: 'about', label: 'About', icon: '👤' }, // Placeholder icon
    { id: 'skills', label: 'Skills', icon: '💡' }, // Placeholder icon for Skills
    { id: 'experience', label: 'Experience', icon: '💼' }, // Placeholder icon
    { id: 'projects', label: 'Projects', icon: '🛠️' }, // Placeholder icon
    { id: 'contact', label: 'Contact', icon: '📧' }, // Placeholder icon
  ];

  return (
    <aside className="fixed bottom-0 left-0 right-0 h-16 bg-gray-800 text-white flex flex-row items-center justify-around py-2 z-50 md:top-0 md:right-0 md:left-auto md:h-screen md:w-20 md:flex-col md:py-8 md:space-y-6">
      {/* Placeholder for a settings or theme toggle icon if needed */}
      {/* <button className="p-2 hover:bg-gray-700 rounded-md">
        ⚙️
      </button> */}
      <div className="flex flex-row justify-around w-full items-center md:flex-col md:space-y-4 md:space-x-0 md:mt-auto md:mb-auto md:w-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="flex flex-col items-center p-1 md:p-2 hover:bg-blue-600 rounded-md transition-colors duration-200 text-center group md:w-full"
            title={item.label}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
            {/* <span className="text-xs mt-1 group-hover:opacity-100 opacity-0 transition-opacity">{item.label}</span> */}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
