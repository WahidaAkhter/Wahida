import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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
            { href: 'https://github.com/WahidaAkhter',   Icon: Github },
            { href: 'https://www.linkedin.com/in/wahida-akhter/', Icon: Linkedin },
            { href: 'mailto:wahidacse280@gmail.com', Icon: Mail },
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
