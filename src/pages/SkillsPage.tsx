import { TerminalPrompt } from '../components/TerminalPrompt'
import { skillGroups } from '../data/skills'

export function SkillsPage() {
  return (
    <div className="page-enter py-4 max-w-3xl">
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
