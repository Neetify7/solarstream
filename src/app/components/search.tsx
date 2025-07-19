'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w300';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();

      // Filter out people
      const filteredResults = data.results.filter(item => item.media_type !== 'person');

      setResults(filteredResults);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDownHandler(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <div>
      <div className="center">
        <div className="input-button-container">
          <input
            type="text"
            placeholder="Search movies, tv, and anime"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {results && results.length === 0 && (
        <p style={{ textAlign: 'center' }}>No results found.</p>
      )}

      {results && results.length > 0 && (
        <div className="results-grid">
          {results.map(item => {
            const posterPath = item.poster_path || item.still_path;
            const tmdbUrl = `https://www.themoviedb.org/${item.media_type}/${item.id}`;

            return (
              <a
                key={item.id}
                href={tmdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
              >
                {posterPath ? (
                  <img
                    src={`${TMDB_IMAGE_BASE}${posterPath}`}
                    alt={item.title || item.name}
                    className="poster-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="no-image">No Image</div>
                )}
                <div className="item-info">
                  <strong>{item.title || item.name}</strong>
                  <br />
                  <small>{item.media_type}</small>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}