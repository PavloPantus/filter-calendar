/* eslint-disable */
import React, { useState } from 'react';
import './FilterCalendar.scss';
import SimpleReactCalendar from 'simple-react-calendar';
import moment from 'moment';

const FilterCalendar = (
  {
    showCalendar,
    setTimePeriodStart,
    setTimePeriodEnd,
  }
) => {
  const now = moment();

  const [date, setDate] = useState(new Date());
  const [selectStart, setSelectStart] = useState(undefined);
  const [selectEnd, setSelectEnd] = useState(undefined);
  const [month, setMonth] = useState((new Date()).getMonth());

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
    'Декабрь',
  ];

  return (
    <div className="calendar">
      <div className="calendar__filters">
        <label>
          <input
            className="calendar__filter-checkbox"
            value="allPeriod"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            Весь срок
          </div>
        </label>

        <label>
          <input
            onChange={() => {
              setSelectStart(new Date()); setSelectEnd(new Date());
              setMonth((new Date()).getMonth());
              setDate(new Date());
            }}
            className="calendar__filter-checkbox"
            value="today"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            Сегодня
          </div>
        </label>

        <label>
          <input
            onChange={() => {
              const yesterday = now.subtract(1, 'day')._d;

              setSelectStart(yesterday);
              setSelectEnd(yesterday);
              setMonth((new Date()).getMonth());
              setDate(new Date());
            }
            }
            className="calendar__filter-checkbox"
            value="yesterday"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            Вчера
          </div>
        </label>

        <label>
          <input
            onChange={() => {
              const sevenDaysAgo = now.subtract(7, 'day')._d;

              setSelectStart(sevenDaysAgo);
              setSelectEnd(new Date());
              setMonth((new Date()).getMonth());
              setDate(new Date());
            }
            }
            className="calendar__filter-checkbox"
            value="lastSevenDays"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            Последние 7 дней
          </div>
        </label>

        <label>
          <input
            onChange={() => {
              const thirtyDaysAgo = now.subtract(30, 'day')._d;

              setSelectStart(thirtyDaysAgo);
              setSelectEnd(new Date());
              setMonth((new Date()).getMonth());
              setDate(new Date());
            }
            }
            className="calendar__filter-checkbox"
            value="lastThirtyDays"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            Последние 30 дней
          </div>
        </label>

        <label>
          <input
            onChange={() => {
              const startOfthisMonth = now.startOf('month')._d.toString();
              const endOfthisMonth = now.endOf('month')._d.toString();

              setSelectStart(new Date(startOfthisMonth));
              setSelectEnd(new Date(endOfthisMonth));
              setMonth(new Date(startOfthisMonth).getMonth());
              setDate(new Date(startOfthisMonth));
            }

            }
            className="calendar__filter-checkbox"
            value="duringThisMonth"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            В этом месяце
          </div>
        </label>

        <label>
          <input
            onChange={() => {
              const startOfLastMonth = now.subtract(1, 'month')
                .startOf('month')._d.toString();
              const endOfLastMonth = now.endOf('month')._d.toString();

              setSelectStart(new Date(startOfLastMonth));
              setSelectEnd(new Date(endOfLastMonth));
              setMonth(new Date(startOfLastMonth).getMonth());
              setDate(new Date(startOfLastMonth));
            }
            }
            className="calendar__filter-checkbox"
            value="lastMonth"
            name="active-filter"
            type="radio"
          />
          <div className="calendar__filter-period">
            Прошлый месяц
          </div>
        </label>
      </div>

      <div className="calendar__dates-block">

        <div className="calendar__block-calendar">
          <div className="calendar__current-month">
            {allMonth[month]}, {date.getFullYear()}
          </div>
          <SimpleReactCalendar
            onMonthChange={(date) => {
              setMonth(date.getMonth());
              setDate(date);
            }}
            daysOfWeek={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']}
            activeMonth={date}
            mode="range"
            highlighted={{
              start: selectStart, end: selectEnd,
            }}
            selected={{
              start: selectStart, end: selectEnd,
            }}
            onSelect={(el) => {
              setSelectStart(el.start);

              setSelectEnd(el.end);
            }}
            onSelectionProgress={(el) => {
              setSelectStart(el.start);

              setSelectEnd(el.end);
            }}
            blockClassName="block-calendar"
          />
        </div>

        <div className="calendar__main-controls">
          <button
            className="calendar__cancel"
            onClick={() => {
              showCalendar(false);
            }}
          >
            Отмена
          </button>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
              console.log('one day', selectStart, selectEnd)
              setTimePeriodStart(selectStart);
              setTimePeriodEnd(selectEnd);
              showCalendar(false);
            }}
            disabled={!(selectStart && selectEnd)}
            className="calendar__update"
          >
            Обновить
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterCalendar;
