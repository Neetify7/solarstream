'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/nav';
import Search from './components/search';

export default function MyApp() {
  return (
    <>
      <Nav/>
      <Search/>
    </>
  );
}