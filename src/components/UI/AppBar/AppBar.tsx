import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppBar.module.scss';
import Dice from '../Dice/Dice';
import { getRandDiceRoll } from '../../../utils/randomFunctions';

/**
 * AppBar
 * Represent the App bar of the application
 *
 * @returns React component
 */
const AppBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Dice value={getRandDiceRoll()} size={20} />
      <Link to="/">
        <h3>Randomizer</h3>
      </Link>
    </div>
  );
};

export default AppBar;
