import React, { useState } from 'react';
import { Sparkles, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Button } from './Button';
import { Tag } from './Tag';
import { cn } from '../utils/cn';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const sinhaLearnProject = projectsData.find(p => p.id === 'sinhalearn');

  return (
    <section id="projects" className="pt-8 pb-20 md:pt-10 md:pb-28 bg-dark-950 relative">
      <Container>
        <SectionHeading
          eyebrow="Portfolio Projects"
          title="Featured Projects & Research"
          subtitle="Explore selected work across applied AI research, data engineering pipelines, IoT telemetry, and responsive web applications."
        />

        {/* Featured Research Spotlight: SinhaLearn */}
        {sinhaLearnProject && (
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-brand-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Research Publication
                  </span>
                  <Tag variant="success" size="sm">
                    MERCon 2024 / IEEE Xplore
                  </Tag>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {sinhaLearnProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-300 font-medium mb-3">
                  {sinhaLearnProject.fullTitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mb-5 font-normal">
                  {sinhaLearnProject.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {sinhaLearnProject.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-dark-950/80 border border-dark-750 text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={() => setActiveModalProject(sinhaLearnProject)}
                    variant="glow"
                    size="sm"
                    icon={Layers}
                  >
                    View Research Case Study
                  </Button>

                  {sinhaLearnProject.publication && sinhaLearnProject.publication.url && (
                    <Button
                      href={sinhaLearnProject.publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      icon={BookOpen}
                    >
                      IEEE Xplore
                    </Button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-950/60 border border-dark-800 text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 mb-3">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="text-sm font-bold text-white">Peer-Reviewed</div>
                <div className="text-xs text-slate-400 mt-1">10th IEEE MERCon Conference</div>
                <div className="text-[11px] text-brand-300 font-mono mt-2 bg-brand-500/10 px-2.5 py-0.5 rounded">NLP • CNN • OCR</div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Filter Projects by Category">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50',
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-dark-900 text-slate-400 hover:text-white hover:bg-dark-850 border border-dark-800'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </Container>
    </section>
  );
}
