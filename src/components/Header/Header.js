import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <img
      className="header__logo"
      src="images/logo_OJOWO.svg"
      alt="logo"
    />

    <span className="header__app-version">
      Beta
    </span>

    <button type="button" className="header__notifications header__button" />

    <select className="header__select-name" name="" id="">
      <option value="Артем">Артем</option>
    </select>

    <button type="button" className="header__search header__button" />

    <select className="header__select-language" name="" id="">
      <option value="RU">RU</option>
    </select>
  </header>
);

export default Header;
