import React from 'react';
import '../styles/Geography.css';

const cities = [
  "Ярославль", "Москва", "Санкт-Петербург", "Краснодар", "Сочи", "Крым"
];

export default function Geography() {
  return (
    <section className="geography">
      <h2>География работы</h2>
      <div className="geography__list">
        {cities.map(city => (
          <div key={city} className="geography__item">
            <div className="geography__item-img"></div>
            <div>{city}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
