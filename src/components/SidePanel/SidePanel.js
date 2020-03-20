/* eslint-disable */
import React from 'react';
import './SidePanel.scss';

const SidePanel = () => (
  <div className="side-panel">
    <div className="side-panel__select-wrapper">
      <select className="side-panel__select-level" name="" id="">
        <option value="">
          Эксперт
        </option>
      </select>
      <div className="side-panel__select-icon" />
    </div>

    <div className="side-panel__side-menu side-menu">
      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/analitics.svg" />
        <span>Аналитика</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/product.svg" />
        <span>Продукт</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/users.svg" />
        <span>Пользователи</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo"
             src="/filter-calendar/images/site-builder.svg"
        />
        <span>Конструктор сайта</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/streams.svg" />
        <span>Трансляции</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/sending.svg" />
        <span>Рассылка</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/marketing.svg" />
        <span>Маркетинг</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/payments.svg" />
        <span>Платежы</span>
      </button>

      <button className="side-menu__menu-item">
        <img className="side-menu__item-logo" src="/filter-calendar/images/settings.svg" />
        <span>Настройки</span>
      </button>
    </div>

  </div>
);

export default SidePanel;
