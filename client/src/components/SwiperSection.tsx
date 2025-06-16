import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import kitchen1 from "/img/kitchen-1.jpg";
import kitchen2 from "/img/kitchen-2.jpg";
import kitchen3 from "/img/kitchen-3.jpg";


import { useState } from "react";

export const SwiperSection = () => {
  const kitchenData = [
    {
      id: 1,
      title: "Современная Кухня",
      img: kitchen1,
      description: "Минималистичный дизайн с умными технологиями",
      features: [
        "Скрытые системы хранения",
        "Столешница из кварцевого агломерата",
        "Встроенная техника Smeg",
        "Панорамное остекление",
        "Система умного освещения",
      ],
    },
    {
      id: 2,
      title: "Классическая Кухня",
      img: kitchen2,
      description: "Теплая атмосфера традиционного европейского качества",
      features: [
        "Массив дуба с патинированием",
        "Мраморные рабочие поверхности",
        "Антикварная фурнитура",
        "Ручная роспись фасадов",
        "Встроенная винная климатизация",
      ],
    },
    {
      id: 3,
      title: "Промышленный Лофт",
      img: kitchen3,
      description: "Урбанистическая эстетика с грубыми текстурами",
      features: [
        "Фасады из стали Corten",
        "Бетонные столешницы",
        "Открытые коммуникации",
        "Подвесные рейлинговые системы",
        "Встроенная профессиональная техника",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === kitchenData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? kitchenData.length - 1 : prev - 1));
  };

  const currentKitchen = kitchenData[currentIndex];

  return (
    <section className="swiper" id="kitchen">
      <div className="container">
        <div className="swiper__wrapper">
          <h2 className="swiper__title">Кухонные Работы</h2>
          <p className="swiper__text">
            Превратите свою кухню в красивое, функциональное место с помощью
            наших уникальных услуг.
          </p>
          <div className="swiper__block">
            <img
              className="swiper__img"
              src={currentKitchen.img}
              alt={currentKitchen.title}
              key={currentKitchen.id}
            />
            <div className="swiper__info">
              <h3 className="swiper__info-title">{currentKitchen.title}</h3>
              <p className="swiper__info-text">{currentKitchen.description}</p>
              <p className="swiper__description">Подробное Описание: </p>
              <ul className="swiper__list">
                {currentKitchen.features.map((feature, index) => (
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
                  {kitchenData.map((_, index) => (
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
