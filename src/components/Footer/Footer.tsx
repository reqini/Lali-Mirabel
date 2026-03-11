import { motion } from 'framer-motion';
import './Footer.css';

export interface FooterContent {
  copyright: string;
}

interface FooterProps {
  content: FooterContent;
}

export function Footer({ content }: FooterProps) {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="footer__copyright">{content.copyright}</p>
    </motion.footer>
  );
}
