/**
 * Get the random YES or NO string
 *
 * @returns YES or NO string
 */
export const getRandYesNo: () => "YES" | "NO" = () => {
  const rand = Math.round(Math.random());
  return rand ? 'YES' : 'NO';
}
