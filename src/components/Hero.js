import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="main">
      <div className="hero__info">
        <div className="hero__subtitle">Эксперт по недвижимости</div>
        <div className="hero__title">Илья Франков</div>
        <div className="hero__desc">
          Помогаю покупать и продавать недвижимость выгодно и безопасно
        </div>
        <div className="hero__tags">
          <span>Новостройки</span>
          <span>Вторичка</span>
          <span>Инвестиции</span>
          <span>Ипотека</span>
          <span>Аренда</span>
          <span>Коммерция</span>
        </div>
        <div className="hero__feat">
          <div>
            <img src="/icons/safe.svg" alt="" />
            <span>Экономия времени и денег</span>
          </div>
          <div>
            <img src="/icons/law.svg" alt="" />
            <span>Проверка и юридическая безопасность</span>
          </div>
          <div>
            <img src="/icons/key.svg" alt="" />
            <span>Сопровождение сделок под ключ</span>
          </div>
          <div>
            <img src="/icons/approach.svg" alt="" />
            <span>Индивидуальный подход</span>
          </div>
        </div>
      </div>
      <form className="hero__form" onSubmit={e => {
        e.preventDefault();
        window.open("https://vk.com/im?sel=90517418", "_blank");
      }}>
        <div className="hero__form-title">Получите бесплатную консультацию</div>
        <input type="text" placeholder="Ваше имя" required />
        <input type="tel" placeholder="Телефон" required />
        <input type="text" placeholder="Что вас интересует?" />
        <button type="submit">Получить кон��ультацию</button>
        <div className="hero__form-social">
          <a href="tel:89301199080">Позвонить</a>
          <a href="https://vk.com/im?sel=90517418" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
        </div>
      </form>
    </section>
  );
}
