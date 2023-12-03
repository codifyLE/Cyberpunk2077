import "./GamePlatform.scss";
import plPS from "./../../../assets/image/platformPS.svg";
import plXbox from "./../../../assets/image/platformXBOX.svg";
import plStadia from "./../../../assets/image/platformStadia.svg";
import plPS4 from "./../../../assets/image/platformPS4.svg";

const GamePlatform = () => {
  return (
    <div className="game__platform">
      <span>Выберите платформу:</span>
      <div className="platform1">
        <a href="#">
          {" "}
          <img src={plPS} alt="" />
        </a>
        <a href="#">
          <img src={plXbox} alt="" />
        </a>
      </div>
      <div className="platform2">
        <a href="#">
          <img src={plStadia} alt="" />
        </a>
        <a href="#">
          <img src={plPS4} alt="" />
        </a>
      </div>
    </div>
  );
};

export default GamePlatform;
