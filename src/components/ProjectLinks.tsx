import type { Project } from '../data/projects'

/**
 * Rodapé de links do card. Projetos privados não têm repositório público:
 * nesses casos mostramos só a demo, em vez de um link que daria 404.
 * Os aria-label incluem o nome do projeto — com 29 cards, um "código ↗" repetido
 * seria indistinguível na lista de links de um leitor de tela.
 */
export function ProjectLinks({ project }: { project: Project }) {
  const { githubUrl, liveUrl, title } = project
  const name = title.replace(/\/$/, '')

  return (
    <div className="flex flex-wrap items-center gap-3 mt-3 pl-4">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Código de ${name} no GitHub`}
          className="text-xs text-gh-muted hover:text-gh-blue transition-colors"
        >
          código <span aria-hidden="true">↗</span>
        </a>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${name} funcionando`}
          className="text-xs text-gh-blue hover:underline"
        >
          ver ao vivo <span aria-hidden="true">↗</span>
        </a>
      )}
      {!githubUrl && !liveUrl && (
        <span className="text-xs text-gh-muted/70">código privado</span>
      )}
    </div>
  )
}
