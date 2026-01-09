import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import heroVillage from '@/assets/hero-village.jpg';
import heritageHouse from '@/assets/heritage-house.jpg';
import riverView from '@/assets/river-view.jpg';
import villageLife from '@/assets/village-life.jpg';
import sunriseRiver from '@/assets/sunrise-river.jpg';
import villageAerial from '@/assets/village-aerial.jpg';

const galleryImages = [
  { src: heroVillage, alt: 'Aerial view of Mulakallanka island village', category: 'Nature' },
  { src: heritageHouse, alt: 'Traditional heritage house with terracotta roof', category: 'Heritage' },
  { src: riverView, alt: 'Calm river with traditional boats', category: 'River' },
  { src: villageLife, alt: 'Farmers in rice paddy fields', category: 'Life' },
  { src: sunriseRiver, alt: 'Golden sunrise over the river', category: 'Nature' },
  { src: villageAerial, alt: 'Village aerial green fields view', category: 'Nature' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 px-4 bg-gradient-section heritage-pattern">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-body tracking-wide mb-4">
              Photo Gallery
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Glimpses of Mulakallanka
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Capture the beauty, serenity, and timeless charm of our beloved village 
              through these moments frozen in time.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index === 0 || index === 3 ? 'md:row-span-2' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 || index === 3 ? 'h-64 md:h-full' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-body mb-1">
                    {image.category}
                  </span>
                  <p className="font-body text-primary-foreground text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="font-body text-primary-foreground">{galleryImages[selectedImage].alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
