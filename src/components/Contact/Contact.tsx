import { motion } from 'framer-motion';
import './Contact.css';

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  instagram: string;
  image?: string;
}

interface ContactProps {
  content: ContactContent;
}

export function Contact({ content }: ContactProps) {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact__inner">
        {content.image && (
          <div className="contact__photo-block">
            <img src={content.image} alt="" className="contact__photo" />
          </div>
        )}
        <div className="contact__content">
          <h2 className="contact__title">{content.title}</h2>
          <p className="contact__description">{content.description}</p>
          <div className="contact__links">
          <a href={`mailto:${content.email}`} className="contact__link">
            {content.email}
          </a>
          <a
            href={content.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            Instagram
          </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
