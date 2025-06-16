export const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__title">
            Создание Совершенства,
            <span className="hero__title hero__title--highlight">
              Воплощение мечты
            </span>
          </h1>
          <p className="hero__text">
            Специализированные услуги строительства для кухон, наружных
            пространств и ресторанов. Воплотим вашу задумку в реальность с
            высокой точностью и качеством изготовления.
          </p>
          <div className="hero__buttons">
            <button className="hero__order">Заказать Сейчас</button>
            <button className="hero__details">Подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};
