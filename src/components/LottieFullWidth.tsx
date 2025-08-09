import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lottie from 'lottie-react';
import { motion, useAnimation } from 'framer-motion';

type PlaybackMode = 'autoplay' | 'scroll' | 'hover';

interface LottieSectionProps {
  animationUrl: string;
  height?: string | number;
  playbackMode?: PlaybackMode;
  loop?: boolean;
  speed?: number;
  fallbackImage?: string;
  className?: string;
}

const LottieSection: React.FC<LottieSectionProps> = ({
  animationUrl,
  height = '300px',
  playbackMode = 'autoplay',
  loop = true,
  speed = 1,
  fallbackImage,
  className = ''
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Detect reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const changeHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', changeHandler);
    return () => mq.removeEventListener('change', changeHandler);
  }, []);

  // Load animation JSON
  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(animationUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setAnimationData(json);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [animationUrl]);

  // Scroll playback
  const onScroll = useCallback(() => {
    if (!lottieRef.current || playbackMode !== 'scroll' || reducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
    const frames = lottieRef.current.getDuration(true);
    lottieRef.current.goToAndStop(progress * frames, true);
  }, [playbackMode, reducedMotion]);

  useEffect(() => {
    if (playbackMode === 'scroll') {
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll, playbackMode]);

  // Fallback (image or gradient)
  if (reducedMotion || error) {
    return (
      <div ref={containerRef} style={{ height }} className={`w-full overflow-hidden ${className}`}>
        {fallbackImage ? (
          <img src={fallbackImage} alt="Lottie fallback" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
        )}
      </div>
    );
  }

  // Loading spinner
  if (isLoading) {
    return (
      <div
        style={{ height }}
        className={`flex items-center justify-center w-full ${className}`}
      >
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ height }}
      className={`w-full overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={playbackMode === 'autoplay' ? loop : false}
        autoplay={playbackMode === 'autoplay'}
        speed={speed}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        onMouseEnter={playbackMode === 'hover' ? () => lottieRef.current?.play() : undefined}
        onMouseLeave={playbackMode === 'hover' ? () => lottieRef.current?.pause() : undefined}
      />
    </motion.div>
  );
};

export default LottieSection;
