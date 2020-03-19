import React, { useState } from 'react';
import './FilterCalendar.scss';
import SimpleReactCalendar from 'simple-react-calendar';

const FilterCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectStart, setSelectStart] = useState(undefined);
  const [selectEnd, setSelectEnd] = useState(undefined);

  return (
    <div className="calendar">
      <div className="calendar__filters">
        <label>
          <input className="calendar__filter-checkbox" value="allPeriod" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            Весь срок
          </div>
        </label>

        <label>
          <input className="calendar__filter-checkbox" value="today" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            Сегодня
          </div>
        </label>

        <label>
          <input className="calendar__filter-checkbox" value="yesterday" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            Вчера
          </div>
        </label>

        <label>
          <input className="calendar__filter-checkbox" value="lastSevenDays" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            Последние 7 дней
          </div>
        </label>

        <label>
          <input className="calendar__filter-checkbox" value="lastThirtyDays" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            Последние 30 дней
          </div>
        </label>

        <label>
          <input className="calendar__filter-checkbox" value="duringThisMonth" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            В этом месяце
          </div>
        </label>

        <label>
          <input className="calendar__filter-checkbox" value="lastMonth" name="active-filter" type="radio" />
          <div className="calendar__filter-period">
            Прошлый месяц
          </div>
        </label>
      </div>

      <div className="calendar__dates-block">

        <div className="calendar__block-calendar">
          <SimpleReactCalendar
            MonthHeaderComponent={() => (
              <div className="calendar__controls-top">
                <button className="calendar__month-back month-control">
                  <img src="/images/icon-calendar-control-arrow.svg" alt="" />
                </button>
                Февраль, 2020
                <button className="calendar__month-forward month-control">
                  <img src="/images/icon-calendar-control-arrow.svg" alt="" />
                </button>
              </div>
            )}

            daysOfWeek={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']}
            activeMonth={date}
            mode="range"
            highlighted={{
              start: selectStart, end: selectEnd,
            }}
            selected={{start: selectStart, end: selectEnd}}
            onSelect={(el) => {
              console.log(el);

              setSelectStart(el.start)

              setSelectEnd(el.end)
            }}
            onSelectionProgress={(el) => {

            }}
            blockClassName="block-calendar"
          />
        </div>

      </div>
    </div>
  );
};

export default FilterCalendar;
