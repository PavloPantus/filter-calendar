/* eslint-disable */
import React, {useMemo, useState, useEffect} from 'react';
import './UsersTable.scss';

const UsersTable = (
  {
    timePeriodStart,
    timePeriodEnd,
  }
  ) => {
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
    isActive: true,
  };

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    let newUsers = [];

    for (let i = 1; i <= 130; i += 1) {
      const registrationDate = {
        day: getRandomIntInclusive(0, 29),
        month: getRandomIntInclusive(1, 12),
        year: getRandomIntInclusive(2019, 2019),
      };

      const newUser = {
        ...user,
        userNumber: i,
        registrationDate,
        lastActivity: {
          day: getRandomIntInclusive(0, 29),
          month: getRandomIntInclusive(3, 4),
          year: getRandomIntInclusive(registrationDate.year + 1, 2020),
        },
        isLocked: getRandomIntInclusive(0,1)===1? true : false,
      };

      newUsers.push(newUser);
    }

     setUsers(newUsers)
  }, [])


  const filteredAndSortedUsers = useMemo(()=>{

    if(timePeriodStart && timePeriodEnd){
      console.log('filtering')
      return users.filter((user)=>{
        let userLastActivityDate = new Date(`${user.lastActivity.year}-${user.lastActivity.month.toString().length>1? user.lastActivity.month: `0${user.lastActivity.month}`}-${user.lastActivity.day.toString().length>1? user.lastActivity.day : `0${user.lastActivity.day}`}T00:00:00Z`)


        if(
          userLastActivityDate >= timePeriodStart
          &&
          userLastActivityDate <= timePeriodEnd
          ||
          (userLastActivityDate.getFullYear() === timePeriodStart.getFullYear()
            &&
            userLastActivityDate.getMonth() === timePeriodStart.getMonth()
            &&
            userLastActivityDate.getDate() === timePeriodStart.getDate()
            &&
            userLastActivityDate.getFullYear() === timePeriodEnd.getFullYear()
            &&
            userLastActivityDate.getMonth() === timePeriodEnd.getMonth()
            &&
            userLastActivityDate.getDate() === timePeriodEnd.getDate())


        ) { return true}

        return false;

      })
        .sort((user1,user2)=>{
        let user1LastActivityDate = new Date(`${user1.lastActivity.year}-${user1.lastActivity.month.toString().length>1? user1.lastActivity.month: `0${user1.lastActivity.month}`}-${user1.lastActivity.day.toString().length>1? user1.lastActivity.day : `0${user1.lastActivity.day}`}T00:00:00Z`);
        let user2LastActivityDate = new Date(`${user2.lastActivity.year}-${user2.lastActivity.month.toString().length>1? user2.lastActivity.month: `0${user2.lastActivity.month}`}-${user2.lastActivity.day.toString().length>1? user2.lastActivity.day : `0${user2.lastActivity.day}`}T00:00:00Z`);

        return user1LastActivityDate.getTime() - user2LastActivityDate.getTime()
      })

    }

    return users

  },[timePeriodStart, timePeriodEnd, users])



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
          filteredAndSortedUsers.map(user => (
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
                  {
                    user.isLocked &&
                    <img className={'users-table__icon-locked-user'} src="/filter-calendar/images/icon-lockUser.svg" />
                  }
                  User
                  {user.userNumber}
                </div>
                <div className="users-table__user-mail">{user.userMail}</div>
              </td>
              <td className={`users-table__data ${user.isLocked? 'users-table__data_locked' : ''}`}>
                {dateVocabulary[user.registrationDate.month]}
                {' '}
                {user.registrationDate.day}
                ,
                {' '}
                {user.registrationDate.year}
              </td>
              <td className={`users-table__data ${user.isLocked? 'users-table__data_locked' : ''}`}>
                {dateVocabulary[user.lastActivity.month]}
                {' '}
                {user.lastActivity.day}
                ,
                {' '}
                {user.lastActivity.year}
              </td>
              <td className={`users-table__data add-blur ${user.isLocked? 'users-table__data_locked' : ''}`}>{user.lastActions}</td>
              <td className={`users-table__data add-blur ${user.isLocked? 'users-table__data_locked' : ''}`}>{user.product}</td>
              <td className="users-table__data">
                <button className="users-table__edit-item">
                  <img src="/filter-calendar/images/icon-edit.svg" />
                </button>
                <button className="users-table__delete-item">
                  <img src="/filter-calendar/images/icon-delete.svg" />
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
