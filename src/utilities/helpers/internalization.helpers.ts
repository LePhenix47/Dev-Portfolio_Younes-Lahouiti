/**
 * Returns the real length of a string, taking into account grapheme clusters instead of the codepoints.
 *
 * [Watch a video by Wes Bos explaining grapheme clusters](https://youtube.com/shorts/_7bOCOOBYPE?feature=share)
 *
 * **⚠ IMPORTANT: This function may not work in some browsers such as Firefox. [Check here to see which browsers support the Intl.Segmenter API](https://caniuse.com/?search=Intl.Segmenter) ⚠**
 *
 * This function uses a regular expression to match grapheme clusters instead of the `Intl.Segmenter` API which is not fully supported by all browsers as of 06/08/2023.
 *
 * @param {string} string - The string to measure.
 * @returns {number} The real length of the string, in grapheme clusters.
 *
 * @throws {TypeError} If the provided argument is not a string.
 *
 * @example
 * // Example usage:
 * const str = "👉👉🏻👉🏼👉🏽👉🏾👉🏿";
 * console.log(str.length); // Outputs 22
 * console.log(getRealStringLength(str)); // Outputs 6
 */
export function getRealStringLength(string: string): number {
  const hasInvalidArgument: boolean = typeof string !== "string";
  if (hasInvalidArgument) {
    throw new TypeError(
      `Invalid argument, expected a string but got ${typeof string}`
    );
  }

  const browserDoesNotSupportsTheAPI: boolean =
    typeof Intl === "undefined" || typeof Intl.Segmenter !== "function";
  if (browserDoesNotSupportsTheAPI) {
    return string.length;
  }

  const segmenter: Intl.Segmenter = new Intl.Segmenter();
  const arrayOfSegments: Intl.SegmentData[] = Array.from(
    segmenter.segment(string)
  );
  return arrayOfSegments.length;

  /**
   // Once fully supported, you can use the commented out code below for more accurate results:
   const segmenter = new Intl.Segmenter();
   const arrayOfSegments = Array.from(segmenter.segment(string));
   return arrayOfSegments.length;  */
}

export function formatNumberWithOptions(
  number: number,
  locale: string | undefined,
  options: Intl.NumberFormatOptions
) {
  try {
    // Validate the types of input arguments
    const hasInvalidTypes = typeof number !== "number" || Number.isNaN(number);
    if (hasInvalidTypes) {
      throw new TypeError(
        `Invalid argument for number: Type: ${typeof number} of value ${number}`
      );
    }

    const hasInvalidLocale = typeof locale !== "string" && locale !== undefined;
    if (hasInvalidLocale) {
      throw new TypeError(
        `Invalid argument for the locale: must be either a string with the country code or undefined`
      );
    }

    const formatter = new Intl.NumberFormat(locale, options);

    return formatter.format(number);
  } catch (error: any) {
    console.error(error.message);
    return `Invalid number: ${error.message}`;
  }
}

/**
 * Formats a number with a specified number of decimal places and a locale.
 *
 * @param {number} number - The number to format.
 * @param {string} [locale] - The locale to use for formatting. Defaults to the user's locale if not provided.
 * @param {number} [minimumFractionDigits=0] - The minimum number of decimal places to display. Default is 0.
 * @param {number} [maximumFractionDigits=20] - The maximum number of decimal places to display. Default is 20.
 * @returns {string} The formatted number as a string.
 * @throws {Error} Throws an error if the input arguments are invalid or if the range of decimal places is invalid.
 */
export function formatPrecisionNumber(
  number: number,
  locale: string | undefined = undefined,
  minimumFractionDigits: number = 0,
  maximumFractionDigits: number = 20
): string {
  // Validate the types of input arguments
  const hasInvalidTypes: boolean =
    typeof number !== "number" ||
    typeof minimumFractionDigits !== "number" ||
    typeof maximumFractionDigits !== "number";
  if (hasInvalidTypes) {
    throw new TypeError(
      `Invalid argument types: ${typeof number} ${typeof minimumFractionDigits} and ${typeof maximumFractionDigits}`
    );
  }

  // Validate the range of minimumFractionDigits and maximumFractionDigits
  const hasInvalidRanges: boolean =
    minimumFractionDigits < 0 ||
    maximumFractionDigits < 0 ||
    minimumFractionDigits > maximumFractionDigits;
  if (hasInvalidRanges) {
    throw new RangeError(
      `Invalid range of decimal places. \n minimumFractionDigits ${
        minimumFractionDigits < 0 || maximumFractionDigits < 0
          ? "must be non-negative"
          : "less than or equal to maximumFractionDigits"
      }.`
    );
  }

  const formatter: Intl.NumberFormat = new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(number);
}

