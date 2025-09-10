import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import LoginModal from './components/LoginModal.jsx'
import HelpCenterModal from './components/HelpCenterModal.jsx'
import Home from './pages/Home.jsx'
import Experiences from './pages/Experiences.jsx'
import Services from './pages/Services.jsx'
import Properties from './pages/Properties.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [query, setQuery] = useState('')
  const [loginOpen, setLoginOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} onChangeTab={setActiveTab} onOpenLogin={() => setLoginOpen(true)} onOpenHelp={() => setHelpOpen(true)} />
      <div className="search-wrap">
        <SearchBar onSearch={setQuery} />
      </div>
      <main className="content">
        {activeTab === 'home' && <Home query={query} />}
        {activeTab === 'experiences' && <Experiences query={query} />}
        {activeTab === 'services' && <Services query={query} />}
        {activeTab === 'properties' && <Properties />}
      </main>
      <Footer version="new" />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <HelpCenterModal open={helpOpen} onClose={() => setHelpOpen(false)} onOpenLogin={() => { setHelpOpen(false); setLoginOpen(true) }} />
    </div>
  )
}

export default App
