import "./Promotion.scss";
import prom from "./../../assets/image/prom.svg";
import Authorization from "./Authorization/Authorization";
import xbox from "./../../assets/image/xbox.png";
import ps from "./../../assets/image/ps.png";
import consoles from "./../../assets/image/consoles.png";
import zerno1 from "./../../assets/image/zerno1.png";

const Promotion = () => {
  return (
    <div className="promotion">
      <img src={zerno1} alt="" className="zerno1" />
      <div className="container">
        <div className="promo__blocks">
          <div className="promotion__wrapper">
            <div className="promotion__content">
              <div className="promotion__img">
                <img src={prom} alt="" />
              </div>
              <div className="promotion__title">Играй и выигрывай!</div>
            </div>
            <div className="promotion__description">
              <p>
                Играй в <span>Cyberpunk 2077</span> и получи возможность
                выиграть консоль <span>Xbox Series X</span> или{" "}
                <span>Sony PlayStation 5!</span> Заполни форму ниже и приложи
                скриншот о покупке игры. Итоги розыгрыша будут подведены 1
                февраля. Удачи! ;)
              </p>
            </div>
            <div className="console2">
              <img src={xbox} alt="" />
              <img src={ps} alt="" />
            </div>
            <div className="promotion__items">
              <Authorization />
              <div className="consoles">
                <img src={consoles} alt="" />
              </div>
            </div>
          </div>
          <div className="console">
            <img src={xbox} alt="" />
            <img src={ps} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
