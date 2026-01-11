/**
 * Value Propositions Component
 * 4-5 premium cards showcasing core value props
 */
import { motion } from 'framer-motion';
import { 
  Brain, 
  Infinity, 
  ShieldCheck, 
  Globe2,
  Fingerprint,
  type LucideIcon 
} from 'lucide-react';

interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accentColor: string;
}

const valueProps: ValueProp[] = [
  {
    title: 'AI Intelligence',
    description: 'Our AI automatically organizes, tags, and enriches your content with comprehensive metadata, making every asset instantly discoverable.',
    icon: Brain,
    features: ['Auto-tagging & categorization', 'Scene detection', 'Content fingerprinting', 'Smart search'],
    accentColor: 'var(--color-primary)',
  },
  {
    title: 'Eternal Preservation',
    description: 'Your content is stored across multiple redundant systems with built-in migration to future formats, ensuring it outlives any technology.',
    icon: Infinity,
    features: ['Format migration', 'Bit-rot protection', 'Version control', 'Integrity verification'],
    accentColor: 'var(--color-accent-purple)',
  },
  {
    title: 'Bank-Grade Security',
    description: 'Military-level encryption, zero-knowledge architecture, and comprehensive access controls protect your most valuable assets.',
    icon: ShieldCheck,
    features: ['256-bit AES encryption', 'Zero-knowledge proofs', 'Role-based access', 'Audit trails'],
    accentColor: 'var(--color-accent-pink)',
  },
  {
    title: 'Global Scale',
    description: 'Edge nodes across 6 continents ensure your content is accessible globally with minimal latency while maintaining sovereignty compliance.',
    icon: Globe2,
    features: ['50+ data centers', 'Sub-50ms latency', 'Data sovereignty', 'CDN integration'],
    accentColor: 'var(--color-accent-gold)',
  },
  {
    title: 'Provenance Tracking',
    description: 'Complete chain of custody for every asset, with immutable records that prove authenticity and ownership throughout time.',
    icon: Fingerprint,
    features: ['Blockchain anchoring', 'Timestamping', 'Rights management', 'Chain of custody'],
    accentColor: '#10b981',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ValuePropositions() {
  return (
    <section className="section-padding relative bg-[var(--color-bg-dark)]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">
            Why Choose <span className="gradient-text">K Entertainment</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Industry-leading technology designed for the unique demands of entertainment preservation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                variants={cardVariants}
                className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <motion.div 
                  className="h-full glass-card-solid p-6 md:p-8 relative overflow-hidden group"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Hover glow effect */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: prop.accentColor }}
                  />
                  
                  {/* Inner glow border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${prop.accentColor}20, transparent, ${prop.accentColor}10)`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ 
                        backgroundColor: `${prop.accentColor}15`,
                        boxShadow: `0 0 20px ${prop.accentColor}20`
                      }}
                    >
                      <Icon 
                        className="w-7 h-7" 
                        style={{ color: prop.accentColor }}
                      />
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                      {prop.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {prop.features.map((feature) => (
                        <li 
                          key={feature}
                          className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: prop.accentColor }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
