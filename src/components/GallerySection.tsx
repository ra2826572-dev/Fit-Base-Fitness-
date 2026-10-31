import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryImages = [
    { url: GYM_INFO.images.exterior, title: 'Gym Entrance & Facility Front' },
    { url: GYM_INFO.images.strength, title: 'Heavy Free Weights & Benches' },
    { url: GYM_INFO.images.cardio, title: 'Cardio & Stamina Zone' },
    { url: GYM_INFO.images.about, title: 'Main Training Floor' },
    { url: GYM_INFO.images.strength, title: 'Power Racks & Squat Bays' },
    { url: GYM_INFO.images.cardio, title: 'Dumbbell Rack & Isolation' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0c13] relative border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
            FACILITY GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
            INSIDE <span className="text-cyan-400">FIT BASE.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Take a visual tour of our heavy-duty equipment, cardio bays, and training floor on Canal Road.
          </p>
        </div>

        {/* 6-8 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.url)}
              className="relative h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group cursor-pointer shadow-lg"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                  [YAHAN REAL PHOTO]
                </span>
                <h4 className="text-sm font-bold text-white font-heading mt-1">
                  {img.title}
                </h4>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-zinc-900/80 backdrop-blur-md text-zinc-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
            >
              Close ✕
            </button>
            <img
              src={activeImage}
              alt="Expanded Gym View"
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-zinc-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
