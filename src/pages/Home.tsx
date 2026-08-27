import { Link } from 'react-router-dom'

const quickLinks = [
  { cmd: 'cat skills.txt', to: '/skills', label: 'ver skills' },
  { cmd: 'ls projects/', to: '/projects', label: 'ver projetos' },
  { cmd: 'echo $CONTACT', to: '/contact', label: 'entrar em contato' },
]

export function Home() {
  return (
    <div className="page-enter max-w-3xl min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-80px)] flex flex-col justify-center py-8">

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
      <div className="flex items-center gap-3 mb-6">
        <span className="text-gh-blue text-xs">Developer</span>
        <span className="text-gh-border">·</span>
        <span className="text-gh-muted text-xs">Recife, PE</span>
      </div>

      {/* Bio block */}
      <div className="bg-gh-surface border border-gh-border p-4 mb-8 max-w-lg">
        <div className="text-gh-muted text-xs mb-3"># about.txt</div>
        <p className="text-gh-text text-sm leading-relaxed">
          Building tools that solve real problems.
        </p>
        <p className="text-gh-muted text-xs leading-relaxed mt-2">
          Back-end por natureza. Automação por obsessão.<br />
          Full-stack quando necessário.
        </p>
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
  )
}
