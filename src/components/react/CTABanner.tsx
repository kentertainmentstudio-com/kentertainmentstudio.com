/**
 * CTA Banner Component
 * Final call-to-action section with premium styling
 */
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTABannerProps {
  variant?: 'default' | 'compact';
}

export default function CTABanner({ variant = 'default' }: CTABannerProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-main relative z-10">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-bg-dark)] to-[var(--color-accent-purple)]/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          
          {/* Animated glow orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[var(--color-primary)]/30 blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--color-accent-purple)]/30 blur-[100px]"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-[var(--color-primary)]/20" />
          
          {/* Content */}
          <div className={`relative z-10 text-center ${variant === 'compact' ? 'py-12 px-6' : 'py-16 md:py-24 px-6 md:px-12'}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-[var(--color-primary)] mb-6">
                <Sparkles className="w-4 h-4" />
                Limited Early Access
              </span>
            </motion.div>
            
            <motion.h2
              className={variant === 'compact' ? 'heading-md mb-4' : 'heading-lg mb-6'}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to Preserve Your{' '}
              <span className="gradient-text">Entertainment Legacy?</span>
            </motion.h2>
            
            <motion.p
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join leading studios, archives, and creators who trust K Entertainment Studio 
              to protect their most valuable content for generations to come.
            </motion.p>
            
            {/* Multi-stage CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {/* Primary CTA - General Waitlist */}
              <motion.a
                href="/contact"
                className="btn-primary text-lg px-8 py-4 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Early Access
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              {/* Secondary CTA - Priority for Studios/Creators */}
              <motion.a
                href="/contact?tier=priority"
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Studio/Creator Priority
              </motion.a>
            </motion.div>
            
            {/* TODO: Add VIP Demo Request tier */}
            {/* 
            <motion.a
              href="/contact?tier=vip"
              className="mt-4 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              Enterprise VIP Demo Request →
            </motion.a>
            */}
            
            {/* Trust indicators */}
            <motion.div
              className="mt-10 pt-10 border-t border-[var(--glass-border)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-[var(--color-text-muted)] mb-4">
                Trusted by leading entertainment organizations
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap opacity-50">
                {/* Placeholder logos - replace with actual partner logos */}
                {['Studio A', 'Archive B', 'Label C', 'Creator D'].map((name) => (
                  <div 
                    key={name}
                    className="text-sm font-semibold text-[var(--color-text-muted)] tracking-wider"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
