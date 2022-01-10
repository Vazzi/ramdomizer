import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';

const YesNoPage: React.FC = () => {
  const [result, setResult] = React.useState<string | null>(null);

  const onRollClickHandle: () => void = () => {
    const rand = Math.round(Math.random());
    setResult(rand ? 'YES' : 'NO');
  };

  return (
    <BaseFunctionPage
      title="Yes No"
      description="Here you get the random YES or NO answer to your question."
      onRoll={onRollClickHandle}
      result={result}
    />
  );
};

export default YesNoPage;
