'use client'
import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
      <nav>
        <div className="nav-left">
          <Link href="/">home</Link>
          <Link href="/movie">movie</Link>
          <Link href="/tv">tv</Link>
          <Link href="/anime">anime</Link>
        </div>
        <div className="nav-mid">
          <Link href="/">solarstream</Link>
        </div>
        <div className="nav-right">
          <Link href="https://github.com/Neetify7/solarstream" target="_blank"><GitHub/></Link>
        </div>
      </nav>
      <div className="center">
        <p>hello</p>
      </div>
    </>
  );
}