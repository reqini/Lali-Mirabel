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
      <div className="brands__header">
        <h2 className="brands__title">{content.title}</h2>
        <p className="brands__subtitle">Trabajé con marcas increíbles y reconocidas</p>
      </div>
      <div className="brands__container">
        <div className="brands__logos">
          {content.logos.map((logo, i) => (
            <motion.div
              key={logo}
              className="brands__logo"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="brands__logo-inner">
                <img src={logo} alt="" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