/**
 *
 * Function that formats currency values by the user's locale
 *
 * @param {number} number - The number to format
 * @param {string} currencyType - The currency type to format the number in (default is "USD")
 * @param {Object} options - An optional object of options to customize the number format
 *
 * @returns {string} The formatted currency value
 */
export function formatCurrencyValueNumber(
  number: number,
  locale: string | undefined = undefined,
  currencyType: string = "USD",
  options?: Intl.NumberFormatOptions
): string {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat(locale, {
    currency: currencyType,
    style: "currency",
    maximumFractionDigits: 2,
    ...options,
  });

  return formatter.format(number);
}

/**
 * Formats a given date using provided formatting options.
 *
 * @param {Date | string | number} date - The date to format.
 * @param {Object} options - The formatting options for Intl.DateTimeFormat.
 * @param {string} [locale="en-US"] - The locale for formatting the date.
 * @returns {string} The formatted date string, or an error message if formatting fails.
 */
export function formatDateWithOptions(
  date: Date | string,
  locale: string,
  options: Intl.DateTimeFormatOptions
): string {
  try {
    const dateIsInvalid =
      // The date is invalid if the date is not an instance of the Date prototype or
      // that its type is not a string nor a number
      !(date instanceof Date) &&
      typeof date !== "string" &&
      typeof date !== "number";
    if (dateIsInvalid) {
      throw new TypeError(
        `Invalid date argument found, expected it to be an instance of the Date prototype or at least either a string or a number but instead got 
          \nValue: ${date}, of type: ${typeof date}`
      );
    }

    const optionsAreInvalid = !options;
    if (optionsAreInvalid) {
      throw new TypeError(
        `Invalid options argument found, expected it to be an object but instead got \nValue: ${options}, of type: ${typeof options}`
      );
    }

    const localeIsInvalid = typeof locale !== "string";
    if (localeIsInvalid) {
      throw new TypeError(
        `Invalid locale argument found, expected it to be a string but instead got \nValue: ${locale}, of type: ${typeof locale}`
      );
    }

    const dateInstance = date instanceof Date ? date : new Date(date);

    const formatter = new Intl.DateTimeFormat(locale, options);

    return formatter.format(dateInstance);
  } catch (error: any) {
    console.error("Error formatting date:", error.message);
    return `Invalid date`;
  }
}

/**
 * Formats a given date into a short date string.
 *
 * @param {Date | string} date - The date to format.
 * @returns {string} The formatted short date string.
 */
export function formatShortDate(date: string | Date): string {
  const dateInstance: Date = date instanceof Date ? date : new Date(date);

  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedDate: string = formatter.format(dateInstance);
  const [month, day, year] = formattedDate.replaceAll(",", "").split(" ");
  const formattedDay: string = getOrdinalSuffix(Number(day));

  return `${month} ${formattedDay} ${year}`;
}

