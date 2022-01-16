import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import styles from './PickFromListPage.module.scss';
import { getRandomItem } from '../../../utils/randomFunctions';
import { removeEmptyItems } from '../../../utils/list';

/**
 * Pick from list page
 * Represent the page where user enters list of items and get one item
 * randomly from the given list
 *
 * @returns React component
 */
const PickFromListPage: React.FC = () => {
  const [pickedItem, setPickedItem] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const handleRoll = () => {
    const inputText: string = inputRef.current ? inputRef.current.value : '';
    const listOfItems: string[] = removeEmptyItems(inputText.split('\n'));
    setPickedItem(getRandomItem(listOfItems));
  };

  const resultEl = pickedItem ? <p>{pickedItem}</p> : null;

  return (
    <BaseFunctionPage
      title="Pick From The List"
      description="Randomly pick the item from the list. "
      onRoll={handleRoll}
      result={resultEl}
    >
      <div className={styles.form}>
        <textarea rows={10} id="input-list" ref={inputRef} />
        <label>Insert your list. Each item on one line.</label>
      </div>
    </BaseFunctionPage>
  );
};

export default PickFromListPage;
