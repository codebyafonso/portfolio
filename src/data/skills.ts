export interface SkillGroup {
  label: string
  /** Classe de texto (página de skills) */
  color: string
  /** Classe de borda (página de skills) */
  border: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    color: 'text-gh-blue',
    border: 'border-gh-blue',
    skills: ['TypeScript', 'Python', 'JavaScript', 'Go'],
  },
  {
    label: 'Frontend',
    color: 'text-gh-purple',
    border: 'border-gh-purple',
    skills: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Runtime',
    color: 'text-gh-green',
    border: 'border-gh-green',
    skills: ['Node.js', 'Express', 'NestJS'],
  },
  {
    label: 'Database',
    color: 'text-gh-yellow',
    border: 'border-gh-yellow',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    label: 'Dados',
    color: 'text-gh-purple',
    border: 'border-gh-purple',
    skills: ['Pandas', 'scikit-learn', 'Streamlit'],
  },
  {
    label: 'Redes',
    color: 'text-gh-cyan',
    border: 'border-gh-cyan',
    skills: ['MikroTik', 'PPPoE', 'Telnet', 'SNMP'],
  },
  {
    label: 'Automação',
    color: 'text-gh-red',
    border: 'border-gh-red',
    skills: ['Telegram Bot API', 'WhatsApp API', 'Webhooks'],
  },
  {
    label: 'Infra',
    color: 'text-gh-cyan',
    border: 'border-gh-cyan',
    skills: ['Docker', 'Linux', 'Nginx', 'Vercel'],
  },
  {
    label: 'Tools',
    color: 'text-gh-muted',
    border: 'border-gh-border2',
    skills: ['Git', 'REST APIs', 'WebSockets'],
  },
]
