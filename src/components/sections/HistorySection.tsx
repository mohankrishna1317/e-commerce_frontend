import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Home, Users, Heart } from 'lucide-react';
import heritageHouse from '@/assets/heritage-house.jpg';

const timelineItems = [
  {
    icon: Clock,
    year: '~1720s',
    title: 'Village Foundation',
    description: 'Mulakallanka was established by our ancestors who found this island to be a perfect sanctuary surrounded by natural waters.',
  },
  {
    icon: Home,
    year: '~1900s',
    title: 'Heritage Houses Built',
    description: 'Traditional homes with terracotta roofs and lime-washed walls were constructed, many of which still stand today.',
  },
  {
    icon: Users,
    year: 'Generations',
    title: 'Community Growth',
    description: 'Families thrived, passing down traditions, agricultural knowledge, and the art of living in harmony with nature.',
  },
  {
    icon: Heart,
    year: 'Today',
    title: 'Living Heritage',
    description: 'The village continues to preserve its 300-year legacy while welcoming those who seek peace and authenticity.',
  },
];

const HistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="history" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-body tracking-wide mb-4">
            300 Years of Heritage
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            History & Heritage
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Three centuries of stories, traditions, and unwavering spirit — 
            Mulakallanka stands as a living testament to our ancestors' vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-soft">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="p-5 rounded-xl bg-background shadow-soft border border-border hover:shadow-card transition-all duration-300">
                    <span className="font-display text-sm font-semibold text-accent">{item.year}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Image & Quote */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heritageHouse}
                alt="Traditional 100-year-old heritage house in Mulakallanka"
                className="w-full h-72 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-primary-foreground text-lg font-semibold">
                  100+ Year Old Houses
                </p>
                <p className="font-body text-primary-foreground/80 text-sm">
                  Traditional architecture preserved through generations
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-river-light text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <svg className="w-10 h-10 text-primary-foreground/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-display text-xl md:text-2xl italic mb-4">
                  The walls of these houses have heard lullabies of generations, 
                  witnessed celebrations, and sheltered dreams for over a century.
                </p>
                <p className="font-body text-primary-foreground/70 text-sm">
                  — Echoes of Mulakallanka's Heritage
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-background shadow-soft border border-border text-center">
                <p className="font-display text-3xl font-bold text-primary">300+</p>
                <p className="font-body text-sm text-muted-foreground">Years of History</p>
              </div>
              <div className="p-6 rounded-xl bg-background shadow-soft border border-border text-center">
                <p className="font-display text-3xl font-bold text-secondary">100+</p>
                <p className="font-body text-sm text-muted-foreground">Heritage Houses</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
