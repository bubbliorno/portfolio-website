import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Project One',
    description: 'A brief description of this project and what it does.',
    githubUrl: 'https://github.com/username/project-one',
    liveUrl: 'https://project-one.example.com',
    tags: ['React', 'TypeScript'],
  },
  {
    name: 'Project Two',
    description: 'A brief description of this project and what it does.',
    githubUrl: 'https://github.com/username/project-two',
    tags: ['Python', 'FastAPI'],
  },
];
