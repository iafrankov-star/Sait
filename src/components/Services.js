import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: "Покупка недвижимости",
    desc: "Подберу лучший объект под ваш бюджет, проверю сделку.",
  },
  {
    title: "Продажа недвижимости",
    desc: "Продам ваш объект быстро и по максимальной цене.",
  },
  {
    title: "Инвестиции",
    desc: "Подбор и оформление объектов для роста капитала.",
  },
  {
    title: "Ипотека",
    desc: "Помощь в подборе ипотеки и сопровождение программы.",
  },
  {
    title: "Аренда",
    desc: "Подбор и сдача в аренду жилых и коммерческих объектов.",
  },
  {
    title: "Коммерческая недвижимость",
    desc: "Продажа, подбор и аренда коммерческих помещений.",
  }
];

export default function Services() {
  return (
    <section className="services" id="uslugi">
      <h2>Мои услуги</h2>
      <div className="services__desc">
        Комплексные решения для всех ваших задач в сфере недвижимости
      </div>
      <div className="services__list">
        {services.map((s, i) => (
          <div key={i} className="services__item">
            <div className="services__item-title">{s.title}</div>
            <div className="services__item-desc">{s.desc}</div>
            <button>Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  );
}
