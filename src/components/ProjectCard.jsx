import React from 'react';
import { Github, ExternalLink, BookOpen, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Tag } from './Tag';
import { Button } from './Button';

export function ProjectCard({ project, onOpenModal }) {
  const hasGithub = Boolean(project.github && project.github.trim() !== '');
  const hasLiveDemo = Boolean(project.liveDemo && project.liveDemo.trim() !== '');
  const hasPublication = Boolean(project.publication && project.publication.url && project.publication.url.trim() !== '');

  return (
    <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 group">
      <div>
        {/* Card Header: Category & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
          <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
            {project.category}
          </span>
          {project.badge && (
            <Tag variant={project.featured ? 'brand' : 'default'} size="sm">
              {project.badge}
            </Tag>
          )}
        </div>

        {/* Project Image Banner (Optional) */}
        {project.image && (
          <div className="mb-4 rounded-xl overflow-hidden border border-dark-800 aspect-video bg-dark-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
          {project.shortDescription}
        </p>

        {/* Problem & Solution Quick Highlights */}
        <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-dark-950/60 border border-dark-800/80 text-xs">
          <div>
            <span className="font-bold text-slate-300 uppercase tracking-wide text-[12px]">Problem:</span>{' '}
            <span className="text-slate-400 line-clamp-2">{project.problem}</span>
          </div>
          <div>
            <span className="font-bold text-brand-300 uppercase tracking-wide text-[12px]">Solution:</span>{' '}
            <span className="text-slate-400 line-clamp-2">{project.solution}</span>
          </div>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-dark-950 border border-dark-750 text-[12px] font-medium text-slate-400 group-hover:text-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-dark-800 flex flex-wrap items-center gap-2.5">
        <Button
          onClick={() => onOpenModal(project)}
          variant="secondary"
          size="sm"
          icon={Layers}
          className="text-xs flex-1 sm:flex-initial"
        >
          View Case Study
        </Button>

        {hasPublication && (
          <Button
            href={project.publication.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={BookOpen}
            className="text-xs"
          >
            Publication
          </Button>
        )}

        {hasGithub && (
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            icon={Github}
            aria-label={`GitHub repository for ${project.title}`}
          />
        )}

        {hasLiveDemo && (
          <Button
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            icon={ExternalLink}
            aria-label={`Live demo for ${project.title}`}
          />
        )}
      </div>
    </div>
  );
}
