import "./BuyProduct.scss";
import Case from "./../../assets/image/case.svg";
import code from "./../../assets/image/code.svg";
import info from "./../../assets/image/info.svg";
import GamePlatform from "./GamePlatform/GamePlatfrom";

const BuyProduct = () => {
  return (
    <div className="game">
      <div className="game__img"></div>
      <div className="game__info">
        <div className="game__img2"></div>
        <div className="game__title">
          <span>Купить игру Cyberpunk 2077</span>
        </div>
        <div className="game__complects">
          <span>В комплект входит:</span>
          <div className="game__case game_case1">
            <img src={Case} alt="" />
            <span>Футляр с игровыми дисками</span>
          </div>
          <div className="game__case game_case2">
            <img src={code} alt="" />
            <span>Футляр с кодом для загрузки игры и дисками (pc)</span>
          </div>
          <div className="game__case">
            <img src={info} alt="" />
            <span>Справочник с информацией об игровом мире</span>
          </div>
        </div>
        <GamePlatform />
      </div>
    </div>
  );
};

export default BuyProduct;
