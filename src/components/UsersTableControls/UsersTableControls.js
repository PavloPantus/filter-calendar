/* eslint-disable */
import React, { useState } from 'react';
import './UsersTableControls.scss';
import FilterCalendar from '../FilterCalendar/FilterCalendar';

const UsersTableControls = (
  {
    timePeriodStart,
    setTimePeriodStart,
    timePeriodEnd,
    setTimePeriodEnd
  }) => {
  const allMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  const [showCalendar, setShowCalendar] = useState(false);
 /* const [timePeriodStart, setTimePeriodStart] = useState(undefined);
  const [timePeriodEnd, setTimePeriodEnd] = useState(undefined);*/

  return (
    <>
      <div className="controls-table">
        <div className="controls-table__container">
          <button
            className="controls-table__time-period controls-button"
            onClick={() => {
              setShowCalendar(true);
            }}
          >
            <img className="controls-button__icon"
                 src="/filter-calendar/images/icon-calendar.svg"
            />
            <span className="controls-button__name">За 1 день</span>
          </button>

          <button className="controls-table__filter controls-button">
            <img className="controls-button__icon"
                 src="/filter-calendar/images/icon-filter.svg"
            />
            <span className="controls-button__name">Фильтр</span>
          </button>

          <button className="controls-table__unload">
            Выгрузить
          </button>

          <button className="controls-table__add-to-contacts">
            Добавить в контакты
          </button>
        </div>
        <div className="controls-table__filters-container">
          {
            timePeriodStart && (
              <div className="controls-table__active-filter">
                <span className="controls-table__filter-data">
                  {timePeriodStart?.getDate()}
                  {' '}
                  {allMonth[timePeriodStart?.getMonth()].slice(0, 3)}
                  {' - '}
                  {timePeriodEnd?.getDate()}
                  {' '}
                  {allMonth[timePeriodEnd?.getMonth()].slice(0, 3)}
                  {' '}
                  {timePeriodEnd?.getFullYear()}
                  {' '}
                  г.
                </span>
                <button className="controls-table__cancel-filter" />
              </div>
            )
          }
        </div>
      </div>
      {
        showCalendar && (
          <div className="calendar-container">
            <div className="calendar-wrapper">
              <FilterCalendar
                showCalendar={setShowCalendar}
                setTimePeriodStart={setTimePeriodStart}
                setTimePeriodEnd={setTimePeriodEnd}
              />
            </div>
          </div>
        )
      }
    </>
  );
};

export default UsersTableControls;
