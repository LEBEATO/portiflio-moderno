import type { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type MotionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}>;

export default function MotionReveal({ children, className, delay = 0, direction = 'up' }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = direction === 'left' ? { x: -28, y: 0 } : direction === 'right' ? { x: 28, y: 0 } : { x: 0, y: 28 };

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
