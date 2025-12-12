// src/components/main/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../reusable/SectionTitle';
import SocialLinks from '../reusable/SocialLinks';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import MeteorBackground from '../effects/MeteorBackground'; 

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <MeteorBackground />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Get in Touch</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Kolom Kiri: Info Kontak */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white">Let's Talk!</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Punya pertanyaan, tawaran kerja, atau sekadar menyapa? Silakan hubungi saya lewat formulir atau info kontak berikut:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 animate-pulse" size={24} />
                <span className="text-gray-800 dark:text-gray-200 font-medium">setiawanmuhammad3@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 animate-bounce" size={24} />
                <span className="text-gray-800 dark:text-gray-200 font-medium">Surabaya, Indonesia</span>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Connect With Me</h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4 text-2xl" // ukuran ikon lebih besar
              >
                <SocialLinks />
              </motion.div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Formulir */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <form 
              action="https://formspree.io/f/mnneojrp" 
              method="POST" 
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-5"
              >
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-5"
              >
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all"
                ></textarea>
              </motion.div>

              <div className="text-right">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                >
                  Send Message <FaPaperPlane />
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
