import React from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import Projects from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div data-theme="nord" className="font-geist">
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
    </div>
  );
};

export default App;