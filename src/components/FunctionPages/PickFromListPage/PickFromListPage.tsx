import React from 'react';

import BaseFunctionPage from '../BaseFunctionPage/BaseFunctionPage';
import styles from './PickFromListPage.module.scss';
import { getRandomItem } from '../../../utils/randomFunctions';

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

  return (
    <BaseFunctionPage
      title="Pick From The List"
      description="Ramdomly pick the item from the list. "
      onRoll={handleRoll}
      result={pickedItem}
    >
      <div className={styles.form}>
        <textarea rows={10} id="input-list" ref={inputRef} />
        <label>Insert your list. Each item on one line.</label>
      </div>
    </BaseFunctionPage>
  );
};

export default PickFromListPage;

/**
 * Function to remove empty items from list-style-image: url(
 *
 * @param {string[]} list of items
 * @returns {string[]} list with filtered items
 */
function removeEmptyItems(list: string[]): string[] {
  return list.filter((item) => item.length !== 0);
}
