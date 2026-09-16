/** Conteúdo espelhado do currículo em PDF (public/curriculo-afonso-estevao.pdf). */

// hífen não separável (U+2011): no menu estreito a quebra cai antes de "Full-Stack"
export const role = 'Desenvolvedor Full‑Stack'
export const headline = 'React • Node.js • Python'

export const linkedinUrl = 'https://www.linkedin.com/in/afonsopy'

// BASE_URL já inclui o "/portfolio/" do GitHub Pages
export const resumePdfUrl = `${import.meta.env.BASE_URL}curriculo-afonso-estevao.pdf`

export const summary =
  'Desenvolvedor Full-Stack com experiência no desenvolvimento de aplicações web, APIs, dashboards e automações utilizando React, TypeScript, Node.js e Python. Atuação também com análise de dados, Power BI, integrações entre sistemas, fluxo de dados com Apache NiFi e soluções com Inteligência Artificial.'

export interface Job {
  company: string
  title: string
  period: string
  location: string
  /** Emprego atual — ganha o marcador verde. */
  current?: boolean
  highlights: string[]
}

export const experience: Job[] = [
  {
    company: 'TDS Company',
    title: 'Research & Innovation Fellow',
    period: 'set/2025 – atual',
    location: 'Recife, PE · Híbrido',
    current: true,
    highlights: [
      'Desenvolvimento e manutenção da plataforma interna TDS Connect, utilizando React, TypeScript, Node.js, Express, MongoDB e JWT.',
      'Desenvolvimento de dashboards e indicadores no Power BI.',
      'Desenvolvimento de soluções de automação, integração de sistemas e fluxo de dados com Apache NiFi.',
      'Aplicação de Inteligência Artificial em projetos internos de inovação e análise de dados para apoio à tomada de decisões.',
      'Suporte técnico e apoio aos usuários da plataforma.',
    ],
  },
  {
    company: 'TDS Company',
    title: 'Estagiário de Suporte N1',
    period: 'set/2023 – ago/2025',
    location: 'Recife, PE · Híbrido',
    highlights: [
      'Atendimento, registro e acompanhamento de chamados técnicos; análise e resolução de incidentes de primeiro nível.',
      'Escalonamento de ocorrências para a equipe de produção e utilização do Jira Service Desk.',
    ],
  },
]

export const education = [
  {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    school: 'Faculdade Senac PE',
    period: '2023 – 2025',
  },
]

export const courses = [
  'Linux e scripting para monitoramento',
  'Python e análise de dados',
  'Power BI e DAX',
  'Data Mesh',
  'Métricas Ágeis',
  'Desenvolvimento Web com HTML, CSS e JavaScript',
  'Inteligência Artificial e IoT',
]

export const practices = [
  'Git e GitHub',
  'Pull requests e revisão de código',
  'GitFlow',
  'APIs RESTful',
  'Documentação técnica',
  'Ambientes de desenvolvimento e produção',
  'Autenticação e controle de acesso',
]
