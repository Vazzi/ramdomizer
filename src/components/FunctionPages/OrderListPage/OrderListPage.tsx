import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import styles from './OrderListPage.module.scss';
import { removeEmptyItems } from '../../../utils/list';
import { setRandomOrder } from '../../../utils/randomFunctions';

const OrderListPage: React.FC = () => {
  const { formatMessage } = useIntl();
  const [list, setList] = React.useState<string[] | null>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const handleRoll = () => {
    const inputText: string = inputRef.current ? inputRef.current.value : '';
    const listOfItems: string[] = removeEmptyItems(inputText.split('\n'));

    if (listOfItems.length === 0) {
      setList(null);
      return;
    }

    const orderedList: string[] = setRandomOrder(listOfItems);
    setList(orderedList);
  };

  const resultEl = list ? (
    <ol className={styles.list}>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  ) : null;

  return (
    <BaseFunctionPage
      title={formatMessage({ ...messages.title })}
      description={formatMessage({ ...messages.description })}
      onRoll={handleRoll}
      result={resultEl}
    >
      <div className={styles.form}>
        <textarea rows={10} id="input-list" ref={inputRef} />
        <label>{formatMessage({ ...messages.textareaHelper })}</label>
      </div>
    </BaseFunctionPage>
  );
};

export default OrderListPage;
