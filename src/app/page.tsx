'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/nav';

function GitHub() {
  const [hover, setHover] = useState(false);

  return (
    <FontAwesomeIcon
      icon={faGithub}
      size="lg"
      style={{
        color: hover ? '#ff5d5d' : '#e1e1e1',
        transition: 'color 0.2s ease',
        fill: 'currentColor',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}

export default function MyApp() {
  return (
    <>
      <Nav/>
      <div className="center">
        <div className="input-button-container">
          <input type="text" placeholder="Search movies, tv, and anime" />
          <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
      </div>
    </>
  );
}