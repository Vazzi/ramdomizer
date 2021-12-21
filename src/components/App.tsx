import React from 'react';

import styles from './App.module.scss';
import DashboardPage from './DashboardPage/DashboardPage';
import Header from './UI/Header/Header';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <DashboardPage />
    </div>
  );
};

export default App;
