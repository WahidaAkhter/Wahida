import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';
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

  return (
    <section id="contact">
      <div className="section">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag"><span className="star-spin">✦</span> Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear from you. Send a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { Icon: Mail,   label: 'Email',    value: 'wahida@example.com' },
              { Icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
              { Icon: Clock,  label: 'Response', value: 'Within 24 hours' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="contact-info-row">
                <div className="contact-info-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="contact-info-label">{label}</span>
                  <p className="contact-info-value">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name" type="text" required placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email" type="email" required placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" rows={5} required placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {status === 'sending' ? 'Sending…' : <><Send size={16} /> Send Message</>}
            </button>

            {status === 'success' && (
              <motion.p className="form-feedback success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <CheckCircle size={16} /> Message sent! I'll reply soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p className="form-feedback error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <AlertCircle size={16} /> Something went wrong. Try emailing directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
