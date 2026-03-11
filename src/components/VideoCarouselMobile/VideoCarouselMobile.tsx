import { motion } from 'framer-motion';
import { VideoCard } from '../VideoCard';
import type { VideoItem } from '../VideoCard';
import './VideoCarouselMobile.css';

interface VideoCarouselMobileProps {
  videos: VideoItem[];
}

export function VideoCarouselMobile({ videos }: VideoCarouselMobileProps) {
  return (
    <motion.section
      id="videos-mobile"
      className="video-carousel-mobile"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="video-carousel-mobile__scroll">
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} isMobile={true} />
        ))}
      </div>
    </motion.section>
  );
}
