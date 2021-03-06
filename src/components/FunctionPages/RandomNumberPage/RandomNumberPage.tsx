import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import styles from './RandomNumberPage.module.scss';
import { Range } from '../../../models/types';
import { getRandNumber } from '../../../utils/randomFunctions';

enum RangeLimitType {
  Max = 0,
  Min
}

/**
 * Random number page
 * Represent the page where user enter range and component returns random number
 * from that range
 *
 * @returns React component
 */
const RandomNumberPage: React.FC = () => {
  const { formatMessage } = useIntl();
  const [result, setResult] = React.useState<string | null>(null);
  const [range, setRange] = React.useState<Range>({ min: 0, max: 10 });
  const [error, setError] = React.useState<string | null>(null);

  const handleRoll: () => void = () => {
    setResult(getRandNumber(range).toString());
  };

  const setErrorMessage = (shouldSet: boolean) => {
    setError(shouldSet ? formatMessage({ ...messages.errorMinMax }) : null);
  };

  const handleRangeChanged = (
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

  const resultEl = result ? <p style={{ fontSize: '3em' }}>{result}</p> : null;

  return (
    <BaseFunctionPage
      title={formatMessage({ ...messages.title })}
      description={formatMessage({ ...messages.description })}
      onRoll={handleRoll}
      result={resultEl}
      disabled={!!error}
    >
      <div className={styles.form}>
        <div className={styles.firstRow}>
          <span>
            <label>{formatMessage({ ...messages.fromLabel })}</label>
            <input
              type="number"
              id="input-minimum"
              name="minimum"
              step="1"
              min="0"
              value={range.min}
              onChange={(e) => handleRangeChanged(e, RangeLimitType.Min)}
            />
          </span>
          <span>
            <label>{formatMessage({ ...messages.toLabel })}</label>
            <input
              type="number"
              id="input-maximum"
              name="maximum"
              step="1"
              min="0"
              value={range.max}
              onChange={(e) => handleRangeChanged(e, RangeLimitType.Max)}
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
