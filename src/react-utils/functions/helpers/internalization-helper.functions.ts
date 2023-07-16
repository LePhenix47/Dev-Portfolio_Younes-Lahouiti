/**
 * Formats a number by separating every thousand with a format from the user's locale.
 * If no locale is specified, it uses the default locale of the user's browser.
 *
 *  *example*:
 * - The user lives in Italy and we have:
 * `const number = 1_930 → returns "1.930"`
 *
 * - If they lived in the US and we have:
 *
 *`const number = 1_930 → returns "1,930"`
 *
 *
 * @param {number} number
 * @returns
 */
export function formatPrecisionNumber(
  number: number,
  locale?: string | undefined
): string {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat(locale, {
    maximumSignificantDigits: 3,
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
 *
 * Formats a date object according to the user's locale and specified options using the `Intl.DateTimeFormat` API
 *
 * @param {Date} unformattedDateObject - The Date object to format
 * @param {string} locale - The locale to use for formatting (optional)
 * @param {Object} options - The options object to pass to the formatter (optional)
 *
 * @returns {string} The formatted date string
 * @throws {string} If the first argument is not a Date object
 */
export function formatDate(
  unformattedDateObject: Date,
  locale: string | undefined,
  options: any
): string {
  const dateIsNotADateObject: boolean = !(
    unformattedDateObject instanceof Date
  );
  if (dateIsNotADateObject) {
    throw TypeError(`"${unformattedDateObject}" is not a date object`);
  }

  /**
   * We create the time formatter with the internalization web API
   */
  const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    locale,
    options
  );
  return dateFormatter.format(unformattedDateObject);
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
    (relativeDateInput.getTime() - now.getTime()) / 1000
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
    const minutes = Math.floor(dateInSeconds / ONE_MINUTE_IN_SECONDS);
    return { value: minutes, unit: "minutes" };
  } else if (isUnderADay) {
    //We get the amount of hours
    const hours = Math.floor(dateInSeconds / ONE_HOUR_IN_SECONDS);
    return { value: hours, unit: "hours" };
  } else if (isUnderAWeek) {
    //We get the amount of days
    const days = Math.floor(dateInSeconds / ONE_DAY_IN_SECONDS);
    return { value: days, unit: "days" };
  } else if (isUnderAMonth) {
    //We get the amount of weeks
    const weeks = Math.floor(dateInSeconds / ONE_WEEK_IN_SECONDS);
    return { value: weeks, unit: "weeks" };
  } else if (isUnderAYear) {
    //We get the amount of months
    const months = Math.floor(dateInSeconds / ONE_MONTH_IN_SECONDS);
    return { value: months, unit: "months" };
  } else {
    //We get the amount of years
    const years = Math.floor(dateInSeconds / ONE_YEAR_IN_SECONDS);
    return { value: years, unit: "years" };
  }
}
