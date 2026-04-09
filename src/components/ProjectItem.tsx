import type { Project } from '../types/project';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-50"
      >
        <h2 className="font-display text-3xl sm:text-6xl">{project.name}</h2>
      </a>
      <p className="mt-3 text-sm font-bold sm:mt-5">{project.description}</p>
      {project.tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-sm font-medium"
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
          className="inline-flex items-center gap-1 text-sm font-medium"
        ></a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
          >
            <FiExternalLink size={24} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
