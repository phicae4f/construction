import { useState } from "react";
import outdoor1 from "/img/outdoor-1.jpg";
import outdoor2 from "/img/outdoor-2.jpg";
import outdoor3 from "/img/outdoor-3.jpg";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

export const SwiperSecondSection = () => {
  const outdoorData = [
    {
      id: 1,
      title: "Эксклюзивная терраса",
      img: outdoor1,
      description: "Современное пространство для отдыха с панорамным обзором",
      features: [
        "Настил из термообработанной древесины",
        "Встроенная система освещения",
        "Автоматические раздвижные маркизы",
        "Зона outdoor-кухни с грилем",
        "Декоративные бетонные экраны",
        "Каминная группа с сидениями",
        "Система автоматического полива",
      ],
    },
    {
      id: 2,
      title: "Японский сад камней",
      img: outdoor2,
      description: "Философия дзен в вашем дворе",
      features: [
        "Ручная укладка природного камня",
        "Декоративный гравий с узорами",
        "Мостики из красного кедра",
        "Чайный домик с раздвижными дверями",
        "Водопад с системой циркуляции",
        "Специально подобранные растения",
        "Каменные фонари Yukimi",
      ],
    },
    {
      id: 3,
      title: "Ландшафт с бассейном",
      img: outdoor3,
      description: "Курортная атмосфера на вашем участке",
      features: [
        "Бесконечный бассейн 10×4 м",
        "Декор из натурального камня",
        "Зона СПА с гидромассажем",
        "Деревянные настилы ipe",
        "Автоматическое покрытие",
        "Система подогрева воды",
        "Ландшафтное освещение",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === outdoorData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? outdoorData.length - 1 : prev - 1));
  };

  const currentOutdoor = outdoorData[currentIndex];

  return (
    <section className="swiper" id="outdoor">
      <div className="container">
        <div className="swiper__wrapper">
          <h2 className="swiper__title">Наружные Работы</h2>
          <p className="swiper__text">
            Превратите наружное пространство в красивое, функциональное место с помощью
            наших уникальных услуг.
          </p>
          <div className="swiper__block">
            <img
              className="swiper__img"
              src={currentOutdoor.img}
              alt={currentOutdoor.title}
              key={currentOutdoor.id}
            />
            <div className="swiper__info">
              <h3 className="swiper__info-title">{currentOutdoor.title}</h3>
              <p className="swiper__info-text">{currentOutdoor.description}</p>
              <p className="swiper__description">Подробное Описание: </p>
              <ul className="swiper__list">
                {currentOutdoor.features.map((feature, index) => (
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
                  {outdoorData.map((_, index) => (
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
