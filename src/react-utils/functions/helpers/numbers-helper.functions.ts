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

/**
 *Formats a number with its ordinal suffix (e.g. "1st", "2nd", "3rd", "4th").

 *@param {number} number The number to format.
 *
 *@returns {string} The formatted string.
 */
export function getOrdinalSuffix(number: number): string {
  const argumentIsNotANumber: boolean = typeof number !== "number";

  if (argumentIsNotANumber) {
    throw new TypeError(
      `Cannot add suffix to the value passed in argument, expected number instead got: ${typeof number}`
    );
  }

  const numberPassedIsNotPositive: boolean = number <= 0;
  if (numberPassedIsNotPositive) {
    throw new RangeError(
      `The number passed in argument: ${number} is not strictly positive`
    );
  }

  const numberHasSpecialSuffixRule: boolean = number > 10 && number < 14;
  if (numberHasSpecialSuffixRule) {
    return `${number}th`;
  }

  const lastDigit: string = number.toString().slice(-1);

  switch (lastDigit) {
    case "1": {
      return `${number}st`;
    }
    case "2": {
      return `${number}nd`;
    }
    case "3": {
      return `${number}rd`;
    }
    default: {
      return `${number}th`;
    }
  }
}
