import { motion } from 'framer-motion';
import './Testimonials.css';

export interface TestimonialItem {
  name: string;
  text: string;
}

export interface TestimonialsContent {
  title: string;
  items: TestimonialItem[];
}

interface TestimonialsProps {
  content: TestimonialsContent;
}

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <motion.section
      className="testimonials"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="testimonials__title">{content.title}</h2>
      <div className="testimonials__grid">
        {content.items.map((item, i) => (
          <motion.blockquote
            key={item.name}
            className="testimonials__card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="testimonials__text">"{item.text}"</p>
            <footer className="testimonials__author">— {item.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </motion.section>
  );
}
