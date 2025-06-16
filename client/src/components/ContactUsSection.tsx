import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

export const ContactUsSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        project_type: 'kitchen',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:8081/api/user/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Ошибка отправки');
      
      setSubmitStatus({ success: true, message: 'Заявка отправлена!' });
      setFormData({
        name: '',
        phone: '',
        email: '',
        project_type: 'kitchen',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Ошибка отправки' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact-us" id="contact-us">
      <div className="container">
        <div className="contact-us__wrapper">
          <h2 className="contact-us__title">Связаться С Нами</h2>
          <p className="contact-us__text">
            Готовы начать проект? Свяжитесь с нами для бесплатной консультации.
          </p>

          <div className="contact-us__block">
            <div className="contact-us__block-left">
              <div className="contact-us__field">
                <div className="contact-us__field-icon">
                  <FiPhone size={20} />
                </div>
                <div className="contact-us__field-info">
                  <span className="contact-us__field-title">Телефон</span>
                  <span className="contact-us__field-text">
                    +7(800)-555-35-35
                  </span>
                </div>
              </div>
              <div className="contact-us__field">
                <div className="contact-us__field-icon">
                  <AiOutlineMail size={20} />
                </div>
                <div className="contact-us__field-info">
                  <span className="contact-us__field-title">Email</span>
                  <span className="contact-us__field-text">
                    email@gmail.com
                  </span>
                </div>
              </div>
              <div className="contact-us__field">
                <div className="contact-us__field-icon">
                  <SlLocationPin size={20} />
                </div>
                <div className="contact-us__field-info">
                  <span className="contact-us__field-title">Адрес</span>
                  <span className="contact-us__field-text">
                    ул. Пушкина, д. Калатушкина
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-us__block-right">
              <div className="contact-us__block-right-left">
                <input
                  className="contact-us__block-field"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contact-us__block-field"
                  type="phone"
                  name="phone"
                  placeholder="Телефон"
                value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-us__block-right-right">
                <input
                  className="contact-us__block-field"
                  type="email"
                  name="email"
                  placeholder="Email"
                                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <select className="contact-us__block-field"
                                value={formData.project_type}
                                name="project_type"
                  onChange={handleChange}
                  required
                >
                  <option value="kitchen">Кухни</option>
                  <option value="outdoor">Наружные</option>
                  <option value="restaurant">Рестораны</option>
                </select>
              </div>
              <div className="contact-us__block-down">
                <div className="contact-us__block-textarea">
                  <textarea
                    className="contact-us__block-textarea-field"
                    name="message"
                    id="message"
                    placeholder="Расскажите о проекте"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="contact-us__btn" type="submit" disabled={isSubmitting} onClick={handleSubmit}>{isSubmitting ? 'Отправка...' : 'Отправить'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
