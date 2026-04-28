import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { SkillsPage } from './pages/SkillsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="min-h-screen bg-gh-bg font-mono">
        <Sidebar />
        <main className="md:ml-[220px] pt-14 md:pt-0 px-6 md:px-12 py-10 max-w-3xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
