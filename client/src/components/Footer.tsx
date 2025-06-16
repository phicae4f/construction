import { MdConstruction } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__main">
            <div className="footer__logo-wrapper">
              <div className="footer__logo-icon">
                <MdConstruction size={70} />
              </div>
              <span className="footer__logo-title">BuildMaster</span>
            </div>
            <p className="footer__logo-text">Экспертное предоставление услуг по постройке кухон, наружных
            пространств и ресторанов. На рынке с 1998 года.</p>
          </div>
          <div className="footer__services">
            <p className="footer__title">Услуги</p>
            <ul className="footer__list">
              <li className="footer__item">Кухни</li>
              <li className="footer__item">Наружные пространста</li>
              <li className="footer__item">Рестораны</li>
            </ul>
          </div>
          <div className="footer__contact">
            <p className="footer__title">Контакты</p>
            <ul className="footer__list">
              <li className="footer__item">ул.Пушкина, д.Калатушкина</li>
              <li className="footer__item">Телефон: +7(880)-555-35-35</li>
              <li className="footer__item">Email: email@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
