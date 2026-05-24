import React from 'react';
import '../styles/Consultation.css';

export default function Consultation() {
  return (
    <section className="consultation">
      <div>
        <h2>Готовы найти недвижимость мечты?</h2>
        <div className="consultation__desc">Оставьте заявку, и я свяжусь с вами в ближайшее время</div>
      </div>
      <div className="consultation__actions">
        <a href="tel:89301199080" className="cta-btn">Позвонить</a>
        <a href="https://vk.com/im?sel=90517418" target="_blank" className="cta-btn" rel="noopener noreferrer">Написать в VK</a>
      </div>
    </section>
  );
}
