/**
 * Bento Grid Component
 * Asymmetric grid layout for showcasing what K Entertainment protects
 */
import { motion } from 'framer-motion';
import { 
  Film, 
  Music, 
  Gamepad2, 
  Users, 
  Archive,
  Sparkles,
  type LucideIcon 
} from 'lucide-react';

interface BentoItem {
  title: string;
  description: string;
  icon: LucideIcon;
  size: 'large' | 'medium' | 'small';
  gradient: string;
  stats?: string;
}

const bentoItems: BentoItem[] = [
  {
    title: 'Hollywood & Studios',
    description: 'Major motion pictures, theatrical releases, and studio libraries preserved with cinema-grade quality and complete metadata integrity.',
    icon: Film,
    size: 'large',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    stats: '50,000+ titles protected',
  },
  {
    title: 'Music Archives',
    description: 'Master recordings, album collections, and rare audio preserved in lossless formats with complete provenance tracking.',
    icon: Music,
    size: 'medium',
    gradient: 'from-purple-500/20 to-pink-500/20',
    stats: '10M+ tracks',
  },
  {
    title: 'Gaming Libraries',
    description: 'Video game preservation including source code, assets, and playable builds for future generations.',
    icon: Gamepad2,
    size: 'small',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Independent Creators',
    description: 'Personal content libraries for filmmakers, musicians, and digital artists with full ownership rights.',
    icon: Users,
    size: 'small',
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Cultural Heritage',
    description: 'Rare masters, historical recordings, and cultural artifacts digitized and preserved for eternity.',
    icon: Archive,
    size: 'small',
    gradient: 'from-red-500/20 to-rose-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function BentoGrid() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-[var(--color-primary)] mb-6">
            <Sparkles className="w-4 h-4" />
            What We Protect
          </span>
          <h2 className="heading-lg mb-4">
            <span className="gradient-text">Preserving Every Format</span>
            <br />
            <span className="text-[var(--color-text-primary)]">of Entertainment</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            From blockbuster films to indie creations, we secure the world's entertainment legacy with unmatched reliability.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Large Card - Hollywood */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 md:row-span-2"
          >
            <motion.div 
              className={`h-full min-h-[300px] md:min-h-[400px] glass-card-solid p-6 md:p-8 relative overflow-hidden group cursor-default`}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bentoItems[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--color-primary)]/20 blur-[60px] group-hover:bg-[var(--color-primary)]/30 transition-colors" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-auto">
                  <Film className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{bentoItems[0].title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-lg max-w-lg">
                    {bentoItems[0].description}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
                  <span className="text-sm text-[var(--color-text-muted)]">Currently protecting</span>
                  <div className="text-2xl font-bold gradient-text">{bentoItems[0].stats}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Medium Card - Music */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 md:row-span-2"
          >
            <motion.div 
              className={`h-full min-h-[200px] md:min-h-full glass-card-solid p-6 relative overflow-hidden group cursor-default`}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${bentoItems[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[var(--color-accent-purple)]/20 blur-[40px] group-hover:bg-[var(--color-accent-purple)]/30 transition-colors" />
              
              <div className="relative z-10 h-full flex flex-col">
                <Music className="w-10 h-10 text-[var(--color-accent-purple)] mb-4" />
                <h3 className="text-xl font-bold mb-2">{bentoItems[1].title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm flex-grow">
                  {bentoItems[1].description}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                  <div className="text-xl font-bold gradient-text">{bentoItems[1].stats}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Small Cards Row */}
          {bentoItems.slice(2).map((item, index) => {
            const Icon = item.icon;
            const colors = [
              'text-green-400',
              'text-orange-400', 
              'text-red-400'
            ];
            
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="md:col-span-4"
              >
                <motion.div 
                  className={`h-full min-h-[180px] glass-card-solid p-6 relative overflow-hidden group cursor-default`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <Icon className={`w-8 h-8 ${colors[index]} mb-3`} />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
