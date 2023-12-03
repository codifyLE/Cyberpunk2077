import "./Footer.scss";
import Logo from "./../../assets/image/Logo.svg";
import LogoCD from "./../../assets/image/CD_Projekt_logo 1.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="footer__items">
          <div className="footer__logos">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <a href="#">
              <img src={LogoCD} alt="" className="logoCd" />
            </a>
          </div>
          <div className="documentation">
            <span className="license">Лицензия</span>
            <span>Политика конфиденциальности</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</span>
      </div>
    </div>
  );
};

export default Footer;
