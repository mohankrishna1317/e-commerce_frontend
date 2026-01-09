import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Globe, Mountain, Phone } from 'lucide-react';
import villageAerial from '@/assets/village-aerial.jpg';

const infoCards = [
  { icon: MapPin, label: 'Region', value: 'Andhra Pradesh' },
  { icon: Globe, label: 'Language', value: 'Telugu' },
  { icon: Mountain, label: 'Elevation', value: '25 meters' },
  { icon: Phone, label: 'STD Code', value: '08565' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 bg-gradient-section heritage-pattern">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-body tracking-wide mb-4">
            About The Village
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Welcome to Mulakallanka
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeless island village nestled in the heart of East Godavari district, 
            where rivers embrace tradition and nature thrives in harmony.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={villageAerial}
                alt="Aerial view of Mulakallanka village"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:right-6 glass-card rounded-2xl p-4 shadow-card"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-display text-3xl font-bold text-primary">4 Sides</p>
              <p className="font-body text-sm text-muted-foreground">Surrounded by Water</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  మూలకల్లంక <span className="text-muted-foreground text-lg">(Mulakallanka)</span>
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Located in <strong className="text-foreground">Seethanagaram Mandal</strong> of 
                  <strong className="text-foreground"> East Godavari District</strong>, 
                  Mulakallanka is one of the most beautiful and peaceful villages in the region. 
                  This unique island village is completely surrounded by water on all four sides, 
                  creating a natural sanctuary of tranquility.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card shadow-soft border border-border">
                <p className="font-display text-lg italic text-primary mb-2">
                  "One of the most peaceful villages in East Godavari"
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  — A hidden gem where nature and tradition coexist beautifully
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {infoCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    className="p-4 rounded-xl bg-card shadow-soft border border-border hover:shadow-card transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <card.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="font-body text-xs text-muted-foreground">{card.label}</p>
                    <p className="font-display text-base font-semibold text-foreground">{card.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
