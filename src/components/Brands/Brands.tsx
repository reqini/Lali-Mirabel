import { motion } from 'framer-motion';
import './Brands.css';

export interface BrandsContent {
  title: string;
  logos: string[];
}

interface BrandsProps {
  content: BrandsContent;
}

export function Brands({ content }: BrandsProps) {
  return (
    <motion.section
      className="brands"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="brands__title">{content.title}</h2>
      <div className="brands__logos">
        {content.logos.map((logo, i) => (
          <motion.div
            key={logo}
            className="brands__logo"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <img src={logo} alt="" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
