import { TerminalPrompt } from '../components/TerminalPrompt'
import { projects, type Language } from '../data/projects'

const accentColor: Record<Language, string> = {
  typescript: 'border-l-gh-blue',
  python: 'border-l-gh-green',
  javascript: 'border-l-gh-yellow',
}

const badgeColor: Record<Language, string> = {
  typescript: 'text-gh-blue bg-blue-950/30 border-gh-blue/30',
  python: 'text-gh-green bg-green-950/30 border-gh-green/30',
  javascript: 'text-gh-yellow bg-yellow-950/30 border-gh-yellow/30',
}

const dotColor: Record<Language, string> = {
  typescript: 'bg-gh-blue',
  python: 'bg-gh-green',
  javascript: 'bg-gh-yellow',
}

export function ProjectsPage() {
  return (
    <div className="page-enter py-4">
      <TerminalPrompt command="ls projects/" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card block bg-gh-surface border border-gh-border border-l-2 ${accentColor[project.language]} p-4 transition-all group`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor[project.language]}`} />
                <span className="text-gh-text text-sm font-bold group-hover:text-gh-blue transition-colors">
                  {project.title}
                </span>
              </div>
              <span className="text-gh-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                ↗
              </span>
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
          </a>
        ))}
      </div>
    </div>
  )
}
