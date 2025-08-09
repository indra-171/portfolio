import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface LottieFullWidthProps {
  animationUrl: string;
  height?: string;
  playbackMode?: 'autoplay' | 'scroll' | 'hover';
  loop?: boolean;
  speed?: number;
  fallbackImage?: string;
  className?: string;
}

const LottieFullWidth: React.FC<LottieFullWidthProps> = ({
  animationUrl,
  height = '300px',
  playbackMode = 'autoplay',
  loop = false,
  speed = 1,
  fallbackImage,
  className = ''
}) => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Load Lottie animation
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(animationUrl);
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`);
        }
        
        // Check if response is actually JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON - Lottie file may be missing');
        }
        
        const data = await response.json();
        setAnimationData(data);
        setError(false);
      } catch (err) {
        console.warn('Lottie animation not available:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, [animationUrl]);

  // Scroll-driven playback
  const handleScroll = useCallback(() => {
    if (!lottieRef.current || playbackMode !== 'scroll' || reducedMotion) return;

    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Calculate progress (0 to 1) based on element position
    const progress = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight + elementHeight)
    ));

    const totalFrames = lottieRef.current.getDuration(true);
    const frame = progress * totalFrames;

    lottieRef.current.goToAndStop(frame, true);
  }, [playbackMode, reducedMotion]);

  useEffect(() => {
    if (playbackMode === 'scroll') {
      let ticking = false;
      
      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      return () => window.removeEventListener('scroll', requestTick);
    }
  }, [handleScroll, playbackMode]);

  // Render fallback for reduced motion or error
  if (reducedMotion || error) {
    return (
      <div 
        ref={containerRef}
        className={`w-full overflow-hidden ${className}`}
        style={{ height }}
      >
        {fallbackImage ? (
          <img 
            src={fallbackImage} 
            alt="Animation fallback" 
            className="w-full h-full object-cover opacity-20"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        )}
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div 
        className={`w-full overflow-hidden flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={`w-full overflow-hidden ${className}`}
      style={{ height }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={playbackMode === 'autoplay' ? loop : false}
        autoplay={playbackMode === 'autoplay'}
        speed={speed}
        style={{
          width: '100%',
          height: '100%',
          filter: 'opacity(0.7)',
        }}
        onMouseEnter={playbackMode === 'hover' ? () => lottieRef.current?.play() : undefined}
        onMouseLeave={playbackMode === 'hover' ? () => lottieRef.current?.pause() : undefined}
      />
    </motion.div>
  );
};

export default LottieFullWidth;