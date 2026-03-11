import { useState } from 'react';
import siteContent from '../data/siteContent.json';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { ServicesForBrands } from '../components/ServicesForBrands';
import { WorkProcess } from '../components/WorkProcess';
import { Deliverables } from '../components/Deliverables';
import { VideoGrid } from '../components/VideoGrid';
import { VideoCarouselMobile } from '../components/VideoCarouselMobile';
import { VideoModal } from '../components/VideoModal';
import type { VideoItem } from '../components/VideoCard';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const content = siteContent.home;

export function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="home">
      <Hero content={content.hero} />
      <Brands content={content.brands} />
      <About content={content.about} />
      <Services content={content.services} />
      <ServicesForBrands {...content.servicesForBrands} />
      <WorkProcess {...content.workProcess} />
      <Deliverables {...content.deliverables} />
      <section id="videos">
        <VideoCarouselMobile videos={content.videos} />
        <VideoGrid videos={content.videos} onVideoClick={handleVideoClick} />
      </section>
      <Stats content={content.stats} />
      <Testimonials content={content.testimonials} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
      <VideoModal video={selectedVideo} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
