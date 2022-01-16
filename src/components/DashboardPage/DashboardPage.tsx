import React from 'react';
import DashboardButton from './DashboardButton/DashboardButton';
import styles from './DashboardPage.module.scss';

import Routes from '../../constants/routes';

/**
 * Dashboard page
 * Represent the component where is the list of links to all function pages
 *
 * @returns React component
 */
const DashboardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <DashboardButton title="YES / NO" linkTo={Routes.YesNo} />
      <DashboardButton title="Random number" linkTo={Routes.RandomNumber} />
      <DashboardButton title="Order list" linkTo={Routes.OrderList} />
      <DashboardButton title="Pick from list" linkTo={Routes.PickFromList} />
    </div>
  );
};

export default DashboardPage;
