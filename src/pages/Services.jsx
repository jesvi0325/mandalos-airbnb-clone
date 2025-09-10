import Card from '../components/Card.jsx'

const services = {
  Hosting: [
    { image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=800', title: 'Become a host', location: 'Guides', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=800', title: 'AirCover for hosts', location: 'Protection', price: 'Included', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800', title: 'Host training', location: 'Education', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800', title: 'Property setup', location: 'Assistance', price: '₱2,500', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=800', title: 'Photography service', location: 'Professional', price: '₱3,500', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=800', title: 'Pricing strategy', location: 'Consultation', price: '₱1,800', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800', title: 'Superhost program', location: 'Benefits', price: 'Free', rating: '—' },
  ],
  Support: [
    { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800', title: '24/7 support', location: 'Help Center', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=800', title: 'Community forum', location: 'Hosts', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800', title: 'Live chat', location: 'Instant help', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800', title: 'Technical support', location: 'App & website', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800', title: 'Dispute resolution', location: 'Mediation', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800', title: 'Host mentoring', location: 'Guidance', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800', title: 'Emergency assistance', location: '24/7 hotline', price: 'Free', rating: '—' },
  ],
  Tools: [
    { image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800', title: 'Pro tools', location: 'Advanced hosting', price: '₱—', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800', title: 'Insights and analytics', location: 'Dashboards', price: '₱—', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800', title: 'Calendar management', location: 'Scheduling', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', title: 'Mobile app', location: 'On-the-go', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800', title: 'Financial reports', location: 'Accounting', price: '₱1,200/mo', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800', title: 'Smart pricing', location: 'Optimization', price: '₱900/mo', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', title: 'API integration', location: 'Developers', price: 'Custom', rating: '—' },
  ],
  Safety: [
    { image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800', title: 'Safety resources', location: 'Guests & hosts', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800', title: 'Responsible hosting', location: 'Guidelines', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=800', title: 'Identity verification', location: 'Security', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800', title: 'Neighborhood watch', location: 'Community', price: 'Free', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800', title: 'Safety equipment', location: 'Supplies', price: 'Varies', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800', title: 'Insurance options', location: 'Protection', price: 'Varies', rating: '—' },
    { image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800', title: 'COVID-19 safety', location: 'Protocols', price: 'Free', rating: '—' },
  ],
}

function Services({ query }) {
  return (
    <div>
      {Object.entries(services).map(([cat, items]) => (
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

export default Services


