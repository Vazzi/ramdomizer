import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import { getRandYesNo } from '../../../utils/randomFunctions';

/**
 * Yes No page
 * Represent the page where user get Yes or No answers
 *
 * @returns React component
 */
const YesNoPage: React.FC = () => {
  const [result, setResult] = React.useState<string | null>(null);

  const handleRoll = () => {
    setResult(getRandYesNo);
  };

  const resultEl = result ? <p style={{ fontSize: '4em' }}>{result}</p> : null;

  return (
    <BaseFunctionPage
      title="Yes No"
      description="Here you get the random YES or NO answer to your question."
      onRoll={handleRoll}
      result={resultEl}
    />
  );
};

export default YesNoPage;
