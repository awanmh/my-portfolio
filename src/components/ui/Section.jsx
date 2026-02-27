import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`relative py-[var(--space-section)] ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
