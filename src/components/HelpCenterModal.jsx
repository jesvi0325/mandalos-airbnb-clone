function HelpCenterModal({ open, onClose, onOpenLogin }) {
  if (!open) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
          <div className="modal-title">Help Center</div>
        </div>
        <div className="modal-body">
          <h3 className="modal-welcome">How can we help you?</h3>
          
          <div className="help-categories">
            <div className="help-category">
              <h4>Booking & Reservations</h4>
              <ul>
                <li>How to book</li>
                <li>Cancellation options</li>
                <li>Payment issues</li>
              </ul>
            </div>
            
            <div className="help-category">
              <h4>Account & Profile</h4>
              <ul>
                <li>Account settings</li>
                <li>Login problems</li>
                <li>Profile verification</li>
              </ul>
            </div>
          </div>
          
          <div className="help-footer">
            <p>Need to log in first?</p>
            <button className="outline-btn" onClick={onOpenLogin}>Go to login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenterModal