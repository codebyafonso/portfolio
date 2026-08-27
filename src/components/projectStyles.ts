import type { Language } from '../data/projects'

/** Cores por linguagem, compartilhadas entre a home e a página de projetos. */
export const accentColor: Record<Language, string> = {
  typescript: 'border-l-gh-blue',
  python: 'border-l-gh-green',
  javascript: 'border-l-gh-yellow',
  go: 'border-l-gh-cyan',
}

export const badgeColor: Record<Language, string> = {
  typescript: 'text-gh-blue bg-blue-950/30 border-gh-blue/30',
  python: 'text-gh-green bg-green-950/30 border-gh-green/30',
  javascript: 'text-gh-yellow bg-yellow-950/30 border-gh-yellow/30',
  go: 'text-gh-cyan bg-cyan-950/30 border-gh-cyan/30',
}

export const dotColor: Record<Language, string> = {
  typescript: 'bg-gh-blue',
  python: 'bg-gh-green',
  javascript: 'bg-gh-yellow',
  go: 'bg-gh-cyan',
}
