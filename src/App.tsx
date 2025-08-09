import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import VerticalNav from './components/VerticalNav';
import LottieFullWidth from './components/LottieFullWidth';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-300">Initializing AI Systems...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <VerticalNav currentSection={currentSection} />

      <main>
        {/* Hero Section */}
        <section data-section="0" id="hero">
          <Hero />
        </section>

        {/* Lottie Transition 1 */}
        {/* Enhanced Neural Network Lottie Transition */}
<LottieFullWidth
  animationUrl="/lottie/neural-network.json"
  height="50vh"
  playbackMode="autoplay"
  fallbackImage="/images/neural-fallback.svg"
  speed={1.5}
  loop={true}
  style={{
    position: "relative",
    zIndex: 1,
    background: "linear-gradient(to bottom, #0f0f0f, #1a1a1a)",
    filter: "drop-shadow(0 0 10px rgba(229, 241, 241, 0.69))",
  }}
  onLoad={() => console.log("Neural animation loaded")}
  onError={(e) => console.error("Lottie load error:", e)}
/>

        {/* Projects Section */}
        <section data-section="1" id="projects">
        <div className="relative w-full h-[1vh]">
</div>
          <Projects />
        </section>

                  {/* Lottie Transition 2 */}
        <div className="relative w-full h-[60vh]">
  {/* Main content */}
    <LottieFullWidth
      animationUrl="/lottie/data-flow.json"
      height="80vh"
      playbackMode="autoplay"
      loop
      fallbackImage="/images/data-fallback.svg"
    />
</div>


        <div className="relative w-full h-[10vh]"></div>

        {/* About Section */}
        <section data-section="2" id="about">
          <About />
        </section>

        {/* Lottie Transition 3 */}
        <LottieFullWidth
          animationUrl="/lottie/ai-particles.json"
          height="350px"
          playbackMode="autoplay"
          fallbackImage="/images/particles-fallback.svg"
        />

        {/* Contact Section */}
        <section data-section="3" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;