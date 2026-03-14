import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">WA</span>
          <p>Wahida Akhter · Full-Stack Developer</p>
        </div>
        <div className="footer-socials">
          {[
            { href: 'https://github.com',   Icon: Github },
            { href: 'https://linkedin.com', Icon: Linkedin },
            { href: 'https://twitter.com',  Icon: Twitter },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} className="footer-social" target="_blank" rel="noreferrer">
              <Icon size={17} />
            </a>
          ))}
        </div>
        <p className="footer-copy">
          Made with <Heart size={13} className="heart" /> © {new Date().getFullYear()} Wahida Akhter
        </p>
      </div>
    </footer>
  );
}
