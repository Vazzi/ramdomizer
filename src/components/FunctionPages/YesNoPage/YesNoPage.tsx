import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import { getRandYesNo } from '../../../utils/randomFunctions';

/**
 * Yes No page
 * Represent the page where user get Yes or No answers
 *
 * @returns React component
 */
const YesNoPage: React.FC = () => {
  const { formatMessage } = useIntl();
  const [result, setResult] = React.useState<string | null>(null);

  const handleRoll = () => {
    setResult(getRandYesNo);
  };

  const resultEl = result ? <p style={{ fontSize: '3em' }}>{result}</p> : null;

  return (
    <BaseFunctionPage
      title={formatMessage({ ...messages.title })}
      description={formatMessage({ ...messages.description })}
      onRoll={handleRoll}
      result={resultEl}
    />
  );
};

export default YesNoPage;
