import { motion } from 'framer-motion';
import './Services.css';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  items: ServiceItem[];
}

interface ServicesProps {
  content: ServicesContent;
}

export function Services({ content }: ServicesProps) {
  return (
    <motion.section
      className="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="services__title">{content.title}</h2>
      <div className="services__grid">
        {content.items.map((item, i) => (
          <motion.article
            key={item.title}
            className="services__card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="services__card-title">{item.title}</h3>
            <p className="services__card-desc">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
