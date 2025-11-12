import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '' }) {
  const variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
