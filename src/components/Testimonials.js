import React from 'react';
import '../styles/Testimonials.css';

const reviews = [
  {
    name: "Максим Г.",
    text: "Хочу выразить благодарность Илье за профессионализм и оперативность. Быстро подобрал объект и нашел современное решение.",
    date: "12 апреля 2024",
    rate: 5
  },
  {
    name: "Ольга Р.",
    text: "Илья сопровождал сделку от и до. Всегда на связи, все объясняет понятно и доступно. Очень довольна результатом.",
    date: "5 марта 2024",
    rate: 5
  },
  {
    name: "Дмитрий С.",
    text: "Покупали квартиру через Илью. Сделка прошла быстро и безопасно. Получили акцию от банка. Рекомендуем!",
    date: "18 февраля 2024",
    rate: 5
  },
  {
    name: "Екатерина И.",
    text: "Спасибо за помощь с ипотекой и новостройкой. Подобрал выгодный объект по всем параметрам. Профессионал своего дела!",
    date: "25 января 2024",
    rate: 5
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <h2>Отзывы клиентов</h2>
      <div className="testimonials__score">5.0 ★ на основе отзывов с сайта Этажи</div>
      <div className="testimonials__list">
        {reviews.map(({name, text, date}, i) => (
          <div className="testimonials__item" key={i}>
            <div className="testimonials__name">{name}</div>
            <div className="testimonials__text">{text}</div>
            <div className="testimonials__date">{date}</div>
          </div>
        ))}
      </div>
      <div className="testimonials__more">
        <a href="#">Все отзывы</a>
      </div>
    </section>
  );
}
