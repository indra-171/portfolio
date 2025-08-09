import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Code2, BrainCircuit, Bot, Palette, BarChart2, Layers } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      period: "2024–Present",
      role: "AI Innovator & Full-Stack Developer",
      company: "Personal Portfolio & Projects",
      location: "Warangal, India",
      description: "Conceptualizing and building end-to-end AI-driven applications, from prompt engineering frameworks to full-stack platforms. Focused on creating a unique, interactive portfolio that showcases a blend of AI creativity, software development, and data intelligence.",
      achievements: [
        "Developing 'CultureMapper', an end-to-end platform for cultural data collection and analysis.",
        "Building an 'AI Blog Agent' to automate SEO-optimized content creation using agentic workflows.",
        "Designing an interactive portfolio with Lottie animations and a futuristic, AI-inspired UI/UX."
      ]
    },
    {
      period: "2023–2024",
      role: "AI & Data Analytics Specialist",
      company: "APSCHE Internship & Personal Projects",
      location: "Remote",
      description: "Transitioned from AI exploration to practical application, focusing on data analytics and building AI-powered prototypes. Contributed to real-world data projects and developed storytelling capabilities using AI.",
      achievements: [
        "Analyzed the 'Index of Economic Freedom' dataset and built interactive dashboards in Tableau.",
        "Developed prompt engineering frameworks for structured and creative AI outputs.",
        "Created AI-generated storybooks with integrated images and scripts for YouTube content."
      ]
    },
    {
      period: "2022–2023",
      role: "AI Explorer & Aspiring Developer",
      company: "Self-Directed Learning",
      location: "Remote",
      description: "Began a deep dive into AI technology, exploring various tools for text, image, and video generation while learning the fundamentals of frontend and backend development to integrate AI into applications.",
      achievements: [
        "Mastered various AI tools for generative tasks.",
        "Learned to integrate AI APIs into web application prototypes.",
        "Conceptualized a personal brand identity focused on AI-driven innovation."
      ]
    }
  ];

  const skills = [
    { category: "AI & Data", items: ["Prompt Engineering", "LLM Integration", "Data Analytics", "Tableau", "LangChain"] },
    { category: "Development", items: ["Python", "React", "GoLang", "Node.js", "JavaScript"] },
    { category: "DevOps & Cloud", items: ["Docker", "AWS", "CI/CD", "Terraform", "Netlify"] },
    { category: "Design", items: ["UI/UX Concepts", "Canva", "Framer Motion", "Lottie Animations", "Storytelling"] }
  ];

  const values = [
    {
      icon: BrainCircuit,
      title: "AI Innovation",
      description: "Passionate about pushing the boundaries of what's possible with AI, from creative generation to data intelligence."
    },
    {
      icon: Layers,
      title: "Full-Stack Integration",
      description: "Committed to building complete, end-to-end solutions that bridge the gap between frontend design and backend AI logic."
    },
    {
      icon: Palette,
      title: "Creative Storytelling",
      description: "Believing in the power of design and narrative to make complex technology accessible and engaging."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A multi-disciplinary innovator blending AI creativity with full-stack development and data analytics to build the future of intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Story So Far</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                My journey began in 2022 with a deep curiosity for AI and its potential to solve real-world problems. I started by experimenting with generative tools, which quickly evolved into a passion for understanding how to build with and around them.
              </p>
              <p>
                In 2023, I expanded into full-stack development and data analytics, learning to not only integrate AI APIs but also to extract meaningful insights from data. This period was about bridging the gap between a creative idea and a functional, data-driven prototype.
              </p>
              <p>
                Today, my focus is on creating end-to-end platforms and structured AI frameworks. I'm driven by the challenge of building intelligent, beautiful, and useful applications—from the underlying backend logic to the interactive frontend experience.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30 flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Experience & Milestones</h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-blue-400">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <div>
                    <h5 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              >
                <h4 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-gray-700/30 text-gray-300 rounded-lg text-sm border border-gray-600/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
