import React, { useEffect } from 'react';
import { X, ExternalLink, Github, BookOpen, Layers, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { Tag } from './Tag';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasGithub = Boolean(project.github && project.github.trim() !== '');
  const hasLiveDemo = Boolean(project.liveDemo && project.liveDemo.trim() !== '');
  const hasPublication = Boolean(project.publication && project.publication.url && project.publication.url.trim() !== '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-dark-900 border border-dark-750 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-800 border border-dark-750 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Tag variant="brand" size="sm">
              {project.category}
            </Tag>
            {project.badge && (
              <Tag variant="default" size="sm">
                {project.badge}
              </Tag>
            )}
            <span className="text-xs text-slate-400 font-mono">
              Status: {project.status}
            </span>
          </div>

          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>

          {project.fullTitle && project.fullTitle !== project.title && (
            <p className="text-xs sm:text-sm text-brand-300 font-medium mt-1">
              {project.fullTitle}
            </p>
          )}
        </div>

        {/* Project Screenshot / Banner if present */}
        {project.image && (
          <div className="mb-6 rounded-xl overflow-hidden border border-dark-800 aspect-video bg-dark-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Case Study Sections */}
        <div className="space-y-6 text-sm">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-dark-950/70 border border-dark-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-2 flex items-center gap-1.5">
                <span>The Challenge / Problem</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/70 border border-dark-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5">
                <span>The Solution & Architecture</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Contribution */}
          <div className="p-4 rounded-xl bg-dark-950/70 border border-dark-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>My Role & Technical Contribution</span>
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Key Learnings */}
          <div className="p-4 rounded-xl bg-dark-950/70 border border-dark-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>What I Learned & Key Takeaways</span>
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              {project.learnings}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-dark-950 border border-dark-750 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="mt-8 pt-5 border-t border-dark-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {hasPublication && (
              <Button
                href={project.publication.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="glow"
                size="sm"
                icon={BookOpen}
              >
                {project.publication.label || 'View Publication'}
              </Button>
            )}

            {hasGithub && (
              <Button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={Github}
              >
                GitHub Repo
              </Button>
            )}

            {hasLiveDemo && (
              <Button
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            )}
          </div>

          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
          >
            Close
          </Button>
        </div>

      </div>
    </div>
  );
}
