import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import styles from './VideoShowcaseSection.module.css';

export default function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.error("Video playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.videoWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.video 
          ref={videoRef}
          src="/videos/ac-service.mp4" 
          className={styles.video}
          autoPlay 
          muted 
          loop 
          playsInline
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
        />
        
        {/* Sharp Cinematic Overlay */}
        <div className={styles.overlay} />

        {/* Premium Glass Play/Pause Button */}
        <div className={styles.controlsOverlay} onClick={togglePlay}>
          <AnimatePresence mode="wait">
            {!isPlaying && (
              <motion.div 
                className={styles.playButton}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play fill="currentColor" size={32} />
              </motion.div>
            )}
            {isPlaying && (
              <motion.div 
                className={`${styles.playButton} ${styles.pauseBtn}`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: 0 }} /* Only show on hover via CSS */
                transition={{ duration: 0.3 }}
              >
                <Pause fill="currentColor" size={32} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Quality Badge */}
        <div className={styles.qualityBadge}>
          <span className={styles.badgeDot} />
          4K HD • LIVE SERVICE
        </div>
      </motion.div>
    </section>
  );
}
