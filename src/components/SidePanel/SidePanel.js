import React from 'react';
import './SidePanel.scss';

const SidePanel = () => {

  return (
    <div className={'side-panel'}>
      <div className="side-panel__select-wrapper">
        <select className={'side-panel__select-level'} name="" id="">
          <option value="">
            Эксперт
          </option>
        </select>
        <div className="side-panel__select-icon"></div>
      </div>

      <div className="side-panel__side-menu side-menu">
        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/analitics.svg"/>
          <span>Аналитика</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/product.svg"/>
          <span>Продукт</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/users.svg"/>
          <span>Пользователи</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/site-builder.svg"/>
          <span>Конструктор сайта</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/streams.svg"/>
          <span>Трансляции</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/sending.svg"/>
          <span>Рассылка</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/marketing.svg"/>
          <span>Маркетинг</span>
        </button>


        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/payments.svg"/>
          <span>Платежы</span>
        </button>

        <button className="side-menu__menu-item">
          <img className={'side-menu__item-logo'} src="/images/settings.svg"/>
          <span>Настройки</span>
        </button>
      </div>

    </div>
  );
}

export default SidePanel;
