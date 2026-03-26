import type { Project } from '../types/project';
import { FaSquareGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-text/10 bg-white p-6 transition-shadow hover:shadow-md">
      <h3 className="text-xl font-medium">{project.name}</h3>
      <p className="mt-2 font-light leading-relaxed text-text/70">
        {project.description}
      </p>
      {project.tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-text/5 px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
        >
          <FaSquareGithub size={16} />
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
          >
            <FiExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
