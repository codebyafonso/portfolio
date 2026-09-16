import { TerminalPrompt } from '../components/TerminalPrompt'
import { linkedinUrl, resumePdfUrl } from '../data/resume'

const contacts = [
  {
    key: 'github',
    value: 'github.com/codebyafonso',
    href: 'https://github.com/codebyafonso',
    note: 'código fonte e projetos',
  },
  {
    key: 'linkedin',
    value: 'linkedin.com/in/afonsopy',
    href: linkedinUrl,
    note: 'experiência e recomendações',
  },
  {
    key: 'email',
    value: 'afonsoestevao04@gmail.com',
    href: 'mailto:afonsoestevao04@gmail.com',
    note: 'respondo em até 24h',
  },
]

export function ContactPage() {
  return (
    <div className="page-enter py-4 max-w-3xl">
      <TerminalPrompt command="echo $CONTACT" />

      <div className="space-y-3 max-w-lg mb-10">
        {contacts.map(({ key, value, href, note }) => (
          <a
            key={key}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-gh-surface border border-gh-border p-4 group hover:border-gh-border2 transition-all"
          >
            <span className="text-gh-muted text-xs w-12 shrink-0">{key}</span>
            <span className="text-gh-muted text-xs hidden sm:inline">→</span>
            <div className="flex-1 min-w-0">
              <div className="text-gh-blue text-xs group-hover:underline truncate">{value}</div>
              <div className="text-gh-muted text-xs mt-0.5 opacity-60">{note}</div>
            </div>
            <span className="text-gh-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity shrink-0">↗</span>
          </a>
        ))}
      </div>

      <a
        href={resumePdfUrl}
        download
        className="inline-flex items-center gap-2 border border-gh-blue text-gh-blue text-xs px-4 py-2 mb-10 hover:bg-blue-950/30 transition-colors"
      >
        ↓ baixar currículo (PDF)
      </a>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-gh-green text-xs">❯</span>
        <span className="text-gh-green text-sm animate-blink">▍</span>
      </div>
    </div>
  )
}
