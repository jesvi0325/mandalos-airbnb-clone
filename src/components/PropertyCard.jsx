function PropertyCard({ image, type, location, price, nights, rating, isFavorite = false }) {
  return (
    <article className="property-card">
      <div className="property-img-container">
        <img className="property-img" src={image} alt={location} />
        <button className={`favorite-btn ${isFavorite ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill={isFavorite ? "currentColor" : "none"} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div className="guest-favorite">Guest favorite</div>
      </div>
      <div className="property-body">
        <div className="property-title">{type} in {location}</div>
        <div className="property-rating">★ {rating}</div>
        <div className="property-price">{price} for {nights} nights</div>
      </div>
    </article>
  )
}

export default PropertyCard