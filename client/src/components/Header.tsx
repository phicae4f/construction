import { useEffect, useState } from "react";
import { MdConstruction } from "react-icons/md";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo-wrapper">
            <div className="header__logo-icon">
              <MdConstruction size={70} />
            </div>
            <span className="header__logo-title">BuildMaster</span>
          </div>
          <div className="header__right">
            <ul className="header__list">
              <li className={`header__item ${scrolled ? "header__item--scrolled" : ""}`} onClick={() => scrollToSection("hero")}>Главная</li>
              <li className={`header__item ${scrolled ? "header__item--scrolled" : ""}`} onClick={() => scrollToSection("about-us")}>О нас</li>
              <li className={`header__item ${scrolled ? "header__item--scrolled" : ""}`} onClick={() => scrollToSection("kitchen")}>Кухни</li>
              <li className={`header__item ${scrolled ? "header__item--scrolled" : ""}`} onClick={() => scrollToSection("outdoor")}>Наружные</li>
              <li className={`header__item ${scrolled ? "header__item--scrolled" : ""}`} onClick={() => scrollToSection("restaurants")}>Рестораны</li>
            </ul>
            <button className="header__btn" onClick={() => scrollToSection("contact-us")}>Связаться с нами</button>
          </div>
        </div>
      </div>
    </header>
  );
};
