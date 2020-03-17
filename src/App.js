import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import UsersTableControls from "./components/UsersTableControls/UsersTableControls";

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <div className="app__main-display">
          <SidePanel />
          <div className="app__users-table-wrapper">
            <UsersTableControls />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
