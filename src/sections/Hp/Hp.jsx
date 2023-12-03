import "./Hp.scss";
import zerno from "./../../assets/image/zerno.png";
import hpImg from "./../../assets/image/hpImg.png";
import logoHp from "./../../assets/image/hp-logo.svg";
import cross from "./../../assets/image/x.svg";
import Logo2 from "./../../assets/image/Logo2.svg";
import politra from "./../../assets/image/color_lens.svg";
import star from "./../../assets/image/star.svg";
import motion from "./../../assets/image/motion.svg";

const Hp = () => {
  return (
    <div className="hp">
      <img src={zerno} alt="" className="zerno" />
      <div className="container">
        <div className="hp__wrap">
          <div className="hp__items">
            <div className="hp__images">
              <div className="hp__img">
                <img src={hpImg} alt="" />
              </div>
              <div className="hp__icons">
                <div className="hp_logo">
                  <img src={logoHp} alt="" />
                </div>
                <div className="cross">
                  <img src={cross} alt="" />
                </div>
                <div className="logo2">
                  <img src={Logo2} alt="" />
                </div>
              </div>
            </div>
            <div className="hp__more">
              <div className="hp__title">
                <span>Полное погружение вместе с HP</span>
              </div>
              <div className="hp__description">
                <span>
                  Погрузись в современные экшен-игры с реалистичным изображением
                  с помощью монитора с диагональю 23,8 дюйма, созданном для
                  отображения максимально насыщенных цветов. Успевай реагировать
                  на любые события с временем отклика 1 мс и частотой в 144 Гц!
                </span>
              </div>
              <div className="hp__features">
                <div className="hp__feature">
                  <img src={politra} alt="" />
                  <span>Яркие насыщенные цвета</span>
                </div>
                <div className="hp__feature hp__feature2">
                  <img src={star} alt="" />
                  <span>Кристальная четкость изображения</span>
                </div>
                <div className="hp__feature">
                  <img src={motion} alt="" />
                  <span>Быстрые движения и плавный геймплей</span>
                </div>
              </div>
              <button className="button hp__button">
                <span>Подробнее</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hp;
