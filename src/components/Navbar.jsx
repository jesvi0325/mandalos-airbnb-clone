import { useState } from 'react'

function Navbar({ activeTab, onChangeTab, onOpenLogin, onOpenHelp }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleHelpCenter() {
    setMenuOpen(false)
  }

  function handleAuth() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">airbnb</div>
        <nav className="tabs" role="tablist" aria-label="Main" style={{ justifySelf: 'center' }}>
          <button className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => onChangeTab('home')}>Homes</button>
          <button className={`tab ${activeTab === 'properties' ? 'active' : ''}`} onClick={() => onChangeTab('properties')}>Properties</button>
          <button className={`tab ${activeTab === 'experiences' ? 'active' : ''}`} onClick={() => onChangeTab('experiences')}>Experiences</button>
          <button className={`tab ${activeTab === 'services' ? 'active' : ''}`} onClick={() => onChangeTab('services')}>Services</button>
        </nav>
        <div className="actions" style={{ justifySelf: 'end', position: 'relative' }}>
          <button className="link-btn">Become a host</button>
          <button className="icon-btn" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>≡</button>
          {menuOpen && (
            <div className="menu-panel" role="menu">
              <button className="menu-item" role="menuitem" onClick={() => { handleHelpCenter(); onOpenHelp?.(); }}>Help Center</button>
              <hr className="menu-sep" />
              <button className="menu-item" role="menuitem" onClick={() => { handleAuth(); onOpenLogin?.(); }}>Log in or sign up</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar


