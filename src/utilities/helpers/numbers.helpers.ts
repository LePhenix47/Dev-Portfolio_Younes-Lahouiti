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
  const hasInvalidRange: boolean = min > max || max < min;
  if (hasInvalidRange) {
    throw new RangeError(
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
 * Calculates the age from a given date of birth string in the format "MM/DD/YYYY".
 *
 * @param {string} dateOfBirth - The date of birth string in the format "MM/DD/YYYY".
 * @throws {TypeError} If the `dateOfBirth` argument is not a string.
 * @throws {Error} If the `dateOfBirth` argument has an incorrect date format, is in the future, or if there are other calculation errors.
 *
 * @returns {number} The age calculated from the date of birth.
 */
export function getAgeFromDateOfBirth(dateOfBirth: string): number {
  const argumentHasInvalidType: boolean = typeof dateOfBirth !== "string";
  if (argumentHasInvalidType) {
    throw new TypeError(
      `Invalid argument passed, expected a string but instead got ${typeof dateOfBirth}`
    );
  }

  /**
   * Date of birth in milliseconds
   */
  const dateOfBirthInMilliseconds: number = new Date(dateOfBirth).getTime();

  /**
   * Current year in milliseconds
   */
  const currentDate: number = new Date().getTime();

  const hasIncorrectDateFormat: boolean = isNaN(dateOfBirthInMilliseconds);
  if (hasIncorrectDateFormat) {
    throw new Error(
      `Invalid date of birth format: ${dateOfBirth}. Please use the format "MM/DD/YYYY".`
    );
  }

  /**
   * Milliseconds per year : `1s in ms` × `1min in s` × `1hr in mins` × `1 day in hrs` × `1 year in days`
  (including leap years)
   */
  const MILLISECONDS_IN_A_YEAR: number = 1000 * 60 * 60 * 24 * 365.25;

  const dateOfBirthIsInvalid: boolean = dateOfBirthInMilliseconds > currentDate;
  if (dateOfBirthIsInvalid) {
    throw new Error("Date of birth cannot be in the future.");
  }

  /**
   * The actual age
   */
  const ageInYears: number = Math.floor(
    (currentDate - dateOfBirthInMilliseconds) / MILLISECONDS_IN_A_YEAR
  );

  return ageInYears;
}

/**
 * Calculates the amount of experience in years based on the current year and the year when my career started.
 * @returns {number} The amount of experience in years.
 */
export function getAmountOfExperience(startingDate: string): number {
  const argumentHasInvalidType: boolean = typeof startingDate !== "string";
  if (argumentHasInvalidType) {
    throw new TypeError(
      `Invalid argument passed, expected a string but instead got ${typeof startingDate}`
    );
  }
  /**
   * The current year as a number.
   */
  const currentDate: number = new Date().getFullYear();

  /**
   * The year when the career started as a number.
   */
  const careerDateStart: number = new Date(startingDate).getFullYear();

  const hasInvalidStartingDate: boolean = careerDateStart > currentDate;
  if (hasInvalidStartingDate) {
    throw new Error("The date for the starting career cannot be in the future");
  }

  return currentDate - careerDateStart;
}

/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param {number} number - The number to round.
 * @param {number} [float=3] - The number of decimal places to round to (default is 3).
 *
 * @throws {TypeError} Throws a TypeError if either argument is not a valid number.
 * @returns {number} The rounded number.
 */
export function roundToFloat(number: number, float: number = 3): number {
  const hasInvalidArgumentTypes: boolean =
    typeof number !== "number" || typeof float !== "number";
  if (hasInvalidArgumentTypes) {
    throw new TypeError(`Expected both arguments to be of type number, instead got:
 Number: ${number} of type ${typeof number}
 Float: ${float} of type ${typeof float}
 `);
  }

  const { isNaN } = Number;
  const areNotValidNumbers: boolean = isNaN(number) || isNaN(float);
  if (areNotValidNumbers) {
    throw new TypeError(`Got NaN number values:
Number: ${number} of type ${typeof number}
Float: ${float} of type ${typeof float}
    `);
  }

  const nthPowerOfTen: number = 10 ** float;

  return Math.trunc(number * nthPowerOfTen) / nthPowerOfTen;
}
