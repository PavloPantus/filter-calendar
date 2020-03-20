/* eslint-disable */
import React from 'react';
import './UsersTable.scss';

const UsersTable = () => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min; // Включаючи мінімум та максимум
  }

  const dateVocabulary = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
  };

  const user = {
    userNumber: 1,
    userMail: 'user@user.com',
    registrationDate: {
      day: 10,
      month: 2,
      year: 2020,
    },
    lastActivity: {
      day: 10,
      month: 2,
      year: 2020,
    },
    lastActions: 'view_landing_course1',
    product: 'Как наладить отнош',
  };

  const users = [];

  for (let i = 1; i <= 13; i += 1) {
    const registrationDate = {
      day: getRandomIntInclusive(1, 30),
      month: getRandomIntInclusive(1, 12),
      year: getRandomIntInclusive(2010, 2020),
    };

    const newUser = {
      ...user,
      userNumber: i,
      registrationDate,
      lastActivity: {
        day: getRandomIntInclusive(1, 30),
        month: getRandomIntInclusive(1, 12),
        year: getRandomIntInclusive(registrationDate.year + 1, 2020),
      },
    };

    users.push(newUser);
  }

  return (
    <table className="users-table">
      <thead className="users-table__head">
        <tr className="users-table__row-head">
          <th className="users-table__heading">
            <input
              className="users-table__all-users-checkbox"
              type="checkbox"
              id="all-users-checkbox"
            />
            <label
              htmlFor="all-users-checkbox"
              className="users-table__all-users-label"
            />
          </th>
          <th className="users-table__heading">Пользователь</th>
          <th className="users-table__heading">Дата регистрации</th>
          <th className="users-table__heading">Последняя активность</th>
          <th className="users-table__heading">Последнее действие</th>
          <th className="users-table__heading">Продукт</th>
          <th className="users-table__heading">
            <button className="users-table__show-users-button">
              Отобразить 15
            </button>
          </th>

        </tr>
      </thead>
      <tbody className="users-table__body">
        {
          users.map(user => (
            <tr key={user.userNumber} className="users-table__row">
              <td className="users-table__data">
                <label>
                  <input
                    className="users-table__user-checkbox"
                    type="checkbox"
                  />
                  <div className="users-table__user-label" />
                </label>
              </td>
              <td className="users-table__data">
                <div className="users-table__user-number">
                  User
                  {user.userNumber}
                </div>
                <div className="users-table__user-mail">{user.userMail}</div>
              </td>
              <td className="users-table__data">
                {dateVocabulary[user.registrationDate.month]}
                {' '}
                {user.registrationDate.day}
                ,
                {' '}
                {user.registrationDate.year}
              </td>
              <td className="users-table__data">
                {dateVocabulary[user.lastActivity.month]}
                {' '}
                {user.lastActivity.day}
                ,
                {' '}
                {user.lastActivity.year}
              </td>
              <td className="users-table__data add-blur">{user.lastActions}</td>
              <td className="users-table__data add-blur">{user.product}</td>
              <td className="users-table__data">
                <button className="users-table__edit-item">
                  <img src="images/icon-edit.svg" />
                </button>
                <button className="users-table__delete-item">
                  <img src="images/icon-delete.svg" />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default UsersTable;
