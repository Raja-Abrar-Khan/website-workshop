import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ObjectivesPage from './pages/ObjectivesPage'
import VenuePage from './pages/VenuePage'
import CurriculumPage from './pages/CurriculumPage'
import TrainersPage from './pages/TrainersPage'
import BrandPage from './pages/BrandPage'
import ContactPage from './pages/ContactPage'

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '')
    const validPages = ['home', 'objectives', 'dates-venue', 'curriculum', 'trainers', 'brand', 'contact']
    return validPages.includes(hash) ? hash : 'home'
  }

  const [currentPage, setCurrentPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (page) => {
    window.location.hash = `#/${page}`
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between">
      <div>
        {/* Sleek Minimalist Navbar */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Dedicated Page Views */}
        <main>
          {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentPage === 'objectives' && <ObjectivesPage onNavigate={navigateTo} />}
          {currentPage === 'dates-venue' && <VenuePage onNavigate={navigateTo} />}
          {currentPage === 'curriculum' && <CurriculumPage onNavigate={navigateTo} />}
          {currentPage === 'trainers' && <TrainersPage onNavigate={navigateTo} />}
          {currentPage === 'brand' && <BrandPage onNavigate={navigateTo} />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
      </div>

      {/* Sleek Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App
