'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderSection = () => {
    if (!isClient) return null; // Prevents SSR issues with client-side state
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-grow pb-16 md:pb-0 md:pr-20"> {/* Adjust padding for responsive sidebar */}
        {renderSection()}
      </div>
      {isClient && <Sidebar setActiveSection={setActiveSection} />} {/* Conditionally render Sidebar on client */}
    </div>
  );
}

