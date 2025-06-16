import { useState } from "react";
import rest1 from "/img/rest-1.jpg";
import rest2 from "/img/rest-2.jpg";
import rest3 from "/img/rest-3.jpg";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

export const SwiperThirdSection = () => {
  const restData = [
    {
      id: 1,
      title: "Gastronomique",
      img: rest1,
      description:
        "Интерьер для ресторана высокой кухни с акцентом на визуальную драматургию",
      features: [
        "Авторские световые инсталляции",
        "Шеф-столы с панорамным видом на кухню",
        "Эксклюзивная керамика ручной работы",
        "Зонирование акустическими панелями",
        "Винный погреб-витрина",
        "Мебель из натурального дуба",
        "Система климат-контроля для вин",
      ],
      meta: "Проект 2023 | Москва | 240 м²",
    },
    {
      id: 2,
      title: "Neon Lounge",
      img: rest2,
      description: "Футуристичное пространство с элементами киберпанка",
      features: [
        "Светодиодные панели с программируемыми узорами",
        "Акриловые барные стойки с подсветкой",
        "VR-зона для цифровых коктейлей",
        "Интерактивные поверхности столов",
        "Система динамической атмосферы (ароматы+освещение)",
        "Гибридная кухня open-space",
        "3D-проекционные экраны",
      ],
      meta: "Проект 2022 | Санкт-Петербург | 180 м²",
    },
    {
      id: 3,
      title: "Rustico",
      img: rest3,
      description: "Эко-концепт с использованием аутентичных материалов",
      features: [
        "Столешницы из рециклингового бетона",
        "Фасадная система из старых поддонов",
        "Живая растительная стена",
        "Открытые коммуникации в стиле лофт",
        "Самодельные светильники",
        "Зона фермерского маркета",
        "Терраса с раздвижным остеклением",
      ],
      meta: "Проект 2023 | Казань | 320 м²",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === restData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? restData.length - 1 : prev - 1));
  };

  const currentRest= restData[currentIndex];
    return (
    <section className="swiper" id="restaurants">
      <div className="container">
        <div className="swiper__wrapper">
          <h2 className="swiper__title">Рестораны</h2>
          <p className="swiper__text">
            Превратите рестораны в красивое, функциональное место с помощью
            наших уникальных услуг.
          </p>
          <div className="swiper__block">
            <img
              className="swiper__img"
              src={currentRest.img}
              alt={currentRest.title}
              key={currentRest.id}
            />
            <div className="swiper__info">
              <h3 className="swiper__info-title">{currentRest.title}</h3>
              <p className="swiper__info-text">{currentRest.description}</p>
              <p className="swiper__description">Подробное Описание: </p>
              <ul className="swiper__list">
                {currentRest.features.map((feature, index) => (
                  <li key={index} className="swiper__item">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="swiper__arrows">
                <button
                  className="swiper__left"
                  onClick={prevSlide}
                  aria-label="Previous"
                >
                  <HiOutlineArrowSmLeft size={30} />
                </button>

                <div className="swiper__pagination">
                  {restData.map((_, index) => (
                    <span
                      key={index}
                      className={`swiper__dot ${
                        index === currentIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <button
                  className="swiper__right"
                  onClick={nextSlide}
                  aria-label="Next"
                >
                  <HiOutlineArrowSmRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
