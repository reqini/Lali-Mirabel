import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { VideoItem } from '../VideoCard';
import './VideoModal.css';

interface VideoModalProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Asegurarse que el video tenga SONIDO activado
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      
      // Pequeño delay para asegurar que DOM está listo
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1;
        }
      }, 50);
    }
  }, [isOpen]);

  // Manejador para cuando el usuario intenta reproducir
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
  };

  // Manejador para cuando se carga el video
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && video && (
        <motion.div
          className="video-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="video-modal__content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="video-modal__close"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="video-modal__video-container">
              <video
                ref={videoRef}
                src={video.video}
                controls
                loop
                playsInline
                onPlay={handlePlay}
                onLoadedMetadata={handleLoadedMetadata}
                onCanPlay={handleLoadedMetadata}
                className="video-modal__video"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
