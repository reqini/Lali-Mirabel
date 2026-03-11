import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './VideoCard.css';

export interface VideoItem {
  id: number;
  title: string;
  video: string;
  thumbnail: string;
}

interface VideoCardProps {
  video: VideoItem;
  index?: number;
  isMobile?: boolean;
  onVideoClick?: (video: VideoItem) => void;
}

export function VideoCard({ video, index = 0, isMobile = false, onVideoClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (isMobile) {
      if (isPlaying) {
        handlePause();
      } else {
        handlePlay();
      }
    } else if (!isMobile && onVideoClick) {
      onVideoClick(video);
    }
  };

  const handleMouseEnter = () => {
    if (hasHover && !isMobile) {
      handlePlay();
    }
  };

  const handleMouseLeave = () => {
    if (hasHover && !isMobile) {
      handlePause();
    }
  };

  return (
    <motion.div
      className="video-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="video-card__frame">
        <video
          ref={videoRef}
          className="video-card__video"
          src={video.video}
          
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        {isMobile && (
          <button
            type="button"
            className={`video-card__play ${isPlaying ? 'video-card__play--hidden' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            aria-label="Play video"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>
      <p className="video-card__title">{video.title}</p>
    </motion.div>
  );
}
