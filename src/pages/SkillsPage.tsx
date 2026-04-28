import { TerminalPrompt } from '../components/TerminalPrompt'

const skillGroups = [
  { label: 'Languages', skills: ['TypeScript', 'Python', 'JavaScript'] },
  { label: 'Runtime', skills: ['Node.js', 'Express', 'NestJS'] },
  { label: 'Database', skills: ['MongoDB', 'PostgreSQL'] },
  { label: 'Frontend', skills: ['React', 'Tailwind CSS'] },
  { label: 'Infra', skills: ['Docker', 'Linux', 'Nginx'] },
  { label: 'Tools', skills: ['Git', 'REST APIs', 'WebSockets'] },
]

export function SkillsPage() {
  return (
    <div>
      <TerminalPrompt command="cat skills.txt" />
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-wrap items-start gap-x-4 gap-y-2">
            <span className="text-gh-muted text-xs w-20 shrink-0 pt-0.5">{group.label}</span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gh-surface border border-gh-border text-gh-blue text-xs px-2 py-0.5 rounded-sm"
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
