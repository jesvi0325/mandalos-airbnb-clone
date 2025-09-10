function LoginModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
          <div className="modal-title">Log in or sign up</div>
        </div>
        <div className="modal-body">
          <h3 className="modal-welcome">Welcome to Airbnb</h3>
          <div className="form-row">
            <select className="input select">
              <option>Philippines (+63)</option>
              <option>United States (+1)</option>
              <option>Japan (+81)</option>
            </select>
          </div>
          <div className="form-row">
            <input className="input field" type="tel" placeholder="Phone number" />
          </div>
          <button className="primary-btn" style={{ width: '100%', marginTop: 8 }}>Continue</button>

          <div className="or">or</div>

          <div className="stack">
            <button className="outline-btn">Continue with Google</button>
            <button className="outline-btn">Continue with Apple</button>
            <button className="outline-btn">Continue with email</button>
            <button className="outline-btn">Continue with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal


