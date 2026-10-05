import { motion } from 'framer-motion';

// Shared card shell: subtle lift and border transition on hover.
export default function PolicyCard({ as: Tag = 'div', className = '', children }) {
  const M = motion[Tag] || motion.div;
  return (
    <M whileHover={{ y: -2 }} transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-line bg-white p-5 transition-[border-color,box-shadow] duration-200 hover:border-brand/40 hover:shadow-[0_6px_20px_rgba(109,74,255,0.08)] sm:p-6 ${className}`}>
      {children}
    </M>
  );
}
