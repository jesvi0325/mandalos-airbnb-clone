import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <label className="search-segment">
        <div className="segment-label">Where</div>
        <input
          className="segment-input input"
          type="text"
          placeholder="Search destinations"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button className="search-btn" aria-label="Search" type="submit">🔍</button>
    </form>
  )
}

export default SearchBar


