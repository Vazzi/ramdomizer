import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';

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
  const { formatMessage } = useIntl();
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
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = +event.target.value;

    setDiceCount(value);
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
      title={formatMessage({ ...messages.title })}
      description={formatMessage({ ...messages.description })}
      onRoll={handleRoll}
      result={resultEl}
    >
      <div className={styles.container}>
        <label>{formatMessage({ ...messages.diceCountLabel })}</label>
        <select
          value={diceCount}
          name="number-of-dice"
          id="select-number-of-dice"
          onChange={handleDiceCountChange}
        >
          {Array(MAX_DICES)
            .fill(0)
            .map((_, i) => (
              <option key={i} value={`${i + 1}`}>
                {i + 1}
              </option>
            ))}
        </select>
      </div>
    </BaseFunctionPage>
  );
};

export default DicePage;
