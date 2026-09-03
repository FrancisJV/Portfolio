import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from './Button';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'guidance', label: 'Guidance' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', ...navItems.map(item => item.id)], 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-dark-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-4">
          {/* Monogram / Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500/50 rounded-lg p-1 flex-shrink-0"
            aria-label="Vidhushika Francis - Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-extrabold text-white text-sm sm:text-base shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              VF
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-sm sm:text-[15px] tracking-tight group-hover:text-brand-300 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-tight whitespace-nowrap">
                Data • Technology • Digital Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-dark-900/70 border border-dark-800/80 px-2.5 xl:px-3 py-1.5 rounded-full backdrop-blur-md flex-shrink-0" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    'px-3 xl:px-3.5 py-1.5 text-[13.5px] xl:text-[14.5px] font-medium tracking-tight whitespace-nowrap rounded-full transition-all duration-200',
                    isActive
                      ? 'bg-brand-500/15 text-brand-300 font-semibold shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-dark-800/60'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            <Button
              href="#freelance"
              onClick={(e) => handleNavClick(e, 'freelance')}
              variant="glow"
              size="sm"
              icon={ArrowUpRight}
              className="text-xs whitespace-nowrap"
            >
              Work With Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 border border-dark-700/60 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-dark-950/95 backdrop-blur-xl z-40 p-6 flex flex-col justify-between border-t border-dark-800/80 animate-fade-in">
          <nav className="flex flex-col space-y-2 mt-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    'px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-brand-500/15 text-brand-300 font-semibold border border-brand-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-dark-900 border border-transparent'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-400"></span>}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-dark-800 space-y-3">
            <Button
              href="#freelance"
              onClick={(e) => handleNavClick(e, 'freelance')}
              variant="glow"
              size="md"
              icon={ArrowUpRight}
              className="w-full justify-center"
            >
              Work With Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
