"use client";

import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface BannerCarouselProps {
  category?: "movie" | "tv" | "16";
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ category = "movie" }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/tmdb?category=${category}`);
        const data = await res.json();
        setMovies(data.results || []);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
      }
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);

  if (!movies.length) return <div>Loading...</div>;

  const currentMovie = movies[currentIndex];

  const watchNow = () => {
    window.open(`https://www.themoviedb.org/movie/${currentMovie.id}`, "_blank");
  };

  return (
    <>
      <div className="carousel">
        <img
          src={`${IMAGE_BASE_URL}${currentMovie.backdrop_path}`}
          alt={currentMovie.title}
          className="banner-image"
          draggable={false}
        />
        <div className="fade-bottom" />
        <div className="overlay">
          <h2 className="title">{currentMovie.title}</h2>
          <p className="overview">{currentMovie.overview}</p>
          <button onClick={watchNow} className="watch-button" aria-label="Watch Now">
            Watch Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          height: 888px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }
        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
          user-select: none;
          pointer-events: none;
        }
        .fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
          pointer-events: none;
        }
        .overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          max-width: 600px;
          color: #e1e1e1;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-family: "Montserrat", sans-serif;
        }
        .title {
          font-family: "Playfair Display", serif;
          font-size: 3rem;
          margin: 0;
          font-weight: 700;
          color: #e1e1e1;
        }
        .overview {
          font-size: 1.125rem;
          line-height: 1.4;
          max-height: 7.2em;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .watch-button {
          background-color: #e50914;
          color: white;
          border: none;
          padding: 12px 28px;
          font-size: 1.25rem;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          width: fit-content;
          transition: background-color 0.3s ease;
          font-family: "Montserrat", sans-serif;
        }
        .watch-button:hover {
          background-color: #f40612;
        }
        @media (max-width: 768px) {
          .carousel {
            height: 450px;
            border-radius: 0;
          }
          .overlay {
            bottom: 20px;
            left: 20px;
            max-width: 90%;
          }
          .title {
            font-size: 2rem;
          }
          .overview {
            font-size: 1rem;
            max-height: 5em;
          }
          .watch-button {
            font-size: 1rem;
            padding: 10px 22px;
          }
        }
      `}</style>
    </>
  );
};

export default BannerCarousel;