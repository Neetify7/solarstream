'use client'
import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerCarousel from './components/banner';
import Nav from './components/nav';

export default function MyApp() {
  return (
    <>
      <Nav/>
      <BannerCarousel/>
    </>
  );
}