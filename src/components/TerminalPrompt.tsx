interface TerminalPromptProps {
  command: string
  className?: string
}

export function TerminalPrompt({ command, className = '' }: TerminalPromptProps) {
  return (
    <div className={`flex items-center gap-2 mb-6 ${className}`}>
      <span className="text-gh-muted text-sm">$</span>
      <span className="text-gh-blue text-sm font-mono">{command}</span>
    </div>
  )
}
