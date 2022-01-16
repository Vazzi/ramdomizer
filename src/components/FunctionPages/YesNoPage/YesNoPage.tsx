import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import { getRandYesNo } from '../../../utils/randomFunctions';

const YesNoPage: React.FC = () => {
  const [result, setResult] = React.useState<string | null>(null);

  const handleRoll = () => {
    setResult(getRandYesNo);
  };

  return (
    <BaseFunctionPage
      title="Yes No"
      description="Here you get the random YES or NO answer to your question."
      onRoll={handleRoll}
      result={result}
    />
  );
};

export default YesNoPage;
