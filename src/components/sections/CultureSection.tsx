import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Leaf, Users, Music } from 'lucide-react';
import villageLife from '@/assets/village-life.jpg';

const cultureCards = [
  {
    icon: Leaf,
    title: 'Agricultural Life',
    description: 'Rice cultivation, coconut farming, and traditional agriculture form the backbone of village economy.',
    color: 'bg-coconut/10',
    iconColor: 'text-coconut',
  },
  {
    icon: Sparkles,
    title: 'Festivals & Traditions',
    description: 'Sankranti, Ugadi, and village festivals celebrated with joy, bringing the community together.',
    color: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: Users,
    title: 'Community Unity',
    description: 'Strong bonds between families, shared responsibilities, and a culture of helping neighbors.',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Music,
    title: 'Simple Living',
    description: 'Life moves at its own peaceful pace — mornings with temple bells, evenings with folk songs.',
    color: 'bg-earth/10',
    iconColor: 'text-earth',
  },
];

const CultureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="culture" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-earth/20 text-earth text-sm font-body tracking-wide mb-4">
            Village Life
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Life & Culture
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the authentic rhythm of village life — where community, 
            tradition, and nature come together in beautiful harmony.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={villageLife}
                alt="Farmers working in rice paddy fields in Mulakallanka"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-primary-foreground text-2xl font-semibold mb-2">
                  A Day in the Village
                </p>
                <p className="font-body text-primary-foreground/80">
                  From dawn's first light to evening's peaceful twilight, 
                  every moment in Mulakallanka tells a story of dedication and harmony.
                </p>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-card"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-display text-2xl font-bold text-accent">☀️</p>
              <p className="font-body text-xs text-muted-foreground">Early Risers</p>
            </motion.div>
          </motion.div>

          {/* Culture Cards */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {cultureCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="group flex gap-4 p-5 rounded-xl bg-background shadow-soft border border-border hover:shadow-card transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className={`shrink-0 w-14 h-14 rounded-xl ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Banner */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-earth/10 via-accent/5 to-earth/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl italic text-foreground mb-4">
            "In Mulakallanka, we don't just live — we belong."
          </p>
          <p className="font-body text-muted-foreground">
            A village where every sunrise brings new blessings and every sunset carries gratitude
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
