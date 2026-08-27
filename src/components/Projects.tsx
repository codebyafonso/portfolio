import { Link } from 'react-router-dom'
import { TerminalPrompt } from './TerminalPrompt'
import { ProjectCard } from './ProjectCard'
import { featuredProjects, projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projetos" className="mb-16">
      <TerminalPrompt command="ls projects/ | head" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <Link
        to="/projects"
        className="inline-block mt-4 text-xs text-gh-muted hover:text-gh-blue transition-colors"
      >
        ver todos os {projects.length} projetos →
      </Link>
    </section>
  )
}
