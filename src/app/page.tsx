'use client'
import Navigation from '@/components/Navigation';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <div className="center">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
          <h1 className="title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Welcome to SolarStream
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your ad-free streaming destination for movies, TV shows, and anime. 
            Enjoy unlimited entertainment without interruptions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-red-400">Movies</h3>
              <p className="text-gray-400">Latest blockbusters and classics</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-red-400">TV Shows</h3>
              <p className="text-gray-400">Binge-worthy series and episodes</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-red-400">Anime</h3>
              <p className="text-gray-400">Popular anime series and movies</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}