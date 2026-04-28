import { useState } from 'react'

const navLinks = [
  { label: 'skills', href: '#skills' },
  { label: 'projetos', href: '#projetos' },
  { label: 'contato', href: '#contato' },
]

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gh-bg border-b border-gh-border px-4 py-3 flex items-center justify-between">
        <span className="text-gh-blue text-sm font-mono">~/afonso</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gh-muted hover:text-gh-text transition-colors"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </header>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <nav className="md:hidden fixed top-12 left-0 right-0 z-40 bg-gh-surface border-b border-gh-border px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gh-muted hover:text-gh-blue text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-[220px] bg-gh-bg border-r border-gh-border px-6 py-8 z-40">
        <div className="text-gh-muted text-xs mb-1">[codebyafonso@portfolio ~]$</div>
        <div className="text-gh-text font-bold text-base leading-tight mb-1">Afonso Estevão</div>
        <div className="text-gh-blue text-xs mb-1">Developer</div>
        <div className="text-gh-muted text-xs mb-4 leading-relaxed">Building tools that solve real problems</div>
        <div className="border-t border-gh-border mb-4" />
        <div className="text-gh-muted text-xs mb-1">📍 Recife, PE</div>
        <a
          href="https://github.com/codebyafonso"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gh-muted hover:text-gh-blue text-xs transition-colors mb-6"
        >
          github.com/codebyafonso
        </a>
        <nav className="flex flex-col gap-2 mb-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gh-muted hover:text-gh-blue text-xs transition-colors hover:translate-x-1 inline-block"
            >
              ~/{link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
          <span className="text-gh-green text-xs">online</span>
        </div>
        <div className="text-gh-green text-sm mt-2 animate-blink">▍</div>
      </aside>
    </>
  )
}