/**
 * Get the ordinal suffix for a given number.
 *
 * This function returns the appropriate ordinal suffix for a given positive number, following the English ordinal rules.
 *
 * @param {number} number - The positive number for which to get the ordinal suffix.
 * @throws {TypeError} Throws a TypeError if the argument is not a number.
 * @throws {RangeError} Throws a RangeError if the argument is not a strictly positive number.
 *
 * @returns {string} The ordinal suffix for the given number (e.g., "1st", "2nd", "3rd", "4th", etc.).
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

  const englishOrdinalRules: Intl.PluralRules = new Intl.PluralRules("en-US", {
    type: "ordinal",
  });

  const ordinalText: Intl.LDMLPluralRule = englishOrdinalRules.select(number);

  switch (ordinalText) {
    case "one": {
      return `${number}st`;
    }
    case "two": {
      return `${number}nd`;
    }
    case "few": {
      return `${number}rd`;
    }
    default: {
      // default = "other"
      return `${number}th`;
    }
  }
}

/**
 *
 * Returns a string representing the relative time format of the input date.
 *
 * @param {Date} relativeDateInput - The date to be transformed into a relative time format.
 * @param {string} [locale] - A string with a BCP 47 language tag (i.e: `"en-US"`), or an array of such strings.
 * @param {Intl.RelativeTimeFormatOptions} [options] - An optional object with configuration options for the Intl.RelativeTimeFormat.
 *
 * Can be either these values for each property:
 * ```js
 * {
 *     localeMatcher: "best fit" | "lookup";
 *     numeric: "always" | "auto";
 *     style: "long" | "narrow" |; "short";
 * }
 *
 * ```
 *
 * @returns {string} A string representing the relative time format of the input date.
 */
export function formatRelativeTime(
  relativeDateInput: Date,
  locale?: string,
  options: Intl.RelativeTimeFormatOptions = {
    localeMatcher: "best fit", // other values: "lookup"
    numeric: "always", // other values: "auto"
    style: "long", // other values: "short" or "narrow"
  }
): any {
  const formatter: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(
    locale,
    options
  );
  const now: Date = new Date();

  const diffInSeconds: number = Math.round(
    (relativeDateInput.getTime() - now.getTime()) / 1_000
  );

  /**
   * If the date is from the past or future (x units ago or in y units)
   *
   */
  const relativeDirection: number = diffInSeconds >= 0 ? 1 : -1;

  const { unit, value } = getRelativeTimePeriod(diffInSeconds);

  return formatter.format(relativeDirection * value, unit);
}

/**
 *Returns the relative time period based on the input in seconds.
 *
 *@param {number} dateInSeconds - The input date in seconds.
 *@returns {object} - The relative time period in string format.
 */
export function getRelativeTimePeriod(dateInSeconds: number): {
  value: number;
  unit: Intl.RelativeTimeFormatUnit;
} {
  /**
   * The number of seconds in one minute.
   */
  const ONE_MINUTE_IN_SECONDS: number = 60;

  /**
   * The number of seconds in one hour.
   */
  const ONE_HOUR_IN_SECONDS: number = 3_600;

  /**
   * The number of seconds in one day.
   */
  const ONE_DAY_IN_SECONDS: number = 86_400;

  /**
   * The number of seconds in one week.
   */
  const ONE_WEEK_IN_SECONDS: number = 604_800;

  /**
   * The number of seconds in one month.
   */
  const ONE_MONTH_IN_SECONDS: number = 2_629_800;

  /**
   * The number of seconds in one year.
   */
  const ONE_YEAR_IN_SECONDS: number = 31_557_600;

  //If the number in seconds is negative, we transform it into a positive value
  dateInSeconds = Math.abs(dateInSeconds);

  // Check if the input date is under a minute
  const isUnderAMinute: boolean = dateInSeconds < ONE_MINUTE_IN_SECONDS;

  // Check if the input date is under an hour
  const isUnderAnHour: boolean =
    !isUnderAMinute && dateInSeconds < ONE_HOUR_IN_SECONDS;

  // Check if the input date is under a day
  const isUnderADay: boolean =
    !isUnderAnHour && dateInSeconds < ONE_DAY_IN_SECONDS;

  // Check if the input date is under a week
  const isUnderAWeek: boolean =
    !isUnderADay && dateInSeconds < ONE_WEEK_IN_SECONDS;

  // Check if the input date is under a months
  const isUnderAMonth: boolean =
    !isUnderAWeek && dateInSeconds < ONE_MONTH_IN_SECONDS;

  // Check if the input date is under a year
  const isUnderAYear: boolean =
    !isUnderAMonth && dateInSeconds < ONE_YEAR_IN_SECONDS;

  if (isUnderAMinute) {
    return { value: dateInSeconds, unit: "seconds" };
  } else if (isUnderAnHour) {
    //We get the amount of minutes
    const minutes: number = Math.floor(dateInSeconds / ONE_MINUTE_IN_SECONDS);
    return { value: minutes, unit: "minutes" };
  } else if (isUnderADay) {
    //We get the amount of hours
    const hours: number = Math.floor(dateInSeconds / ONE_HOUR_IN_SECONDS);
    return { value: hours, unit: "hours" };
  } else if (isUnderAWeek) {
    //We get the amount of days
    const days: number = Math.floor(dateInSeconds / ONE_DAY_IN_SECONDS);
    return { value: days, unit: "days" };
  } else if (isUnderAMonth) {
    //We get the amount of weeks
    const weeks: number = Math.floor(dateInSeconds / ONE_WEEK_IN_SECONDS);
    return { value: weeks, unit: "weeks" };
  } else if (isUnderAYear) {
    //We get the amount of months
    const months: number = Math.floor(dateInSeconds / ONE_MONTH_IN_SECONDS);
    return { value: months, unit: "months" };
  } else {
    //We get the amount of years
    const years: number = Math.floor(dateInSeconds / ONE_YEAR_IN_SECONDS);
    return { value: years, unit: "years" };
  }
}

