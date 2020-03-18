import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import UsersTableControls from "./components/UsersTableControls/UsersTableControls";
import UsersTable from "./components/UsersTable/UsersTable";

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <div className="app__main-display">
          <SidePanel />
          <div className="app__users-table-wrapper">
            <UsersTableControls />
            <UsersTable />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
