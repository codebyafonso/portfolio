import { TerminalPrompt } from '../components/TerminalPrompt'
import {
  courses,
  education,
  experience,
  practices,
  resumePdfUrl,
} from '../data/resume'

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-gh-muted text-xs uppercase tracking-widest mb-4">{children}</h2>
  )
}

export function ExperiencePage() {
  return (
    <div className="page-enter py-4 max-w-3xl">
      <TerminalPrompt command="cat experiencia.log" />

      <section className="mb-10">
        <SectionTitle>Experiência profissional</SectionTitle>
        <ol className="border-l border-gh-border space-y-6">
          {experience.map((job) => (
            <li key={job.title} className="relative pl-5">
              <span
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-gh-bg ${
                  job.current ? 'bg-gh-green' : 'bg-gh-border2'
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-gh-text text-sm font-bold">
                  {job.title}
                  <span className="text-gh-blue font-normal"> @ {job.company}</span>
                </h3>
                <span
                  className={`text-xs shrink-0 ${job.current ? 'text-gh-green' : 'text-gh-muted'}`}
                >
                  {job.period}
                </span>
              </div>
              <div className="text-gh-muted text-xs mb-3">{job.location}</div>
              <ul className="space-y-1.5">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-gh-muted text-xs leading-relaxed">
                    <span className="text-gh-green shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <SectionTitle>Formação acadêmica</SectionTitle>
        {education.map((item) => (
          <div key={item.course} className="bg-gh-surface border border-gh-border p-4">
            <div className="text-gh-text text-sm font-bold">{item.course}</div>
            <div className="text-gh-muted text-xs mt-1">
              {item.school} · {item.period}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <SectionTitle>Cursos complementares</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {courses.map((course) => (
            <span
              key={course}
              className="bg-gh-surface border-l-2 border-gh-purple text-gh-text text-xs px-3 py-1"
            >
              {course}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionTitle>Práticas de desenvolvimento</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {practices.map((practice) => (
            <span
              key={practice}
              className="bg-gh-surface border-l-2 border-gh-blue text-gh-text text-xs px-3 py-1"
            >
              {practice}
            </span>
          ))}
        </div>
      </section>

      <a
        href={resumePdfUrl}
        download
        className="inline-flex items-center gap-2 border border-gh-blue text-gh-blue text-xs px-4 py-2 hover:bg-blue-950/30 transition-colors"
      >
        ↓ baixar currículo (PDF)
      </a>
    </div>
  )
}
