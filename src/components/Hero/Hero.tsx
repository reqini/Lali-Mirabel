import { motion } from 'framer-motion';
import './Hero.css';

export interface HeroContent {
  name: string;
  headline: string;
  description: string;
  image: string;
  ctaText: string;
}

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const scrollToPortfolio = () => {
    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameLetters = content.name.split('');
  const spaceIndex = content.name.indexOf(' ');

  const letterVariants = {
    initial: { opacity: 0, y: 20, scale: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero__container">
        <motion.img
          src={content.image}
          alt={content.name}
          className="hero__image"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nameLetters.map((letter, index) => (
              <motion.span key={`${letter}-${index}`}>
                {index === spaceIndex ? (
                  <br />
                ) : (
                  <motion.span
                    className="hero__title-letter"
                    variants={letterVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    {letter}
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="hero__headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {content.headline}
          </motion.p>
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.description}
          </motion.p>
          <motion.button
            className="hero__cta"
            onClick={scrollToPortfolio}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {content.ctaText}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
