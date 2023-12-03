import "./Header.scss";
import Nav from "./Nav/Nav";
import Aside from "./Aside/Aside";
import { useEffect, useState } from "react";
import bg1 from "./../../assets/image/bg.png";
import bg2 from "./../../assets/image/bg2.png";
import bg3 from "./../../assets/image/bg3.png";

const Header = () => {
  const images = [bg1, bg2, bg3];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header style={{ backgroundImage: `url(${images[index]})`}}>
      <div className="container header__container">
        <div className="header__items">
          <Nav />
          <Aside />
        </div>
      </div>
    </header>
  );
};

export default Header;
