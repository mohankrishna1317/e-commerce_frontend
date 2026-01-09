import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Waves, TreePine, Bird, Sun } from 'lucide-react';
import riverView from '@/assets/river-view.jpg';
import sunriseRiver from '@/assets/sunrise-river.jpg';
import villageRiverside from '@/assets/village-riverside.jpg';

const features = [
  {
    icon: Waves,
    title: 'Surrounded by Water',
    description: 'Rivers embrace the village from all four sides, creating a natural island sanctuary.',
  },
  {
    icon: TreePine,
    title: 'Lush Greenery',
    description: 'Coconut groves, paddy fields, and tropical vegetation paint the landscape.',
  },
  {
    icon: Bird,
    title: 'Bird Sounds',
    description: 'Wake up to the melodious songs of exotic birds and the whisper of palm fronds.',
  },
  {
    icon: Sun,
    title: 'Golden Views',
    description: 'Witness breathtaking sunrises and sunsets reflected on calm waters.',
  },
];

const NatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nature" className="py-24 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-body tracking-wide mb-4">
            Island Geography
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nature & Geography
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A rare geographical wonder — an island village where water, greenery, 
            and fresh air create a perfect natural ecosystem.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-elevated group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={riverView}
              alt="Serene river view with traditional boats near Mulakallanka"
              className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-primary-foreground text-xl font-semibold">Calm Waters</p>
              <p className="font-body text-primary-foreground/80">Rivers that have protected the village for centuries</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-card group flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src={sunriseRiver}
                alt="Sunrise over the river at Mulakallanka"
                className="w-full h-full min-h-44 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-primary-foreground font-semibold">Golden Sunsets</p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-card group flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={villageRiverside}
                alt="Village riverside with blue sky"
                className="w-full h-full min-h-44 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-primary-foreground font-semibold">Fresh Air & Freedom</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Island Map Visualization */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-card shadow-soft border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">The Island Village</h3>
            <p className="font-body text-muted-foreground">A unique geography protected by waters on all sides</p>
          </div>
          
          <div className="relative max-w-md mx-auto aspect-square">
            {/* Water circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-river/20 to-river-light/10 animate-pulse" />
            
            {/* Island */}
            <div className="absolute inset-8 md:inset-12 rounded-full bg-gradient-to-br from-coconut/30 to-coconut-light/20 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-secondary">🌴</p>
                <p className="font-display text-lg font-semibold text-foreground mt-2">Mulakallanka</p>
                <p className="font-body text-xs text-muted-foreground">Island Village</p>
              </div>
            </div>
            
            {/* Water labels */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-body text-xs text-river font-medium">River North 🌊</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-body text-xs text-river font-medium">River South 🌊</span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-body text-xs text-river font-medium">🌊 West</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 font-body text-xs text-river font-medium">East 🌊</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NatureSection;
