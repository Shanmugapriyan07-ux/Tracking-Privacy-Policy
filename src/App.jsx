import { MotionConfig } from 'framer-motion';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// reducedMotion="user" disables transform/layout animations for people who prefer reduced motion.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <PrivacyPolicy />
    </MotionConfig>
  );
}
