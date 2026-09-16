import { Link } from 'react-router-dom'
import { Projects } from '../components/Projects'
import { headline, resumePdfUrl, role, summary } from '../data/resume'

const quickLinks = [
  { cmd: 'cat experiencia.log', to: '/experiencia', label: 'ver experiência' },
  { cmd: 'cat skills.txt', to: '/skills', label: 'ver skills' },
  { cmd: 'ls projects/', to: '/projects', label: 'ver projetos' },
  { cmd: 'echo $CONTACT', to: '/contact', label: 'entrar em contato' },
]

export function Home() {
  return (
    <div className="page-enter">
    <div className="max-w-3xl flex flex-col py-8 md:pt-16 md:pb-12">

      {/* Boot header */}
      <div className="text-gh-muted text-xs mb-6 space-y-0.5">
        <div>codebyafonso-portfolio v1.0.0</div>
        <div>Type a command or click a link below.</div>
      </div>

      {/* Prompt line */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gh-green text-xs">❯</span>
        <span className="text-gh-muted text-xs italic">whoami</span>
      </div>

      {/* Name */}
      <h1 className="text-gh-text text-2xl sm:text-3xl font-bold leading-tight mb-1">
        Afonso Estevão Luna
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
        <span className="text-gh-blue text-xs">{role}</span>
        <span className="text-gh-border">·</span>
        <span className="text-gh-text text-xs">{headline}</span>
        <span className="text-gh-border">·</span>
        <span className="text-gh-muted text-xs">Recife, PE</span>
      </div>

      {/* Bio block */}
      <div className="bg-gh-surface border border-gh-border p-4 mb-8 max-w-xl">
        <div className="text-gh-muted text-xs mb-3"># about.txt</div>
        <p className="text-gh-text text-sm leading-relaxed">
          Building tools that solve real problems.
        </p>
        <p className="text-gh-muted text-xs leading-relaxed mt-2">{summary}</p>
        <a
          href={resumePdfUrl}
          download
          className="inline-block mt-4 text-xs text-gh-blue hover:underline"
        >
          ↓ baixar currículo (PDF)
        </a>
      </div>

      {/* Quick nav as terminal commands */}
      <div className="space-y-3 mb-8">
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center gap-3 group w-fit"
          >
            <span className="text-gh-green text-xs group-hover:text-gh-blue transition-colors">❯</span>
            <span className="text-gh-muted text-xs group-hover:text-gh-blue transition-colors font-mono">
              ./{link.cmd}
            </span>
            <span className="text-gh-border text-xs hidden sm:inline">—</span>
            <span className="text-gh-border text-xs group-hover:text-gh-muted transition-colors hidden sm:inline">
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Blinking cursor */}
      <div className="flex items-center gap-2">
        <span className="text-gh-green text-xs">❯</span>
        <span className="text-gh-green text-sm animate-blink">▍</span>
      </div>
    </div>

    <Projects />
    </div>
  )
}
