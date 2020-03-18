import React from 'react';
import './UsersTable.scss';

const UsersTable = () => {
  let users = []

  return (
    <table className={'users-table'}>
      <thead className={'users-table__head'}>
        <tr className={'users-table__row-head'}>
          <th className={'users-table__heading'}>
              <input
                className={'users-table__all-users-checkbox'}
                type="checkbox"
                id="all-users-checkbox"
              />
              <label
                htmlFor={'all-users-checkbox'}
                className={'users-table__all-users-label'}
              >
              </label>
          </th>
          <th className={'users-table__heading'}>Пользователь</th>
          <th className={'users-table__heading'}>Дата регистрации</th>
          <th className={'users-table__heading'}>Последняя активность</th>
          <th className={'users-table__heading'}>Последнее действие</th>
          <th className={'users-table__heading'}>Продукт</th>
          <th className={'users-table__heading'}>
            <button className={'users-table__show-users-button'}>
              Отобразить 15
            </button>
          </th>

        </tr>
      </thead>
      <tbody className={'users-table__body'}>
        <tr className={'users-table__row'}>
          <td className={'users-table__data'}>
            <label
            >
              <input
                className={'users-table__user-checkbox'}
                type="checkbox"
              />
              <div className={'users-table__user-label'}></div>
            </label>
          </td>
          <td className={'users-table__data'}>
            <div className={'users-table__user-number'}>User 1</div>
            <div className={'users-table__user-mail'}>user@user.com</div>
          </td>
          <td className={'users-table__data'}>Февраль 10, 2020 </td>
          <td className={'users-table__data'}>Февраль 10, 2020 </td>
          <td className={'users-table__data add-blur'}>view_landing_course1</td>
          <td className={'users-table__data add-blur'}>Как наладить отнош</td>
          <td className={'users-table__data'}>
            <button className={'users-table__edit-item'}>
              <img src="images/icon-edit.svg" />
            </button>
            <button className={'users-table__delete-item'}>
              <img src="images/icon-delete.svg" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UsersTable;
