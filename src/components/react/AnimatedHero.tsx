/**
 * Animated Hero Section Component
 * Uses Framer Motion for premium reveal animations
 */
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cloud, Zap, Lock } from 'lucide-react';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
}

const stats = [
  { value: '99.999%', label: 'Uptime SLA', icon: Cloud },
  { value: '256-bit', label: 'Encryption', icon: Lock },
  { value: '5+', label: 'Redundancy Layers', icon: Shield },
  { value: '<50ms', label: 'Global Latency', icon: Zap },
];

export default function AnimatedHero({
  headline = "The World's Intelligent Vault for Entertainment",
  subheadline = "Securely preserve movies, series, music, games, and cultural archives forever. AI-powered organization, metadata enrichment, and eternal preservation for the entertainment industry.",
  ctaText = "Join Early Access",
  ctaLink = "/contact"
}: HeroProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-20">
      {/* Animated background glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-[100px]"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--color-accent-purple)]/10 blur-[100px]"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      
      <div className="container-main relative z-10 py-20 lg:py-32">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-[var(--color-text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now accepting early access applications
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="heading-xl mb-6"
          >
            <span className="gradient-text">{headline.split(' ').slice(0, 3).join(' ')}</span>
            <br />
            <span className="text-[var(--color-text-primary)]">{headline.split(' ').slice(3).join(' ')}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href={ctaLink}
              className="btn-primary text-lg px-8 py-4 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/technology"
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Technology
            </motion.a>
          </motion.div>

          {/* Trust Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 md:p-6 card-hover inner-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.15)'
                  }}
                >
                  <Icon className="w-6 h-6 text-[var(--color-primary)] mb-3 mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-deep)] to-transparent pointer-events-none" />
    </section>
  );
}
