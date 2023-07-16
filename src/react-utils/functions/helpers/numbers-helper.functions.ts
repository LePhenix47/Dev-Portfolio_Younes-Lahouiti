/**
 * Formats a number by separating every thousand with a format from the user's locale.
 *
 * *If no locale is specified, it uses the **default locale of the user's browser**.*
 *
 *  *example*:
 * `const number = formatPrecisionNumber(1_930)`
 *
 * - If the user lived in Italy:
 *  `→ returns "1.930"`
 *
 * - If the user lived in the US:
 *  `→ returns "1,930"`
 *
 *
 * @param {number} number
 * @returns
 */
export function formatPrecisionNumber(
  number: number,
  locale: string | undefined = undefined
) {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat(locale, {
    maximumSignificantDigits: 3,
  });

  return formatter.format(number);
}

/**
 * Generates a random number within a specified range.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {boolean} includeMin - Whether to include the minimum value in the range.
 * @param {boolean} includeMax - Whether to include the maximum value in the range.
 *
 * @returns {number} A random number within the specified range.
 */
export function getRandomNumber(
  min: number = 0,
  max: number = 1,
  includeMin: boolean = true,
  includeMax: boolean = true
): number {
  const hasInvalidArgument: boolean = min > max || max < min;
  if (hasInvalidArgument) {
    throw new Error(
      `Unexpected error occurred in the passed argument values: ${
        min > max ? "min > max" : "max < min"
      }`
    );
  }

  const mustIncludeBoth: boolean = includeMin && includeMax;

  const mustIncludeOnlyMin: boolean = includeMin && !includeMax;

  const mustIncludeOnlyMax: boolean = !includeMin && includeMax;

  if (mustIncludeBoth) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else if (mustIncludeOnlyMin) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else if (mustIncludeOnlyMax) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
  } else {
    //We don't include either
    return Math.floor(Math.random() * (max - min - 1)) + min + 1;
  }
}
