import Card from '../components/Card.jsx'

const originals = [
  { image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800', title: 'Lunch with fashion icon', location: 'Rio de Janeiro, Brazil', price: '₱5,972 / guest', rating: '5.0', badge: 'Original' },
  { image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800', title: 'Hit the ice with Paralympian', location: 'Turin, Italy', price: '₱1,735 / guest', rating: '5.0', badge: 'Original' },
  { image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', title: 'Create seasonal ikebana', location: 'Paris, France', price: '₱8,476 / guest', rating: '5.0', badge: 'Original' },
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800', title: 'Fence and take photos', location: 'Milan, Italy', price: '₱5,806 / guest', rating: '5.0', badge: 'Original' },
  { image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800', title: 'Cook with Michelin chef', location: 'Barcelona, Spain', price: '₱7,250 / guest', rating: '4.98', badge: 'Original' },
  { image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=800', title: 'Surf with pro athletes', location: 'Bali, Indonesia', price: '₱4,500 / guest', rating: '4.95', badge: 'Original' },
  { image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800', title: 'Paint with local artist', location: 'Kyoto, Japan', price: '₱3,800 / guest', rating: '4.97', badge: 'Original' },
]

const cebu = [
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800', title: 'Walking Street Food', location: 'Cebu City', price: '₱1,800 / guest', rating: '4.98', badge: 'Popular' },
  { image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=800', title: 'Whalesharks and Falls', location: 'Oslob, Cebu', price: '₱9,000 / guest', rating: '4.94', badge: 'Popular' },
  { image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800', title: 'Natural wonders tour', location: 'Bohol + Cebu', price: '₱9,800 / guest', rating: '4.85', badge: 'Popular' },
  { image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800', title: 'Swim with whale sharks', location: 'Sumilon Island', price: '₱9,000 / guest', rating: '4.85', badge: 'Popular' },
  { image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800', title: 'Island hopping adventure', location: 'Mactan, Cebu', price: '₱2,500 / guest', rating: '4.92', badge: 'Popular' },
  { image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=800', title: 'Scuba diving experience', location: 'Moalboal, Cebu', price: '₱3,500 / guest', rating: '4.89', badge: 'Popular' },
  { image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800', title: 'Kawasan Falls canyoneering', location: 'Badian, Cebu', price: '₱2,000 / guest', rating: '4.95', badge: 'Popular' },
]

function Section({ title, items, query }) {
  return (
    <section>
      <div className="section-title"><h2>{title}</h2></div>
      <div className="grid">
        {items
          .filter((it) => {
            if (!query) return true
            const q = query.toLowerCase()
            return (
              it.title.toLowerCase().includes(q) ||
              it.location.toLowerCase().includes(q) ||
              (it.badge || '').toLowerCase().includes(q)
            )
          })
          .map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  )
}

function Home({ query }) {
  return (
    <div>
      <Section title="Airbnb Originals" items={originals} query={query} />
      <Section title="All experiences in Cebu City" items={cebu} query={query} />
    </div>
  )
}

export default Home


