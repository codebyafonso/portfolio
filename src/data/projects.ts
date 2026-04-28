export type Language = 'typescript' | 'python' | 'javascript'

export interface Project {
  slug: string
  title: string
  description: string
  stack: string[]
  language: Language
  githubUrl: string
}

export const projects: Project[] = [
  {
    slug: 'motosync',
    title: 'motosync/',
    description: 'Motorcycle maintenance tracker. REST API com Node.js, Express, TypeScript, MongoDB e frontend React mobile-first.',
    stack: ['TypeScript', 'Node.js', 'MongoDB'],
    language: 'typescript',
    githubUrl: 'https://github.com/codebyafonso/motosync',
  },
  {
    slug: 'pppoeye',
    title: 'pppoeye/',
    description: 'Dashboard de monitoramento PPPoE em tempo real para MikroTik — clientes online/offline, alertas de queda, histórico e autenticação.',
    stack: ['Python', 'MikroTik', 'WebSockets'],
    language: 'python',
    githubUrl: 'https://github.com/codebyafonso/PPPoEye---AfnProject',
  },
  {
    slug: 'supportflow',
    title: 'SupportFlow-N1/',
    description: 'Sistema de suporte técnico N1 — gestão de chamados, atendimento e controle de tickets.',
    stack: ['JavaScript', 'Node.js'],
    language: 'javascript',
    githubUrl: 'https://github.com/codebyafonso/SupportFlow---N1',
  },
  {
    slug: 'tdsbreak',
    title: 'tdsbreak/',
    description: 'Plataforma TypeScript — sistema de gestão e automação.',
    stack: ['TypeScript'],
    language: 'typescript',
    githubUrl: 'https://github.com/codebyafonso/tdsbreak',
  },
  {
    slug: 'watchdog',
    title: 'Watchdog/',
    description: 'Self-hosted Linux server monitoring dashboard com métricas em tempo real, logs e proteção contra brute-force.',
    stack: ['Python', 'HTML'],
    language: 'python',
    githubUrl: 'https://github.com/codebyafonso/Watchdog',
  },
]
