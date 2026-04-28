export function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <div className="text-gh-muted text-xs mb-3">[codebyafonso@portfolio ~]$</div>
      <h1 className="text-gh-text text-3xl font-bold mb-2 leading-tight">
        Afonso Estevão
      </h1>
      <div className="text-gh-blue text-sm mb-4">Developer</div>
      <div className="border-t border-gh-border my-4 w-16" />
      <p className="text-gh-muted text-sm leading-relaxed max-w-md mb-8">
        Building tools that solve real problems.<br />
        Back-end por natureza. Automação por obsessão.<br />
        Full-stack quando necessário.
      </p>
      <div className="flex flex-col gap-2 text-xs text-gh-muted">
        <div>📍 Recife, PE</div>
        <a
          href="https://github.com/codebyafonso"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gh-blue transition-colors"
        >
          github.com/codebyafonso
        </a>
      </div>
      <div className="text-gh-green text-sm mt-10 animate-blink">▍</div>
    </div>
  )
}
