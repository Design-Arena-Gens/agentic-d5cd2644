'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Design {
  id: number;
  title: string;
  category: string;
  rating: number;
  sales: string;
  trend: string;
  imageUrl: string;
  description: string;
}

const designs: Design[] = [
  {
    id: 1,
    title: "AI Neural Network",
    category: "Tech",
    rating: 4.9,
    sales: "500K+",
    trend: "🔥 Hot",
    imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    description: "Futurystyczne wzory inspirowane sztuczną inteligencją"
  },
  {
    id: 2,
    title: "Minimalist Nature",
    category: "Nature",
    rating: 4.8,
    sales: "450K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Proste, eleganckie motywy natury"
  },
  {
    id: 3,
    title: "Retro Synthwave",
    category: "Retro",
    rating: 4.9,
    sales: "480K+",
    trend: "🔥 Hot",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    description: "Neonowe kolory i geometria lat 80."
  },
  {
    id: 4,
    title: "Japanese Streetwear",
    category: "Culture",
    rating: 4.8,
    sales: "420K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=400&h=400&fit=crop",
    description: "Japońska estetyka i kanji"
  },
  {
    id: 5,
    title: "Cyberpunk City",
    category: "Urban",
    rating: 4.7,
    sales: "390K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=400&h=400&fit=crop",
    description: "Futurystyczne miejskie krajobrazy"
  },
  {
    id: 6,
    title: "Abstract Geometry",
    category: "Abstract",
    rating: 4.8,
    sales: "410K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "Nowoczesne geometryczne wzory"
  },
  {
    id: 7,
    title: "Cosmic Space",
    category: "Space",
    rating: 4.9,
    sales: "460K+",
    trend: "🔥 Hot",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=400&fit=crop",
    description: "Galaktyki i motyw kosmiczny"
  },
  {
    id: 8,
    title: "Vintage Typography",
    category: "Typography",
    rating: 4.7,
    sales: "380K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop",
    description: "Klasyczna typografia vintage"
  },
  {
    id: 9,
    title: "Animal Portraits",
    category: "Animals",
    rating: 4.8,
    sales: "430K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop",
    description: "Artystyczne portrety zwierząt"
  },
  {
    id: 10,
    title: "Grunge Aesthetics",
    category: "Alt",
    rating: 4.6,
    sales: "350K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop",
    description: "Surowy styl grunge i distressed"
  },
  {
    id: 11,
    title: "Botanical Prints",
    category: "Nature",
    rating: 4.7,
    sales: "370K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
    description: "Eleganckie motywy roślinne"
  },
  {
    id: 12,
    title: "Pixel Art Retro",
    category: "Gaming",
    rating: 4.8,
    sales: "440K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop",
    description: "8-bit i 16-bit gaming nostalgia"
  },
  {
    id: 13,
    title: "Motivational Quotes",
    category: "Typography",
    rating: 4.7,
    sales: "400K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Inspirujące cytaty i typografia"
  },
  {
    id: 14,
    title: "Neon Lights",
    category: "Urban",
    rating: 4.9,
    sales: "470K+",
    trend: "🔥 Hot",
    imageUrl: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=400&h=400&fit=crop",
    description: "Świecące neonowe znaki"
  },
  {
    id: 15,
    title: "Mandala Art",
    category: "Spiritual",
    rating: 4.6,
    sales: "340K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    description: "Złożone wzory mandali"
  },
  {
    id: 16,
    title: "Street Art Graffiti",
    category: "Urban",
    rating: 4.8,
    sales: "420K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&h=400&fit=crop",
    description: "Autentyczny street art"
  },
  {
    id: 17,
    title: "Minimalist Icons",
    category: "Minimalist",
    rating: 4.7,
    sales: "390K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    description: "Proste, czyste ikony i symbole"
  },
  {
    id: 18,
    title: "Anime Characters",
    category: "Anime",
    rating: 4.9,
    sales: "490K+",
    trend: "🔥 Hot",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop",
    description: "Popularne postacie anime"
  },
  {
    id: 19,
    title: "Skull & Roses",
    category: "Alt",
    rating: 4.6,
    sales: "360K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1490077476659-095159692ab5?w=400&h=400&fit=crop",
    description: "Klasyczne motywy rock"
  },
  {
    id: 20,
    title: "Watercolor Dreams",
    category: "Art",
    rating: 4.7,
    sales: "380K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop",
    description: "Artystyczne akwarelowe wzory"
  },
  {
    id: 21,
    title: "Crypto & Blockchain",
    category: "Tech",
    rating: 4.8,
    sales: "410K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
    description: "Bitcoin, NFT i crypto motywy"
  },
  {
    id: 22,
    title: "Mountain Landscape",
    category: "Nature",
    rating: 4.7,
    sales: "370K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    description: "Majestatyczne krajobrazy górskie"
  },
  {
    id: 23,
    title: "Pop Art Style",
    category: "Art",
    rating: 4.8,
    sales: "430K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    description: "Kolorowy styl pop art"
  },
  {
    id: 24,
    title: "Sacred Geometry",
    category: "Spiritual",
    rating: 4.6,
    sales: "350K+",
    trend: "📈 Trending",
    imageUrl: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400&h=400&fit=crop",
    description: "Święta geometria i symbole"
  },
  {
    id: 25,
    title: "Eco-Friendly Earth",
    category: "Nature",
    rating: 4.8,
    sales: "400K+",
    trend: "⭐ Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop",
    description: "Ekologiczne motywy i planeta"
  }
];

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('sales');

  const categories = ['All', 'Tech', 'Nature', 'Urban', 'Culture', 'Art', 'Gaming', 'Alt', 'Anime', 'Spiritual'];

  const filteredDesigns = designs
    .filter(design => filter === 'All' || design.category === filter)
    .sort((a, b) => {
      if (sortBy === 'sales') {
        return parseInt(b.sales) - parseInt(a.sales);
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent mb-2">
            Top 25 Trendów Graficznych 2025
          </h1>
          <p className="text-center text-gray-300 text-lg">
            Najlepiej sprzedające się wzory na koszulki i bluzy
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSortBy('sales')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'sales'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              📊 Sprzedaż
            </button>
            <button
              onClick={() => setSortBy('rating')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'rating'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              ⭐ Oceny
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                <Image
                  src={design.imageUrl}
                  alt={design.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black/70 px-3 py-1 rounded-full text-sm">
                  {design.trend}
                </div>
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  #{design.id}
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {design.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {design.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs bg-purple-600/30 text-purple-200 px-2 py-1 rounded">
                    {design.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span>⭐</span>
                    <span className="font-bold">{design.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-purple-500/20">
                  <span className="text-gray-300 text-sm">💰 Sprzedaż</span>
                  <span className="text-green-400 font-bold">{design.sales}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-purple-100">Całkowita sprzedaż</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">4.8</div>
            <div className="text-pink-100">Średnia ocena</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">2025</div>
            <div className="text-indigo-100">Trendy roku</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-black/40 backdrop-blur-sm border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 T-Shirt Trends. Najpopularniejsze wzory z najlepszymi ocenami.</p>
        </div>
      </footer>
    </main>
  );
}
