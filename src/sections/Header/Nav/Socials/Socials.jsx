import "./Socials.scss";
import Logo from "./../../../../assets/image/youtube logo.svg";
import Logo2 from "./../../../../assets/image/vk logo.svg";
import Logo3 from "./../../../../assets/image/facebook-rect logo.png";
import Logo4 from "./../../../../assets/image/twitter-square logo.svg";
import Logo5 from "./../../../../assets/image/twitch logo.svg";
import Logo6 from "./../../../../assets/image/instagram-square logo.svg";

const Socials = () => {
  return (
    <div className="socials">
      <div className="logo">
        {" "}
        <a href="">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="logo">
        {" "}
        <a href="">
          <img src={Logo2} alt="" />
        </a>
      </div>
      <div className="logo">
        {" "}
        <a href="">
          <img src={Logo3} alt="" />
        </a>
      </div>
      <div className="logo">
        {" "}
        <a href="">
          <img src={Logo4} alt="" />
        </a>
      </div>
      <div className="logo">
        {" "}
        <a href="">
          <img src={Logo5} alt="" />
        </a>
      </div>
      <div className="logo">
        {" "}
        <a href="">
          <img src={Logo6} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
