import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DashboardButton.module.scss';

interface DashboardButtonProps {
  title: string;
  linkTo: string;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ title, linkTo }) => {
  return (
    <Link className={styles.button} to={linkTo}>
      {title}
    </Link>
  );
};

export default DashboardButton;
