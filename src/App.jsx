import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ProjectGuidance } from './components/ProjectGuidance';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { FreelanceCTA } from './components/FreelanceCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState('Website Development');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-brand-500/30 selection:text-brand-200">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={() => handleSelectService('Website Development')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <CapabilityStrip />
        <About />
        <Expertise />
        <Projects />
        <Services onSelectService={handleSelectService} />
        <ProjectGuidance onSelectService={handleSelectService} />
        <Experience />
        <Education />
        <FreelanceCTA />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
