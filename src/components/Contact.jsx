import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone, MessageSquare, User, AtSign } from 'lucide-react';
import './Contact.css';

const API_URL = 'http://localhost:5000/api/contact';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post(API_URL, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="section">
        <motion.div
          ref={ref}
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag"><span className="star-spin">✦</span> Get in Touch</span>
          <h2 className="section-title">Let's Create Something Great</h2>
          <p className="section-subtitle">
            Whether you have a specific project in mind or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="contact-container">
          {/* Contact Info Deck */}
          <motion.div
            className="contact-info-deck"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div className="info-text">
                <h4>Email Me</h4>
                <a href="mailto:wahidacse280@gmail.com">wahidacse280@gmail.com</a>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div className="info-text">
                <h4>Call Me</h4>
                <a href="tel:+8801980000857">+8801980000857</a>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <span>Dhaka, Bangladesh</span>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-icon">
                <MessageSquare size={20} />
              </div>
              <div className="info-text">
                <h4>Freelance</h4>
                <span>Available for projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* New Professional Form */}
          <motion.form
            className="professional-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="name"><User size={14} /> Full Name</label>
                <input
                  id="name" type="text" required placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email"><AtSign size={14} /> Email Address</label>
                <input
                  id="email" type="email" required placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message"><MessageSquare size={14} /> Your Message</label>
              <textarea
                id="message" rows={6} required placeholder="How can I help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Transmitting Message...'
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="send-icon" />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div className="status-toast success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <CheckCircle size={18} /> 
                <span>Message received! I'll get back to you shortly.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div className="status-toast error" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <AlertCircle size={18} /> 
                <span>Connection error. Please try again or email directly.</span>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
