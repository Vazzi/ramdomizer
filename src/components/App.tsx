import React from 'react';

import styles from './App.module.scss';
import DashboardPage from './DashboardPage/DashboardPage';

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <DashboardPage />
    </div>
  );
};

export default App;
