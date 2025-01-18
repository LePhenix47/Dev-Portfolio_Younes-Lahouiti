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
 * Format a relative time using the `Intl.RelativeTimeFormat` API.
 *
 * @param {Date} relativeDateInput the Date object to format relatively
 * @param {string} locale the locale to use for the formatting
 * @param {Intl.RelativeTimeFormatOptions} [options] options for the `Intl.RelativeTimeFormat` API
 * @param {Intl.RelativeTimeFormatOptions.localeMatcher} [options.localeMatcher="lookup"] the locale matching algorithm to use
 * @param {Intl.RelativeTimeFormatOptions.numeric} [options.numeric="auto"] the numeric format to use
 * @param {Intl.RelativeTimeFormatOptions.style} [options.style="short"] the length of the formatted relative time
 *
 * @returns {string} the formatted relative time string
 */
export function formatRelativeTime(
  relativeDateInput: Date,
  locale: string,
  options: Intl.RelativeTimeFormatOptions = {
    localeMatcher: "lookup",
    numeric: "always",
    style: "short",
  }
): string {
  const formatter = new Intl.RelativeTimeFormat(locale, options);
  const now = new Date();
  const diffInSeconds = Math.round(
    (relativeDateInput.getTime() - now.getTime()) / 1_000
  );
  const relativeDirection = diffInSeconds >= 0 ? 1 : -1;
  const { unit, value } = getRelativeTimePeriod(diffInSeconds);
  return formatter.format(relativeDirection * value, unit);
}

/**
 * Given a number of seconds from the present, returns an object with the nearest
 * relative time period and the corresponding value. For example, if the input
 * is 61 seconds, the output will be `{ value: 1, unit: "minute" }` since it's over a minute but under an hour.
 *
 * @param {number} dateInSeconds the difference in seconds from the present
 *
 * @prop {number} value the value of the relative time period
 * @prop {string} unit the unit name of the relative time period
 * @returns {Object} an object with keys "value" and "unit"
 */
export function getRelativeTimePeriod(dateInSeconds: number): {
  unit: Intl.RelativeTimeFormatUnit;
  value: number;
} {
  const absSeconds = Math.abs(dateInSeconds);
  const isUnderOneMinute = absSeconds < 60;
  if (isUnderOneMinute) {
    return { value: absSeconds, unit: "seconds" };
  }

  const SECONDS_IN_UNITS_MAP = new Map<Intl.RelativeTimeFormatUnit, number>(
    Object.entries({
      second: 1,
      minute: 60,
      hour: 3_600,
      day: 86_400,
      week: 604_800,
      month: 2_629_800,
      year: 31_557_600,
    }) as [Intl.RelativeTimeFormatUnit, number][]
  );
  const secondsMapKeys = Array.from(SECONDS_IN_UNITS_MAP.keys());
  for (let i = 0; i < secondsMapKeys.length; i++) {
    const secondsInNextUnit = SECONDS_IN_UNITS_MAP.get(secondsMapKeys[i + 1])!;
    if (absSeconds >= secondsInNextUnit) {
      continue;
    }

    const unitName = secondsMapKeys[i];
    const secondsInCurrentUnit = SECONDS_IN_UNITS_MAP.get(unitName)!;
    return {
      value: Math.floor(absSeconds / secondsInCurrentUnit),
      unit: unitName,
    };
  }

  throw new Error("Unexpected case: Unable to determine relative time period");
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
