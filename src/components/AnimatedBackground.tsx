import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/.025)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <motion.div
        className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/[0.12] blur-[120px]"
        animate={reduceMotion ? undefined : { x: [0, 90, 20, 0], y: [0, 50, 150, 0], scale: [1, 1.15, 0.92, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 top-[35%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.08] blur-[140px]"
        animate={reduceMotion ? undefined : { x: [0, -100, -30, 0], y: [0, 110, -40, 0], scale: [1, 0.9, 1.18, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
