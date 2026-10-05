import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const styles = {
  primary: 'bg-brand text-white hover:bg-brand-dark shadow-sm',
  secondary: 'bg-white text-ink border border-line hover:border-brand/40 hover:bg-brand-soft',
};

export default function Button({ href, children, variant = 'primary', arrow = false, className = '', ...rest }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />}
    </motion.a>
  );
}
