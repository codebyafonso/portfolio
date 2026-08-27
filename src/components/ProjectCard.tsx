import { ProjectLinks } from './ProjectLinks'
import { accentColor, badgeColor, dotColor } from './projectStyles'
import type { Project } from '../data/projects'

/** Card de projeto usado tanto na home quanto na página de projetos. */
export function ProjectCard({ project }: { project: Project }) {
  // demo ao vivo tem prioridade sobre o repositório; projeto privado não tem destino
  const primaryUrl = project.liveUrl ?? project.githubUrl

  const title = primaryUrl ? (
    <a
      href={primaryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gh-text text-sm font-bold break-words hover:text-gh-blue transition-colors"
    >
      {project.title}
    </a>
  ) : (
    <span className="text-gh-text text-sm font-bold break-words">{project.title}</span>
  )

  return (
    <article
      className={`min-w-0 bg-gh-surface border border-gh-border border-l-2 ${
        accentColor[project.language]
      } p-4 transition-all ${
        // sem destino, o card não finge ser clicável
        primaryUrl ? 'project-card hover:border-gh-border2' : ''
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor[project.language]}`} />
        {title}
      </div>
      <p className="text-gh-muted text-xs leading-relaxed mb-3 pl-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pl-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`text-xs px-2 py-0.5 border ${badgeColor[project.language]}`}
          >
            {tech}
          </span>
        ))}
      </div>
      <ProjectLinks project={project} />
    </article>
  )
}
