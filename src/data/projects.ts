export type Language = 'typescript' | 'python' | 'javascript' | 'go'

export type Category =
  | 'produtos'
  | 'redes'
  | 'automacao'
  | 'ferramentas'
  | 'dados'
  | 'apis'

export const categoryLabels: Record<Category, string> = {
  produtos: 'Produtos & Plataformas',
  redes: 'Monitoramento & Redes',
  automacao: 'Automação & Mensageria',
  ferramentas: 'Ferramentas & Dev Tools',
  dados: 'Dados & Machine Learning',
  apis: 'APIs & Backend',
}

/** Rótulos curtos — usados nos filtros, onde o espaço é apertado no mobile. */
export const categoryShort: Record<Category, string> = {
  produtos: 'Produtos',
  redes: 'Redes',
  automacao: 'Automação',
  ferramentas: 'Ferramentas',
  dados: 'Dados & ML',
  apis: 'APIs',
}

// derivado de categoryLabels: uma categoria nova entra nos filtros automaticamente
export const categoryOrder = Object.keys(categoryLabels) as Category[]

export interface Project {
  slug: string
  title: string
  description: string
  stack: string[]
  language: Language
  category: Category
  /** Destaque na home. */
  featured?: boolean
  /** Repositório público. Ausente quando o código é privado. */
  githubUrl?: string
  /** Deploy verificado como acessível. */
  liveUrl?: string
}

const gh = (repo: string) => `https://github.com/codebyafonso/${repo}`

