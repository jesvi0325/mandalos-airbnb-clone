function Card({ image, title, location, price, rating, badge }) {
  return (
    <article className="card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-body">
        {badge && <div className="card-sub" style={{ marginBottom: 6 }}>{badge}</div>}
        <div className="card-title">{title}</div>
        <div className="card-sub">{location}</div>
        <div className="card-sub">From {price} · ★ {rating}</div>
      </div>
    </article>
  )
}

export default Card


