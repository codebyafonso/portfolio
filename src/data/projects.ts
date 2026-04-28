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
    description: 'Rastreador de manutenção de motos com REST API completa, auth JWT e testes integrados',
    stack: ['TypeScript', 'Node.js', 'MongoDB'],
    language: 'typescript',
    githubUrl: 'https://github.com/codebyafonso/motosync',
  },
  {
    slug: 'pppoeye',
    title: 'pppoeye/',
    description: 'Dashboard de monitoramento PPPoE em tempo real para MikroTik com alertas de queda em massa',
    stack: ['Python', 'MikroTik', 'WebSockets'],
    language: 'python',
    githubUrl: 'https://github.com/codebyafonso/PPPoEye---AfnProject',
  },
  {
    slug: 'supportflow',
    title: 'SupportFlow-N1/',
    description: 'Sistema de suporte técnico N1 com gestão de chamados e atendimento',
    stack: ['JavaScript', 'Node.js'],
    language: 'javascript',
    githubUrl: 'https://github.com/codebyafonso/SupportFlow---N1',
  },
  {
    slug: 'tdsbreak',
    title: 'tdsbreak/',
    description: 'Plataforma TypeScript em desenvolvimento ativo',
    stack: ['TypeScript'],
    language: 'typescript',
    githubUrl: 'https://github.com/codebyafonso/tdsbreak',
  },
  {
    slug: 'watchdog',
    title: 'Watchdog/',
    description: 'Dashboard de monitoramento de servidor Linux com métricas em tempo real e proteção contra brute-force',
    stack: ['Python', 'HTML'],
    language: 'python',
    githubUrl: 'https://github.com/codebyafonso/Watchdog',
  },
]