export const projects: Project[] = [
  // ---------------------------------------------------------------- produtos
  {
    slug: 'oush3d',
    title: 'oush3d-orcamentos/',
    description:
      'Gerador de orçamentos para a OUSH3D — monta o PDF no layout do cliente, mantém histórico e catálogo de produtos. Em uso real.',
    stack: ['TypeScript', 'React', 'PDF'],
    language: 'typescript',
    category: 'produtos',
    featured: true,
    liveUrl: 'https://oush3d.vercel.app',
  },
  {
    slug: 'optic-plan-board',
    title: 'optic-plan-board/',
    description:
      'Quadro de planejamento para projetos de rede óptica — organiza etapas, responsáveis e acompanhamento de execução.',
    stack: ['TypeScript', 'React'],
    language: 'typescript',
    category: 'produtos',
    featured: true,
    liveUrl: 'https://optic-plan-board.vercel.app',
  },
  {
    slug: 'supportflow',
    title: 'SupportFlow-N1/',
    description:
      'Sistema de suporte técnico N1 — gestão de chamados, fila de atendimento e controle de tickets.',
    stack: ['JavaScript', 'Node.js'],
    language: 'javascript',
    category: 'produtos',
  },
  {
    slug: 'surfpe',
    title: 'surfpe/',
    description: 'Plataforma de gestão full-stack construída com React e TypeScript.',
    stack: ['TypeScript', 'React'],
    language: 'typescript',
    category: 'produtos',
  },
  {
    slug: 'streamline-hub',
    title: 'streamline-hub/',
    description:
      'Plataforma de gestão de streaming — controle de clientes, planos e acessos.',
    stack: ['TypeScript', 'React'],
    language: 'typescript',
    category: 'produtos',
  },
  {
    slug: 'maternidade-acolhida',
    title: 'maternidade-acolhida/',
    description:
      'Plataforma de acolhimento materno — conteúdo, acompanhamento e área administrativa.',
    stack: ['TypeScript', 'React'],
    language: 'typescript',
    category: 'produtos',
  },

  // ------------------------------------------------------------------- redes
  {
    slug: 'pppoeye',
    title: 'pppoeye/',
    description:
      'Dashboard de monitoramento de sessões PPPoE em tempo real — clientes online/offline, alertas de queda, histórico e autenticação.',
    stack: ['Python', 'WebSockets', 'Dashboards'],
    language: 'python',
    category: 'redes',
    featured: true,
  },
  {
    slug: 'olteye',
    title: 'OltEye/',
    description:
      'Monitoramento de OLTs e ONUs — coleta do status das portas e visualização por cliente.',
    stack: ['Python', 'HTML', 'Automação'],
    language: 'python',
    category: 'redes',
  },
  {
    slug: 'net-watcher-pro',
    title: 'net-watcher-pro/',
    description:
      'Monitoramento de rede em tempo real — alertas, status de hosts e relatórios de disponibilidade.',
    stack: ['TypeScript', 'React'],
    language: 'typescript',
    category: 'redes',
  },
  {
    slug: 'watchdog',
    title: 'Watchdog/',
    description:
      'Dashboard self-hosted de monitoramento de servidores Linux com métricas em tempo real, logs e proteção contra brute-force.',
    stack: ['Python', 'HTML', 'Shell'],
    language: 'python',
    category: 'redes',
    featured: true,
    githubUrl: gh('Watchdog'),
  },
  {
    slug: 'netguardian',
    title: 'NetGuardian-monitor-bot/',
    description:
      'Bot de monitoramento de rede com notificações automáticas de indisponibilidade.',
    stack: ['Python', 'C++'],
    language: 'python',
    category: 'redes',
    githubUrl: gh('NetGuardian-monitor-bot'),
  },

  // --------------------------------------------------------------- automacao
  {
    slug: 'w3ccontrol',
    title: 'W3cControl/',
    description:
      'Painel de controle para gerenciamento de instâncias de mensageria — sessões, envio e status.',
    stack: ['JavaScript', 'Node.js'],
    language: 'javascript',
    category: 'automacao',
  },
  {
    slug: 'whatsflow',
    title: 'WhatsFlow/',
    description:
      'Automação de fluxos de atendimento no WhatsApp com bot e menu interativo.',
    stack: ['JavaScript', 'Node.js'],
    language: 'javascript',
    category: 'automacao',
  },
  {
    slug: 'whats-precision-sender',
    title: 'whats-precision-sender/',
    description:
      'API para envio de mensagens WhatsApp com controle de fila, agendamento e relatórios de entrega.',
    stack: ['JavaScript', 'Node.js', 'REST'],
    language: 'javascript',
    category: 'automacao',
  },
  {
    slug: 'uazapi-buddy',
    title: 'uazapi-buddy/',
    description:
      'Integração de mensageria para envio e recebimento automatizado de mensagens.',
    stack: ['TypeScript', 'REST'],
    language: 'typescript',
    category: 'automacao',
  },
  {
    slug: 'viubot',
    title: 'ViuBot/',
    description:
      'Assistente de Telegram que descreve fotos em português usando visão computacional. Dá para testar em t.me/TuViu_bot.',
    stack: ['Python', 'Telegram', 'IA'],
    language: 'python',
    category: 'automacao',
    githubUrl: gh('ViuBot---Bot-de-Descri-o-de-Imagens'),
    liveUrl: 'https://t.me/TuViu_bot',
  },
  {
    slug: 'chat-bot-telegram',
    title: 'Chat-Bot-Telegram/',
    description: 'Bot de Telegram para automatizar atendimento e tarefas repetitivas.',
    stack: ['Python', 'Telegram'],
    language: 'python',
    category: 'automacao',
    githubUrl: gh('Chat-Bot-Telegram'),
  },

  // ------------------------------------------------------------- ferramentas
  {
    slug: 'orbit',
    title: 'orbit/',
    description:
      'Painel multiusuário para gerenciar projetos da Vercel: radar de higiene, tendências de deploy e exclusão com dupla confirmação. Token cifrado e com expiração automática.',
    stack: ['TypeScript', 'React', 'Vercel API'],
    language: 'typescript',
    category: 'ferramentas',
    featured: true,
    githubUrl: gh('orbit'),
  },
  {
    slug: 'codeshot',
    title: 'codeshot/',
    description:
      'Ferramenta de screenshot pensada para ferramentas de IA — captura rápida e limpa, com instalador para Windows.',
    stack: ['Python', 'Inno Setup'],
    language: 'python',
    category: 'ferramentas',
    featured: true,
    githubUrl: gh('codeshot'),
  },
  {
    slug: 'noarhub',
    title: 'noarhub/',
    description:
      'Sinalização digital: painel web para publicar imagens e vídeos em TVs, com agendamento de playlists e players que se atualizam sozinhos.',
    stack: ['Python', 'HTML', 'Linux'],
    language: 'python',
    category: 'ferramentas',
  },
  {
    slug: 'motosync',
    title: 'motosync/',
    description:
      'Rastreador de manutenção de motos. REST API com Node.js, Express, TypeScript e MongoDB, com frontend React mobile-first.',
    stack: ['TypeScript', 'Node.js', 'MongoDB'],
    language: 'typescript',
    category: 'ferramentas',
  },
  {
    slug: 'organizador-downloads',
    title: 'Organizador-Downloads/',
    description:
      'Script que organiza arquivos em pastas automaticamente com base na extensão.',
    stack: ['Python'],
    language: 'python',
    category: 'ferramentas',
    githubUrl: gh('Organizador-Downloads'),
  },

  // ------------------------------------------------------------------- dados
  {
    slug: 'cancer-mama-ml',
    title: 'diagnostico-cancer-mama-ml/',
    description:
      'Diagnóstico de câncer de mama com machine learning — classificação, métricas de avaliação e app interativo no Streamlit.',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    language: 'python',
    category: 'dados',
    githubUrl: gh('diagnostico-cancer-mama-ml'),
    liveUrl: 'https://diagnostico-cancer-mama-ml-afn.streamlit.app',
  },
  {
    slug: 'covid-ml',
    title: 'covid-19-analysis-ml/',
    description:
      'Análise de dados e machine learning sobre a pandemia de COVID-19, com visualizações e modelos preditivos.',
    stack: ['Python', 'Pandas', 'ML'],
    language: 'python',
    category: 'dados',
    githubUrl: gh('covid-19-analysis-ml'),
  },
  {
    slug: 'safetrip',
    title: 'traffic-accident-risk-analysis/',
    description:
      'SafeTrip — analisa dados de acidentes e identifica pontos críticos em rotas, alertando o motorista sobre trechos de risco.',
    stack: ['Python', 'TypeScript', 'Dados'],
    language: 'python',
    category: 'dados',
    githubUrl: gh('traffic-accident-risk-analysis'),
  },
  {
    slug: 'client-health',
    title: 'Client-Health-Insights/',
    description:
      'Análise e visualização de dados de saúde e despesas de clientes com Python e Jupyter.',
    stack: ['Python', 'Jupyter', 'Pandas'],
    language: 'python',
    category: 'dados',
    githubUrl: gh('Client-Health-Insights'),
  },

  // -------------------------------------------------------------------- apis
  {
    slug: 'nestjs-payment',
    title: 'nestjs-payment-system/',
    description:
      'Sistema de pagamentos construído com NestJS — arquitetura modular, validação e integração de cobrança.',
    stack: ['TypeScript', 'NestJS'],
    language: 'typescript',
    category: 'apis',
    githubUrl: gh('nestjs-payment-system'),
  },
  {
    slug: 'api-golang-chat',
    title: 'api-golang-chat/',
    description:
      'API de chat desenvolvida em Go, permitindo interação em tempo real entre múltiplos clientes.',
    stack: ['Go', 'REST'],
    language: 'go',
    category: 'apis',
    githubUrl: gh('api-golang-chat'),
  },
  {
    slug: 'api-crud',
    title: 'API_CRUD/',
    description:
      'API REST com Node.js e MongoDB implementando as operações completas de CRUD.',
    stack: ['JavaScript', 'Node.js', 'MongoDB'],
    language: 'javascript',
    category: 'apis',
    githubUrl: gh('API_CRUD'),
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
