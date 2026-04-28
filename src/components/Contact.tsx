import { TerminalPrompt } from './TerminalPrompt'

export function Contact() {
  return (
    <section id="contato" className="mb-16">
      <TerminalPrompt command="echo $CONTACT" />
      <div className="bg-gh-surface border border-gh-border p-4 font-mono text-sm">
        <div className="flex gap-4 mb-2">
          <span className="text-gh-muted w-10">github</span>
          <span className="text-gh-muted">→</span>
          <a
            href="https://github.com/codebyafonso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gh-blue hover:underline"
          >
            github.com/codebyafonso
          </a>
        </div>
        <div className="flex gap-4">
          <span className="text-gh-muted w-10">email</span>
          <span className="text-gh-muted">→</span>
          <a href="mailto:afonsoestevao04@gmail.com" className="text-gh-blue hover:underline">
            afonsoestevao04@gmail.com
          </a>
        </div>
      </div>
      <div className="text-gh-green text-sm mt-4 animate-blink">▍</div>
    </section>
  )
}
