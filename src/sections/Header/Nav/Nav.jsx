import "./Nav.scss";
import Logo from "./../../../assets/image/Logo.svg";
import Socials from "./Socials/Socials";

const Nav = () => {
  return (
    <nav>
      <a href="">
        <img src={Logo} alt="" className="mainLogo" />
      </a>
      <Socials />
    </nav>
  );
};

export default Nav;
