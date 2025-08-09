import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'indra.ug2022@gmail.com',
      href: 'mailto:indra.ug2022@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@indrasena',
      href: 'https://github.com/Indra1806',
      color: 'text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'indrasena-reddy',
      href: 'https://linkedin.com/in/indrasenareddybala',
      color: 'text-blue-400'
    },
  ];

  const availabilityInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India (Remote Available)',
      color: 'text-green-400'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open for collaborations',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative AI projects or discuss opportunities? 
            I'm always open to connecting with fellow engineers and researchers.
          </p>
        </motion.div>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={`p-2 rounded-lg bg-gray-600/50 ${link.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{link.label}</div>
                        <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
              <div className="space-y-4">
                {availabilityInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
                      <div className={`p-2 rounded-lg bg-gray-600/50 ${info.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{info.label}</div>
                        <div className="text-gray-400 text-sm">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Let's Build Something Amazing</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Whether you're looking to collaborate on AI research, need help with ML implementation, 
                or want to discuss open source contributions, I'm always excited to connect with fellow innovators.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Research', 'ML Engineering', 'Open Source'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-400">
            Built with ❤️
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 Indrasena Reddy Bala. All rights reserved.
          </p>
        </motion.div>
      </div>
  );
};

export default Contact;