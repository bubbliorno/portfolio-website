import type { Project } from '../types/project';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <h2 className="font-display xs:text-3xl text-[6vw] whitespace-pre-line xl:text-6xl">
          {project.name}
        </h2>
      </a>

      <p className="mt-1 text-xs font-bold xl:mt-4 xl:text-sm">
        {project.description}
      </p>
    </div>
  );
}
