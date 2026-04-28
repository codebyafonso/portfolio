import { TerminalPrompt } from './TerminalPrompt'
import { projects, type Language } from '../data/projects'

const accentColor: Record<Language, string> = {
  typescript: 'border-l-gh-blue',
  python: 'border-l-gh-green',
  javascript: 'border-l-gh-yellow',
}

const badgeColor: Record<Language, string> = {
  typescript: 'text-gh-blue',
  python: 'text-gh-green',
  javascript: 'text-gh-yellow',
}

export function Projects() {
  return (
    <section id="projetos" className="mb-16">
      <TerminalPrompt command="ls projects/" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-gh-surface border border-gh-border border-l-2 ${accentColor[project.language]} p-4 hover:border-gh-border2 transition-colors group`}
          >
            <div className="text-gh-text text-sm font-bold mb-1 group-hover:text-gh-blue transition-colors">
              {project.title}
            </div>
            <div className="text-gh-muted text-xs mb-3 leading-relaxed">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className={`text-xs ${badgeColor[project.language]}`}>
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