/**
 * Formats an array of string words into a formatted string using the specified locale and options.
 *
 * @param arrayOfStringWords - An array of string words to be formatted.
 * @param locale - The locale to be used for formatting. It should be a string with the country code or undefined.
 * @param options - Options for formatting the list. It can include properties like `style` (e.g., "long", "short", "narrow") and `type` (e.g., "conjunction", "disjunction", "unit").
 *
 * @returns A formatted string representing the array of string words according to the specified locale and options.
 *
 * @throws {TypeError} If the input arguments are invalid.
 */
export function formatListWithOptions(
  arrayOfStringWords: string[],
  locale: string | undefined,
  options: Intl.ListFormatOptions
) {
  try {
    // Validate the types of input arguments
    const hasInvalidTypes =
      !Array.isArray(arrayOfStringWords) ||
      arrayOfStringWords.every((s) => {
        return typeof s !== "string";
      });
    if (hasInvalidTypes) {
      throw new TypeError(
        `Invalid argument for string, expected an array of strings but instead got: ${arrayOfStringWords} of type: ${typeof arrayOfStringWords}`
      );
    }

    const hasInvalidLocale = typeof locale !== "string" && locale !== undefined;
    if (hasInvalidLocale) {
      throw new TypeError(
        `Invalid argument for the locale: must be either a string with the country code or undefined`
      );
    }

    const formatter = new Intl.ListFormat(locale, options);

    return formatter.format(arrayOfStringWords);
  } catch (error: any) {
    console.error(error.message);
    return `Invalid string: ${error.message}`;
  }
}

/**
 * Creates an Intl.Collator instance with the provided options.
 *
 * This function is designed to be used as an abstraction for creating an Intl.Collator
 * with specific collation options. It helps ensure consistency in collation settings
 * across different parts of your application.
 *
 * @param {string} [locale] - The locale for collation.
 * @param {Intl.CollatorOptions} [options] - The collation options.
 * @returns {Intl.Collator} The Intl.Collator instance.
 * @throws {TypeError} If invalid arguments are provided.
 *
 * @example
  // Creating a collator for English language with sensitivity set to 'accent':
 * const collator = createCollatorWithOptions('en-US', { sensitivity: 'accent' });
 *
  // Using the collator to compare two strings:
 * const result = collator.compare('cliché', 'cliche'); // Returns 0, indicating equality with accent sensitivity.

  // Works about the same as a `.toLocaleCompare()`
 */
export function createCollatorWithOptions(
  locale: string | undefined,
  options: Intl.CollatorOptions | undefined
): Intl.Collator | string {
  try {
    // Validate the types of input arguments
    const hasInvalidLocale: boolean =
      typeof locale !== "string" && locale !== undefined;
    if (hasInvalidLocale) {
      throw new TypeError(
        `Invalid argument for the locale: must be either a string with the country code or undefined`
      );
    }

    const collator = new Intl.Collator(locale, options);

    return collator;
  } catch (error: any) {
    console.error(error.message);
    return `Invalid collator creation: ${error.message}`;
  }
}
