import { Range } from "../models/types";

/**
 * Get the random YES or NO string
 *
 * @returns YES or NO string
 */
export const getRandYesNo = ():'YES' | 'NO'  => {
  const rand = Math.round(Math.random());
  return rand ? 'YES' : 'NO';
};

/**
 * Get the random number in range
 *
 * @returns {number} random integer
 */
export const getRandNumber = (range: Range):number => {
  return Math.round(Math.random() * (range.max - range.min) + range.min);
};
