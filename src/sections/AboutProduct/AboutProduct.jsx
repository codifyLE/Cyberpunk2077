import "./AboutProduct.scss";
import left1 from "./../../assets/image/l1.png";
import left2 from "./../../assets/image/l2.png";
import right from "./../../assets/image/r.png";

const AboutProduct = () => {
  return (
    <div className="container about_container">
      <div className="product">
        <div className="product__caption">Найт-Сити изменит тебя навсегда!</div>
        <div className="product__description">
          <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие
          которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
          модификации тела ценятся выше всего. Ты играешь за V, наёмника в
          поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять
          киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый
          мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </div>

        <div className="product__images">
          <div className="left__images">
            <div className="left left1">
              <img src={left1} alt="" />
            </div>
            <div className="left">
              <img src={left2} alt="" />
            </div>
          </div>
          <div className="right__image">
            <div className="right">
              <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
