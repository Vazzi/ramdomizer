import React from 'react';
import styles from './DashboardButton.module.scss';

interface DashboardButtonProps {
  title: string;
  linkTo: string;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ title, linkTo }) => {
  return (
    <a className={styles.button} href={linkTo}>
      {title}
    </a>
  );
};

export default DashboardButton;
