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
    <aside className="fixed top-0 right-0 h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-8 space-y-6 z-50">
      {/* Placeholder for a settings or theme toggle icon if needed */}
      {/* <button className="p-2 hover:bg-gray-700 rounded-md">
        ⚙️
      </button> */}
      <div className="flex flex-col items-center space-y-4 mt-auto mb-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="flex flex-col items-center p-2 hover:bg-blue-600 rounded-md transition-colors duration-200 w-full text-center group"
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
