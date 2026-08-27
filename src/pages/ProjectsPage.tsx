import { useState } from 'react'
import { TerminalPrompt } from '../components/TerminalPrompt'
import { ProjectCard } from '../components/ProjectCard'
import {
  projects,
  categoryLabels,
  categoryShort,
  categoryOrder,
  type Category,
} from '../data/projects'

type Filter = Category | 'todos'

export function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('todos')

  // categorias que realmente têm projeto — filtros e seções usam a mesma fonte,
  // senão um botão com contador 0 levaria a uma tela em branco
  const existingCategories = categoryOrder.filter((c) =>
    projects.some((p) => p.category === c),
  )
  const shownCategories =
    filter === 'todos' ? existingCategories : existingCategories.filter((c) => c === filter)

  const filters: Filter[] = ['todos', ...existingCategories]
  const shownCount = projects.filter(
    (p) => filter === 'todos' || p.category === filter,
  ).length

  return (
    <div className="page-enter py-4">
      <TerminalPrompt
        command={filter === 'todos' ? 'ls projects/' : `ls projects/${filter}`}
      />

      {/*
        No mobile os filtros viram uma faixa deslizante numa linha só — empilhados,
        ocupavam a tela inteira antes do primeiro projeto. A partir de sm voltam a
        quebrar em linhas normalmente.
      */}
      <div
        role="group"
        aria-label="Filtrar projetos por categoria"
        className="no-scrollbar mb-6 flex max-w-full gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
      >
        {filters.map((f) => {
          const count =
            f === 'todos'
              ? projects.length
              : projects.filter((p) => p.category === f).length
          const active = filter === f
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              aria-label={
                f === 'todos'
                  ? `Todos os ${count} projetos`
                  : `${categoryLabels[f]}, ${count} projetos`
              }
              className={`shrink-0 whitespace-nowrap border px-3 py-1.5 text-xs transition-colors ${
                active
                  ? 'border-gh-blue text-gh-blue bg-blue-950/30'
                  : 'border-gh-border text-gh-muted hover:border-gh-border2 hover:text-gh-text'
              }`}
            >
              {f === 'todos' ? (
                'todos'
              ) : (
                <>
                  <span className="sm:hidden">{categoryShort[f]}</span>
                  <span className="hidden sm:inline">{categoryLabels[f]}</span>
                </>
              )}{' '}
              <span className="opacity-60" aria-hidden="true">
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* troca de filtro é silenciosa para leitor de tela sem isto */}
      <p className="sr-only" aria-live="polite">
        {shownCount} projetos em{' '}
        {filter === 'todos' ? 'todas as categorias' : categoryLabels[filter]}
      </p>

      {shownCategories.map((category) => (
        <section key={category} className="mb-8">
          <h2 className="text-gh-muted text-xs uppercase tracking-widest mb-3">
            {categoryLabels[category]}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects
              .filter((p) => p.category === category)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
