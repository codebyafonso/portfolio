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
    skills: ['TypeScript', 'JavaScript', 'Python', 'Kotlin', 'Go'],
  },
  {
    label: 'Frontend',
    color: 'text-gh-purple',
    border: 'border-gh-purple',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    color: 'text-gh-green',
    border: 'border-gh-green',
    skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Flask'],
  },
  {
    label: 'Mobile',
    color: 'text-gh-cyan',
    border: 'border-gh-cyan',
    skills: ['React Native', 'Kotlin', 'Jetpack Compose'],
  },
  {
    label: 'Database',
    color: 'text-gh-yellow',
    border: 'border-gh-yellow',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    label: 'Dados & BI',
    color: 'text-gh-purple',
    border: 'border-gh-purple',
    skills: ['Power BI', 'DAX', 'Apache NiFi', 'Pandas', 'NumPy', 'Plotly', 'scikit-learn', 'Streamlit'],
  },
  {
    label: 'Redes',
    color: 'text-gh-cyan',
    border: 'border-gh-cyan',
    skills: ['MikroTik RouterOS', 'PPPoE', 'Telnet', 'SNMP'],
  },
  {
    label: 'Integrações',
    color: 'text-gh-red',
    border: 'border-gh-red',
    skills: ['APIs REST', 'Jira', 'Google Chat', 'WhatsApp', 'Telegram', 'Pix', 'Inteligência Artificial'],
  },
  {
    label: 'Infra',
    color: 'text-gh-cyan',
    border: 'border-gh-cyan',
    skills: ['Docker', 'Linux', 'Nginx', 'GitHub Actions', 'Vercel'],
  },
  {
    label: 'Tools',
    color: 'text-gh-muted',
    border: 'border-gh-border2',
    skills: ['Git', 'GitHub', 'GitFlow', 'WebSockets'],
  },
]
