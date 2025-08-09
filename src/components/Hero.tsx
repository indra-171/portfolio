import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "AI/ML Engineer",
    "Open Source Contributor",
    "DevOps Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-blue text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Indrasena Reddy Bala
      </motion.h1>

      <motion.p
        key={currentRole}
        className="text-xl md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TypeWriter text={roles[currentRole]} speed={100} className="text-blue-400" />
      </motion.p>

      <motion.p
        className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Crafting intelligent solutions through machine learning, contributing to open source,
        and mentoring the next generation of developers in DevOps and accessibility.
      </motion.p>

      <motion.div
        className="flex gap-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
        >
          View My Work
        </a>
        {[
          { icon: Github, href: "https://github.com/Indra1806", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/indrasenareddybala", label: "LinkedIn" },
          { icon: Mail, href: "mailto:indra.ug2022@gmail.com", label: "Email" }
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="p-2 border border-gray-600 rounded hover:border-blue-500 hover:bg-blue-500/10 transition"
          >
            <Icon className="w-5 h-5 text-gray-300" />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
