import "./Authorization.scss";

const Authorization = () => {
  return (
    <div className="authorization">
      <div className="authorization__items">
        <form action="">
          <div className="input">
            <input type="" placeholder="Как тебя зовут?" className="email" />
          </div>
          <div className="input_2">
            <input type="" placeholder="Твой е-mail" className="email" />
          </div>
        </form>
        <div className="photo">
          <a href="#" className="photo__link">
            Прикрепить скриншот
          </a>
          <div className="photo__format">
            <span>.png / .jpg / .pdf</span>
          </div>
        </div>
        <div className="authorization__button">
          <button className="button button_yellow">
            <span>Отправить</span>
          </button>
        </div>
        <div className="data__proccesing">
          <label className="label">
            <input type="checkbox" className="checkbox" />
            <span className="data__text">
              Согласен на обработку персональных данных
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
