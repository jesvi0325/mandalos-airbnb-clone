import PropertyCard from '../components/PropertyCard.jsx'

const properties = [
  { 
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800', 
    type: 'Condo', 
    location: 'Silang Junction North', 
    price: '₱3,000', 
    nights: '2', 
    rating: '4.91'
  },
  { 
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800', 
    type: 'Condo', 
    location: 'Silang Junction North', 
    price: '₱3,995', 
    nights: '2', 
    rating: '4.91'
  },
  { 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800', 
    type: 'Room', 
    location: 'Tagaytay', 
    price: '₱5,296', 
    nights: '2', 
    rating: '5.0'
  },
  { 
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800', 
    type: 'Guesthouse', 
    location: 'Tagaytay', 
    price: '₱4,677', 
    nights: '2', 
    rating: '4.99'
  },
  { 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800', 
    type: 'Condo', 
    location: 'Silang Junction North', 
    price: '₱5,800', 
    nights: '3', 
    rating: '4.96'
  },
  { 
    image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=800', 
    type: 'Condo', 
    location: 'Tagaytay', 
    price: '₱4,500', 
    nights: '2', 
    rating: '4.97'
  },
  { 
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800', 
    type: 'Room', 
    location: 'Tagaytay', 
    price: '₱3,253', 
    nights: '2', 
    rating: '4.98'
  }
]

function Properties() {
  return (
    <div>
      <div className="section-title"><h2>Featured Properties</h2></div>
      <div className="grid">
        {properties.map((property, i) => (
          <PropertyCard key={i} {...property} isFavorite={i === 4} />
        ))}
      </div>
    </div>
  )
}

export default Properties