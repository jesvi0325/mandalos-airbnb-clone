function Footer({ version = 'simple' }) {
  return version === 'simple' ? (
    <footer>
      © {new Date().getFullYear()} Airbnb clone for coursework · Built with React + Vite
    </footer>
  ) : (
    <footer className="full-footer">
      <div className="footer-content">
        {/* Inspiration section */}
        <div className="footer-section">
          <h3 className="footer-heading">Inspiration for future getaways</h3>
          <div className="footer-tabs">
            <button className="footer-tab active">Travel tips & inspiration</button>
            <button className="footer-tab">Airbnb-friendly apartments</button>
          </div>
          <div className="footer-links-grid">
            <div className="footer-link-group">
              <h4>Family travel hub</h4>
              <p>Tips and inspiration</p>
            </div>
            <div className="footer-link-group">
              <h4>Family budget travel</h4>
              <p>Get there for less</p>
            </div>
            <div className="footer-link-group">
              <h4>Vacation ideas for any budget</h4>
              <p>Make it special without missing it</p>
            </div>
            <div className="footer-link-group">
              <h4>Travel Europe on a budget</h4>
              <p>How to take the kids to Europe for less</p>
            </div>
            <div className="footer-link-group">
              <h4>Outdoor adventure</h4>
              <p>Explore nature with the family</p>
            </div>
            <div className="footer-link-group">
              <h4>Bucket list national parks</h4>
              <p>Must-see parks for family travel</p>
            </div>
            <div className="footer-link-group">
              <h4>Kid-friendly state parks</h4>
              <p>Check out these family-friendly hikes</p>
            </div>
          </div>
        </div>

        {/* Support, Hosting, Airbnb sections */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-column-heading">Support</h3>
            <ul className="footer-column-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Get help with a safety issue</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighborhood concern</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-heading">Hosting</h3>
            <ul className="footer-column-links">
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">Airbnb your experience</a></li>
              <li><a href="#">Airbnb your service</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
              <li><a href="#">Airbnb-friendly apartments</a></li>
              <li><a href="#">Join a free hosting class</a></li>
              <li><a href="#">Find a co-host</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-heading">Airbnb</h3>
            <ul className="footer-column-links">
              <li><a href="#">2025 Summer Release</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Gift cards</a></li>
              <li><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and language */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© {new Date().getFullYear()} Airbnb, Inc.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms</a>
            <span className="footer-dot">·</span>
            <a href="#">Sitemap</a>
            <span className="footer-dot">·</span>
            <a href="#">Privacy</a>
            <span className="footer-dot">·</span>
            <a href="#">Your Privacy Choices</a>
          </div>
        </div>
        <div className="footer-bottom-right">
          <button className="footer-language-btn">
            <span className="footer-icon">🌐</span>
            English (US)
          </button>
          <button className="footer-currency-btn">
            <span className="footer-icon">₱</span>
            PHP
          </button>
          <div className="footer-social">
            <a href="#" className="footer-social-link">f</a>
            <a href="#" className="footer-social-link">𝕏</a>
            <a href="#" className="footer-social-link">i</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


