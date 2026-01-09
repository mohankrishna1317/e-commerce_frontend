import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Car, Compass } from 'lucide-react';

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-river/20 text-river text-sm font-body tracking-wide mb-4">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Location & Connectivity
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Easily reachable yet untouched by city chaos — 
            Mulakallanka awaits those seeking peace and authentic village life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-river/10 via-background to-coconut/10 p-8 shadow-elevated border border-border">
              {/* Stylized Map */}
              <div className="aspect-[4/3] relative">
                {/* India outline suggestion */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* AP Region */}
                    <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-accent/10 blur-xl" />
                    
                    {/* East Godavari marker */}
                    <motion.div
                      className="absolute top-1/3 right-1/3"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-primary/20 absolute -inset-4 animate-pulse" />
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <MapPin className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Labels */}
                    <div className="absolute bottom-8 left-8">
                      <p className="font-display text-lg font-semibold text-foreground">East Godavari</p>
                      <p className="font-body text-sm text-muted-foreground">Andhra Pradesh, India</p>
                    </div>
                    
                    {/* Decorative rivers */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                      <path
                        d="M0,150 Q100,120 200,140 T400,130"
                        fill="none"
                        stroke="hsl(200, 55%, 45%)"
                        strokeWidth="3"
                        strokeDasharray="8,4"
                      />
                      <path
                        d="M0,180 Q150,200 250,170 T400,180"
                        fill="none"
                        stroke="hsl(200, 55%, 45%)"
                        strokeWidth="2"
                        strokeDasharray="6,3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Village</h3>
                  <p className="font-body text-muted-foreground">
                    Mulakallanka (మూలకల్లంక)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-background shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Mandal</h3>
                  <p className="font-body text-muted-foreground">
                    Seethanagaram Mandal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-background shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">District & State</h3>
                  <p className="font-body text-muted-foreground">
                    East Godavari District, Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-background shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full bg-earth/10 flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6 text-earth" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">How to Reach</h3>
                  <p className="font-body text-muted-foreground">
                    Accessible by road and boat. The journey itself is part of the beautiful experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border">
              <p className="font-display text-lg italic text-foreground">
                "A journey to Mulakallanka is not just travel — it's a pilgrimage to peace."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
