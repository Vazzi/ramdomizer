import React from 'react';
import DashboardButton from './DashboardButton/DashboardButton';
import styles from './DashboardPage.module.scss';

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <DashboardButton title="YES / NO" linkTo="/yesno" />
      <DashboardButton title="Random number" linkTo="/random-number" />
      <DashboardButton title="Order list" linkTo="/order-list" />
      <DashboardButton title="Pick from list" linkTo="/pick-from-list" />
    </div>
  );
};

export default DashboardPage;
