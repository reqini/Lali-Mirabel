import { motion } from 'framer-motion';
import './About.css';

export interface AboutContent {
  title: string;
  paragraphs: string[];
  image: string;
}

interface AboutProps {
  content: AboutContent;
}

export function About({ content }: AboutProps) {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="about__container">
        <motion.img
          src={content.image}
          alt=""
          className="about__image"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <div className="about__content">
          <h2 className="about__title">{content.title}</h2>
          {content.paragraphs.map((p, i) => (
            <p key={i} className="about__paragraph">
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
