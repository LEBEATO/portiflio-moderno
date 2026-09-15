import { motion, useReducedMotion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  highlight?: string[];
  delay?: number;
};

export default function AnimatedText({ text, className, highlight = [], delay = 0 }: AnimatedTextProps) {
  const reduceMotion = useReducedMotion();
  const highlightedWords = new Set(highlight);

  return (
    <motion.span
      aria-label={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.55 }}
      variants={{ hidden: {}, visible: { transition: { delayChildren: delay, staggerChildren: reduceMotion ? 0 : 0.055 } } }}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          aria-hidden="true"
          key={`${word}-${index}`}
          className={`mr-[.24em] inline-block ${highlightedWords.has(word) ? 'text-gradient' : ''}`}
          custom={index}
          variants={{
            hidden: (wordIndex: number) => ({
              opacity: 0,
              x: reduceMotion ? 0 : wordIndex % 2 === 0 ? -14 : 14,
              y: reduceMotion ? 0 : 20,
              rotate: reduceMotion ? 0 : wordIndex % 2 === 0 ? -2 : 2,
            }),
            visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
          }}
          transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
