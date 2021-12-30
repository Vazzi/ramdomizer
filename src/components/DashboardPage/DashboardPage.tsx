import React from 'react';
import styles from './DashboardPage.module.scss';

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>Placehodler: YES/NO</div>
      <div>Placeholder: Random number</div>
      <div>Placeholder: Order list</div>
      <div>Placeholder: Pick from list</div>
    </div>
  );
};

export default DashboardPage;
