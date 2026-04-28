import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gh-bg font-mono">
      <Sidebar />
      <main className="md:ml-[220px] pt-14 md:pt-0 px-6 md:px-12 py-10 max-w-4xl">
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
