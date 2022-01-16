import React from 'react';

import styles from './BaseFunctionPage.module.scss';
import RollButton from '../../UI/RollButton/RollButton';

interface BaseFunctionPageProps {
  title: string;
  description: string;
  onRoll: () => void;
  result: string | null;
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
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>{children}</div>
      <RollButton disabled={disabled} onClick={onRoll} />
      {result && <div className={styles.result}>{result}</div>}
    </div>
  );
};

export default BaseFunctionPage;
