import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span>ИФ</span>
        <div>
          <div>Илья Франков</div>
          <small>Эксперт по недвижимости</small>
        </div>
      </div>
      <nav className="header__nav">
        <a href="#main">Главная</a>
        <a href="#uslugi">Услуги</a>
        <a href="#objects">Объекты</a>
        <a href="#reviews">Отзывы</a>
        <a href="#about">Обо мне</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <div className="header__contacts">
        <div>
          <span>8 (930) 119-90-80</span>
          <small>Ежедневно с 9:00 до 21:00</small>
        </div>
        <a href="tel:89301199080" className="header__btn">Связаться</a>
      </div>
    </header>
  );
}
