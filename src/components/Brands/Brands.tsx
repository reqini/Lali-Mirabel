import { useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (!containerRef.current) return;

    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 0.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    const targetScroll = direction === 'left' 
      ? containerRef.current.scrollLeft - scrollAmount
      : containerRef.current.scrollLeft + scrollAmount;
    
    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

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
        <p className="brands__subtitle">Colaborando con marcas increíbles</p>
      </div>

      <div className="brands__carousel-wrapper">
        <button
          className="brands__nav brands__nav--left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div
          ref={containerRef}
          className="brands__carousel"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {content.logos.map((logo) => (
            <div key={logo} className="brands__carousel-item">
              <motion.div
                className="brands__client-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={logo} alt="brand" loading="lazy" />
              </motion.div>
            </div>
          ))}
        </div>

        <button
          className="brands__nav brands__nav--right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </motion.section>
  );
}
