import { projects } from '../data/projects';
import ProjectItem from '../components/ProjectItem';

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-end gap-6 pt-24 pl-[33%] text-right xl:gap-12 xl:pt-29">
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </section>
  );
}
