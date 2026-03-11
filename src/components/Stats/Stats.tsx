import { motion } from 'framer-motion';
import './Stats.css';

export interface StatItem {
  label: string;
  value: string;
}

export interface StatsContent {
  title: string;
  items: StatItem[];
}

interface StatsProps {
  content: StatsContent;
}

export function Stats({ content }: StatsProps) {
  return (
    <motion.section
      className="stats"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="stats__title">{content.title}</h2>
      <div className="stats__grid">
        {content.items.map((item, i) => (
          <motion.div
            key={item.label}
            className="stats__item"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="stats__value">{item.value}</span>
            <span className="stats__label">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
