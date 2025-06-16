import { MdOutlineTimer } from "react-icons/md";
import aboutUsImg from "../../public/img/about-us.jpg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";

export const AboutUsSection = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="about-us__wrapper">
          <div className="about-us__img-block">
            <img className="about-us__img" src={aboutUsImg} alt="img" />
            <div className="about-us__exp">
              <span className="about-us__exp-years">25+</span>
              <span className="about-us__exp-text">Лет Опыта</span>
            </div>
          </div>
          <div className="about-us__block">
            <h2 className="about-us__block-title">
              О {""}
              <span className="about-us__block-title about-us__block-title--highlight">
                BuildMaster
              </span>
            </h2>
            <p className="about-us__block-text">
              Более 25-ти лет BuildMaster предлагал уникальные услуги
              строительства для коммерческих и некоммерческих клиентов. Мы
              специализируемся в создании красивых, функциональных постройках,
              оправдывающих ожидания клиентов.
            </p>

            <ul className="about-us__block-list">
              <li className="about-us__block-item">
                <span className="about-us__block-item-icon"><LiaMedalSolid size={40}/></span>
                <div className="about-us__block-item-info">
                  <h3 className="about-us__block-item-info-title">
                    Качество Постройки
                  </h3>
                  <p className="about-us__block-item-info-text">
                    Особенное внимание к деталям и премиум-материалы для
                    длительных результатов.
                  </p>
                </div>
              </li>
              <li className="about-us__block-item">
                <span className="about-us__block-item-icon"><PiUsers size={40}/></span>
                <div className="about-us__block-item-info">
                  <h3 className="about-us__block-item-info-title">
                    Команда Экспертов
                  </h3>
                  <p className="about-us__block-item-info-text">
                    Умелые профессионалы с большим опытом.
                  </p>
                </div>
              </li>
              <li className="about-us__block-item">
                <span className="about-us__block-item-icon"><MdOutlineTimer size={40}/></span>
                <div className="about-us__block-item-info">
                  <h3 className="about-us__block-item-info-title">
                    Выполнение В Срок
                  </h3>
                  <p className="about-us__block-item-info-text">
                    Проекты не превышают бюджет и выполняются в срок.
                  </p>
                </div>
              </li>
              <li className="about-us__block-item">
                <span className="about-us__block-item-icon"><IoCheckmarkCircleOutline size={40}/></span>
                <div className="about-us__block-item-info">
                  <h3 className="about-us__block-item-info-title">
                    Клиенты Одобряют
                  </h3>
                  <p className="about-us__block-item-info-text">
                    Свыше 95% клиентов оставляют положительный отзыв.
                  </p>
                </div>
              </li>
            </ul>
            <button className="about-us__btn">Назначить Консультацию</button>
          </div>
        </div>
      </div>
    </section>
  );
};
