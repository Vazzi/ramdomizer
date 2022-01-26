import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom';

import styles from './BaseFunctionPage.module.scss';
import RollButton from '../../UI/RollButton/RollButton';

interface BaseFunctionPageProps {
  title: string;
  description: string;
  onRoll: () => void;
  result: React.ReactNode | null;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Base function page
 * Represent the base layout for all function page comopnents
 *
 * @returns React component
 */
const BaseFunctionPage: React.FC<BaseFunctionPageProps> = ({
  title,
  description,
  onRoll,
  result,
  disabled = false,
  children
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.backLink}>
          &#8249; {formatMessage({ ...messages.backButtonTitle })}
        </Link>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.row}>{children}</div>
      <div style={{ alignSelf: 'center' }}>
        <RollButton disabled={disabled} onClick={onRoll} />
      </div>
      <div className={styles.row}>
        {result && <div className={styles.result}>{result}</div>}
      </div>
    </div>
  );
};

export default BaseFunctionPage;
