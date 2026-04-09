import { projects } from '../data/projects';
import ProjectItem from '../components/ProjectItem';

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-end gap-6 text-right sm:gap-12">
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </section>
  );
}
