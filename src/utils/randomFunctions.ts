import { Range } from '../models/types';

/**
 * Get the random YES or NO string
 *
 * @returns YES or NO string
 */
export const getRandYesNo = (): 'YES' | 'NO' => {
  const rand = Math.round(Math.random());
  return rand ? 'YES' : 'NO';
};

/**
 * Get the random number in range
 *
 * @param {Range} Range from min to max
 * @returns {number} random integer
 */
export const getRandNumber = (range: Range): number => {
  return Math.round(Math.random() * (range.max - range.min) + range.min);
};

/**
 * Get the random item from given list
 *
 * @param {T[]} list of items to pick from
 * @returns {T} randomly pick item
 */
export const getRandomItem = <T>(list: T[]): T => {
  const range: Range = { min: 0, max: list.length - 1 };
  const index: number = getRandNumber(range);
  return list[index];
};
