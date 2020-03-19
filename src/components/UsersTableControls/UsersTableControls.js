import React from 'react';
import './UsersTableControls.scss';
import FilterCalendar from '../FilterCalendar/FilterCalendar';

const UsersTableControls = () => (
  <>
    <div className="controls">
      <button className="controls__time-period controls-button">
        <img className="controls-button__icon" src="images/icon-calendar.svg" />
        <span className="controls-button__name">За 1 день</span>
      </button>

      <button className="controls__filter controls-button">
        <img className="controls-button__icon" src="images/icon-filter.svg" />
        <span className="controls-button__name">Фильтр</span>
      </button>

      <button className="controls__unload">
        Выгрузить
      </button>

      <button className="controls__add-to-contacts">
        Добавить в контакты
      </button>
    </div>
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <FilterCalendar />
      </div>
    </div>
  </>
);

export default UsersTableControls;
