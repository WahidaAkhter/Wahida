import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          © {new Date().getFullYear()} <span>Wahida Akhter</span>
        </div>
        <div className="footer-center">
          Built with passion & <span>fueled by coffee</span>
        </div>
        <div className="footer-right">
          Dhaka, Bangladesh
        </div>
      </div>
    </footer>
  );
}
