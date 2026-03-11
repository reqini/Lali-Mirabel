import { motion } from 'framer-motion';
import { VideoCard } from '../VideoCard';
import type { VideoItem } from '../VideoCard';
import './VideoGrid.css';

interface VideoGridProps {
  videos: VideoItem[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <motion.section
      id="videos"
      className="video-grid-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="video-grid-section__inner">
        <div className={`video-grid ${videos.length > 4 ? 'video-grid--carousel' : ''}`}>
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} isMobile={false} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
