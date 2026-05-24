import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__top">
        <div>
          <div className="logo">Илья Франков</div>
          <div>Эксперт по недвижимости и инвестициям</div>
          <div className="footer__social">
            <a href="https://vk.com/im?sel=90517418" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
            <a href="#">WhatsApp</a>
            <a href="#">Telegram</a>
          </div>
        </div>
        <div>
          <b>Навигация</b>
          <ul>
            <li><a href="#main">Главная</a></li>
            <li><a href="#uslugi">Услуги</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>
        <div>
          <b>Контакты</b>
          <div>8 (930) 119-90-80</div>
          <div>г. Ярославль, ул. Свободы, 62</div>
          <div>Ежедневно с 9:00 до 21:00</div>
        </div>
      </div>
      <div className="footer__copy">
        © 2024 Илья Франков. Все права защищены. &nbsp;|&nbsp; Политика конфиденциальности &nbsp;|&nbsp; Пользовательское соглашение
      </div>
    </footer>
  );
}
