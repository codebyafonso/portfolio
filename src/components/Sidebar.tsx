import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'home', to: '/' },
  { label: 'skills', to: '/skills' },
  { label: 'projetos', to: '/projects' },
  { label: 'contato', to: '/contact' },
]

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gh-bg/95 backdrop-blur border-b border-gh-border px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="text-gh-blue text-sm font-mono">~/afonso</NavLink>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gh-muted hover:text-gh-text transition-colors p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </header>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <nav className="md:hidden fixed top-14 left-0 right-0 z-40 bg-gh-surface border-b border-gh-border px-4 py-2 flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 text-sm transition-colors border-b border-gh-border last:border-0 ${
                  isActive ? 'text-gh-blue' : 'text-gh-muted'
                }`
              }
            >
              ~/{link.label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-[220px] bg-gh-bg border-r border-gh-border px-6 py-8 z-40">
        <div className="text-gh-muted text-xs mb-1 truncate">[afonso@portfolio ~]$</div>
        <NavLink to="/" className="text-gh-text font-bold text-base leading-tight mb-1 hover:text-gh-blue transition-colors">
          Afonso Estevão
        </NavLink>
        <div className="text-gh-blue text-xs mb-4">Developer</div>
        <div className="border-t border-gh-border mb-6" />
        <nav className="flex flex-col gap-3 mb-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs transition-all inline-block pl-2 ${
                  isActive
                    ? 'text-gh-blue border-l-2 border-gh-blue'
                    : 'text-gh-muted hover:text-gh-blue hover:translate-x-1'
                }`
              }
            >
              ~/{link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-6 text-gh-muted text-xs">📍 Recife, PE</div>
        <a
          href="https://github.com/codebyafonso"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gh-muted hover:text-gh-blue text-xs transition-colors mt-1"
        >
          github.com/codebyafonso
        </a>
        <div className="flex items-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
          <span className="text-gh-green text-xs">online</span>
        </div>
        <div className="text-gh-green text-sm mt-2 animate-blink">▍</div>
      </aside>
    </>
  )
}
