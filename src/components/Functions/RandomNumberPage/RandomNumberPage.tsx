import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import styles from './RandomNumberPage.module.scss';
import { Range } from '../../../models/types';
import { getRandNumber } from '../../../utils/randomFunctions';

enum RangeLimitType {
  Max = 0,
  Min
}

const RandomNumberPage: React.FC = () => {
  const [result, setResult] = React.useState<string | null>(null);
  const [range, setRange] = React.useState<Range>({ min: 0, max: 10 });
  const [error, setError] = React.useState<string | null>(null);

  const onRollClickHandle: () => void = () => {
    setResult(getRandNumber(range).toString());
  };

  const setErrorMessage = (shouldSet: boolean) => {
    if (shouldSet) {
      setError('Minimum is bigger or equal to maximum!');
    } else {
      setError(null);
    }
  };

  const onRangeChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: RangeLimitType
  ) => {
    const newValue: number = +event.target.value;
    switch (type) {
      case RangeLimitType.Min:
        setErrorMessage(newValue >= range.max);
        setRange((oldState) => ({ min: newValue, max: oldState.max }));
        break;
      case RangeLimitType.Max:
        setErrorMessage(newValue <= range.min);
        setRange((oldState) => ({ min: oldState.min, max: newValue }));
        break;
    }
  };

  return (
    <BaseFunctionPage
      title="Random Number"
      description="Here you get the random number form the given range (including min and max)."
      onRoll={onRollClickHandle}
      result={result}
      disabled={!!error}
    >
      <div className={styles.form}>
        <div className={styles.firstRow}>
          <span>
            <label>From:</label>
            <input
              type="number"
              id="input-minimum"
              name="minimum"
              step="1"
              min="0"
              value={range.min}
              onChange={(e) => onRangeChangedHandler(e, RangeLimitType.Min)}
            />
          </span>
          <span>
            <label>To:</label>
            <input
              type="number"
              id="input-maximum"
              name="maximum"
              step="1"
              min="0"
              value={range.max}
              onChange={(e) => onRangeChangedHandler(e, RangeLimitType.Max)}
            />
          </span>
        </div>
        {error && (
          <p className={styles.error} id="error-message">
            {error}
          </p>
        )}
      </div>
    </BaseFunctionPage>
  );
};

export default RandomNumberPage;
