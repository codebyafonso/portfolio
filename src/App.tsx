import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { useFadeIn } from './hooks/useFadeIn'

function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useFadeIn()
  return <div ref={ref} className="fade-in">{children}</div>
}

export default function App() {
  return (
    <div className="min-h-screen bg-gh-bg font-mono">
      <Sidebar />
      <main className="md:ml-[220px] pt-14 md:pt-0 px-6 md:px-12 py-10 max-w-4xl">
        <FadeSection><Skills /></FadeSection>
        <FadeSection><Projects /></FadeSection>
        <FadeSection><Contact /></FadeSection>
      </main>
    </div>
  )
}
