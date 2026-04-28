import { TerminalPrompt } from '../components/TerminalPrompt'

const skillGroups = [
  { label: 'Languages', color: 'text-gh-blue', border: 'border-gh-blue', skills: ['TypeScript', 'Python', 'JavaScript'] },
  { label: 'Runtime', color: 'text-gh-green', border: 'border-gh-green', skills: ['Node.js', 'Express', 'NestJS'] },
  { label: 'Database', color: 'text-gh-yellow', border: 'border-gh-yellow', skills: ['MongoDB', 'PostgreSQL'] },
  { label: 'Frontend', color: 'text-gh-purple', border: 'border-gh-purple', skills: ['React', 'Tailwind CSS'] },
  { label: 'Infra', color: 'text-gh-red', border: 'border-gh-red', skills: ['Docker', 'Linux', 'Nginx'] },
  { label: 'Tools', color: 'text-gh-muted', border: 'border-gh-border2', skills: ['Git', 'REST APIs', 'WebSockets'] },
]

export function SkillsPage() {
  return (
    <div className="page-enter py-4">
      <TerminalPrompt command="cat skills.txt" />
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div className={`text-xs mb-2 ${group.color} flex items-center gap-2`}>
              <span className="inline-block w-2 h-2 rounded-full bg-current opacity-60" />
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2 pl-4">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`bg-gh-surface border-l-2 ${group.border} text-gh-text text-xs px-3 py-1 hover:bg-gh-border transition-colors cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
