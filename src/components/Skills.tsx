import { TerminalPrompt } from './TerminalPrompt'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="mb-16">
      <TerminalPrompt command="cat skills.txt" />
      <div className="space-y-4">
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
    </section>
  )
}
