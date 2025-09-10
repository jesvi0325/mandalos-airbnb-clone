import Card from '../components/Card.jsx'

const categories = {
  Adventure: [
    { image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800', title: 'Mountain biking tour', location: 'Baguio, PH', price: '₱3,500 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800', title: 'Surf lessons', location: 'Siargao, PH', price: '₱2,200 / guest', rating: '5.0' },
    { image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800', title: 'Rock climbing', location: 'Rizal, PH', price: '₱2,800 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800', title: 'Kayaking expedition', location: 'Coron, PH', price: '₱2,500 / guest', rating: '4.7' },
    { image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800', title: 'Paragliding experience', location: 'Carmona, PH', price: '₱4,200 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800', title: 'Trekking Mt. Pulag', location: 'Benguet, PH', price: '₱3,800 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=800', title: 'Whitewater rafting', location: 'Cagayan de Oro, PH', price: '₱2,900 / guest', rating: '4.9' },
  ],
  Culture: [
    { image: 'https://images.unsplash.com/photo-1520975922323-3d89f0170e8b?q=80&w=800', title: 'Old Manila history walk', location: 'Manila, PH', price: '₱1,200 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=800', title: 'Local cooking class', location: 'Cebu City', price: '₱1,600 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800', title: 'Traditional dance workshop', location: 'Davao, PH', price: '₱1,400 / guest', rating: '4.7' },
    { image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=800', title: 'Pottery making', location: 'Iloilo, PH', price: '₱1,800 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800', title: 'Filipino cuisine tour', location: 'Pampanga, PH', price: '₱2,200 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800', title: 'Music and instruments', location: 'Bohol, PH', price: '₱1,300 / guest', rating: '4.6' },
    { image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800', title: 'Tribal village visit', location: 'Bukidnon, PH', price: '₱2,000 / guest', rating: '4.8' },
  ],
  Nature: [
    { image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800', title: 'Waterfall hike', location: 'Laguna, PH', price: '₱1,800 / guest', rating: '4.7' },
    { image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800', title: 'Island hopping', location: 'Palawan, PH', price: '₱3,900 / guest', rating: '5.0' },
    { image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=800', title: 'Volcano tour', location: 'Albay, PH', price: '₱2,500 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=800', title: 'Rice terraces trek', location: 'Ifugao, PH', price: '₱2,200 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1504751331200-8bfc40de890a?q=80&w=800', title: 'Underground river tour', location: 'Palawan, PH', price: '₱2,800 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800', title: 'Mangrove kayaking', location: 'Bohol, PH', price: '₱1,900 / guest', rating: '4.7' },
    { image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=800', title: 'Firefly watching', location: 'Occidental Mindoro, PH', price: '₱1,600 / guest', rating: '4.8' },
  ],
  Wellness: [
    { image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800', title: 'Sunrise yoga', location: 'Cebu City', price: '₱900 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800', title: 'Spa and soak', location: 'Laguna hot springs', price: '₱1,500 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800', title: 'Meditation retreat', location: 'Batangas, PH', price: '₱2,200 / guest', rating: '4.9' },
    { image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800', title: 'Hilot massage class', location: 'Quezon City, PH', price: '₱1,800 / guest', rating: '4.7' },
    { image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800', title: 'Beach yoga', location: 'Boracay, PH', price: '₱1,200 / guest', rating: '4.8' },
    { image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800', title: 'Forest bathing', location: 'Antipolo, PH', price: '₱1,400 / guest', rating: '4.6' },
    { image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=800', title: 'Organic farm retreat', location: 'Cavite, PH', price: '₱2,500 / guest', rating: '4.8' },
  ],
}

function Experiences({ query }) {
  return (
    <div>
      {Object.entries(categories).map(([cat, items]) => (
        <section key={cat}>
          <div className="section-title"><h2>{cat}</h2></div>
          <div className="grid">
            {items
              .filter((it) => {
                if (!query) return true
                const q = query.toLowerCase()
                return (
                  it.title.toLowerCase().includes(q) ||
                  it.location.toLowerCase().includes(q)
                )
              })
              .map((item, i) => (
                <Card key={i} {...item} />
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Experiences


