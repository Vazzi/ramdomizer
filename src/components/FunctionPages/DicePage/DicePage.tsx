import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import { getRandDiceRoll } from '../../../utils/randomFunctions';
import Dice from '../../UI/Dice/Dice';
import { DiceValue } from '../../../models/types';
import styles from './DicePage.module.scss';

const MAX_DICES = 8;

/**
 * Dice page
 * Represent the page where user get random dice
 *
 * @returns React component
 */
const DicePage: React.FC = () => {
  const [results, setResults] = React.useState<DiceValue[] | null>(null);
  const [diceCount, setDiceCount] = React.useState<number>(1);

  const handleRoll = () => {
    setResults(
      Array(diceCount)
        .fill(0)
        .map(() => getRandDiceRoll())
    );
  };

  const handleDiceCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = +event.target.value;
    if (typeof value !== 'number' || value < 1 || value > MAX_DICES) {
      setDiceCount(1);
    } else {
      setDiceCount(value);
    }
    setResults(null);
  };

  const resultEl = results ? (
    <div className={styles.result}>
      {results.map((result, index) => (
        <Dice key={index} value={result} />
      ))}
    </div>
  ) : null;

  return (
    <BaseFunctionPage
      title="Roll of the dice"
      description="Here you get the random roll of the dice."
      onRoll={handleRoll}
      result={resultEl}
    >
      <div className={styles.container}>
        <label>Number of dice:</label>
        <input
          type="number"
          id="input-dice-count"
          step="1"
          min="0"
          value={diceCount}
          onChange={handleDiceCountChange}
        />
      </div>
    </BaseFunctionPage>
  );
};

export default DicePage;
