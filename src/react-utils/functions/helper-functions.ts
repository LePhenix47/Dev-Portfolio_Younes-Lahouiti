//Types
import { typeofTypes } from "../types/typeof.types";

/**
 * Console methods
 */
export const {
  log,
  error,
  table,
  time,
  timeEnd,
  timeStamp,
  timeLog,
  assert,
  clear,
  count,
  countReset,
  group,
  groupCollapsed,
  groupEnd,
  trace,
  profile,
  profileEnd,
  warn,
  debug,
  info,
  dir,
  dirxml,
} = console;

/**
 *Function that formats text in 3 cases: lowercase, uppercase and titlecase
 *
 * @param string
 * @param option
 * @returns
 */
export function formatText(string: string, option: string): string | never {
  let formattedOption: string = option.toLowerCase().trim();

  switch (formattedOption) {
    case "lowercase": {
      return string.toLowerCase();
    }

    case "uppercase": {
      return string.toUpperCase();
    }

    case "titlecase": {
      let stringArray = string.split(" ");
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] =
          stringArray[i].substring(0, 1).toUpperCase() +
          stringArray[i].slice(1).toLowerCase();
      }
      stringArray = stringArray.concat();
      return stringArray.toString();
    }

    default: {
      throw new Error(
        "Formatting text error: unknown option passed in argument"
      );
    }
  }
}

/**
 *Funtion that replaces letters with accents by their "non-accented" counter-part
 *ex: "crème brûlée" → "creme brulee"
 *
 * @param string
 * @returns
 */
export function normalizeString(string: string): string | undefined {
  if (typeof string !== "string") {
    log("Value passed in argument is not a string !");
    return;
  }
  return string
    .normalize("NFD") //returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Tests a regular expression against a string and
 * returns a boolean value indicating whether the regular expression matches the string.
 *
 * @param {string} string - The string to test against the regular expression.
 * @param {RegExp} RegularExpression - The regular expression to test against the string.
 * @returns {boolean} - A boolean value indicating whether the regular expression matches the string.
 */
export function testRegExp(string: string, RegularExpression: RegExp): boolean {
  return RegularExpression.test(string);
}

/**
 * Copies the given text to the clipboard.
 * @param {string} textToCopy - The text to be copied to the clipboard.
 * @returns {Promise<void>} - A Promise that resolves when the text has been successfully copied to the clipboard.
 */
export function copyTextToClipBoard(textToCopy: string): Promise<void> {
  return navigator.clipboard.writeText(textToCopy);
}
/**
 *Splits a string on a character, word or regular expression
 *ex: Split on every space → "hello world" → ["hello", "world"]
 *
 * @param string
 * @param character
 * @returns
 */
export function splitString(
  string: string,
  character: string | RegExp
): string[] {
  return string.split(character);
}

/**
 *Split a string into an array separating each word with an uppercase on it
 *ex: "testColor" → ["test","Color"] → ["test", "color"] → "test-color"
 *
 * @param string
 * @returns
 */
export function splitOnUpperCase(string: string): string {
  //Regex for all the uppercase letters
  const uppercaseLettersREGEX: RegExp = /(?=[A-Z])/;

  let newString: string[] = splitString(string, uppercaseLettersREGEX);

  for (let i = 0; i < newString.length; i++) {
    newString[i] = formatText(newString[i], "lowercase");
  }

  let formattedString: string = newString.reduce(
    (accumulated, currentValue) => {
      return accumulated + "-" + currentValue;
    }
  );

  return formattedString;
}

/**
 *Retrieves the values of an object inside an array
 *
 * @param object
 * @returns
 */
export function getObjectValues(object: object): any[] {
  const objectIsDefined: boolean = !!object;

  if (objectIsDefined) {
    return Object.values(object);
  }
  return [];
}

/**
 *Retrieves the properties of an object inside an array
 *
 * @param object
 * @returns
 */
export function getObjectProperties(object: object): any[] {
  const objectIsDefined: boolean = !!object;

  if (objectIsDefined) {
    return Object.keys(object);
  }
  return [];
}

/**
 *Returns a string with a '%' in the end of the number inputted
 *
 * @param number
 * @returns
 */
export function toPercent(number: number): string {
  return number.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
}

/**
 *Formats a number by separating every thousand with a format from the user's locale
 *example:
 
 * - The user lives in Italy and we have:
 
 * `const number = 1_930 → returns "1.930"`
 *
 * - If they lived in the US and we have:
 * 
 *`const number = 1_930 → returns "1,930"`
 * 
 * 
 * @param number 
 * @returns 
 */
export function formatSignificantDigitsNumber(
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
 *
 * Has 2 parameters:
 *
 * The *number* to format and the *currency* (by default set to US dollars)
 *
 *
 * Example, we want to format 24 dollars:
 *
 * - If the user lives in the US → `$24.00`
 *
 * - If the user lives in Italy → `24,00 USD`
 *
 * @param {number} number
 * @param {string} currencyType
 * @returns {string}
 */
export function formatCurrencyValueNumber(
  number: number,
  currencyType: string = "USD"
): string {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat(undefined, {
    currency: currencyType,
    style: "currency",
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
}

/**
 * Function that formats the date
 *
 * @param {Date} unformattedDateObject
 * @param {string | undefined} locale
 * @param {*} options Object for the options for the: `dateStyle, dayPeriod, timeStyle, hourCycle, hour12, year, month`...
 *
 * @returns Formatted date
 */
export function formatDate(
  unformattedDateObject: Date,
  locale: string | undefined,
  options: any
) {
  const dateIsNotADateObject: boolean = !(
    unformattedDateObject instanceof Date
  );
  if (dateIsNotADateObject) {
    throw `"${unformattedDateObject}" is not a date object`;
  }

  /**
   * We create the time formatter with the internalization web API
   */
  let dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    locale,
    options
  );
  return dateFormatter.format(unformattedDateObject);
}

/**
 * Function that formats a date under this format:
 * ```js
 * "[Day], [Month] [number day of month], [Year]"
 * ```
 * @param unformattedDate
 */
export function formatDateToShort(unformattedDateObject: Date) {
  const dateFormatOptions: object = { dateStyle: "full", timeStyle: "short" };

  /**
   * Will return a stirng under this format:
   *
   * ```js
   * "[Day], [Month] [number day of month], [Year] at [hours in AM/PM]"
   * ```
   *
   */
  let stringFormattedDate: string = formatDate(
    unformattedDateObject,
    "en-US",
    dateFormatOptions
  );

  /**
   * Removes the hours
   * ```js
   * [ "[Day], [Month] [number day of month], [Year]" ]
   * ```
   * */
  let firstPartOfDate: string = splitString(stringFormattedDate, / at /)[0];

  /**
   * Gets the month, number day of the month and the year
   * ```js
   * [ "[Day]", " [Month] [number day of month]", " [Year]" ]
   * ```   */
  let monthDayYearArray: string[] = splitString(firstPartOfDate, ",");

  //Gets the month part
  let unformattedMonth: string = monthDayYearArray[1].trim();

  //Gets the number day of the month inside the string
  let unformattedNumericDay: number = Number(
    splitString(unformattedMonth, " ")[1]
  );

  unformattedMonth = splitString(unformattedMonth, " ")[0];

  let formattedDay = addNumberOrdinalSuffix(unformattedNumericDay);
  let formattedMonth = unformattedMonth.substring(0, 3);

  //Gets the year
  let formattedYear: number = Number(monthDayYearArray[2].trim());

  return `${formattedMonth} ${formattedDay} ${formattedYear}`;
}

/**
 *Formats a number with its ordinal suffix (e.g. "1st", "2nd", "3rd", "4th").

 *@param {number} number The number to format.
 *
 *@returns {string} The formatted string.
 */
export function addNumberOrdinalSuffix(number: number): string {
  const canNotAddSuffix: boolean = number < 0 || typeof number !== "number";

  if (canNotAddSuffix) {
    throw new Error("Cannot add suffix to the value passed in argument");
  }

  const numberIsOverTenButUnderFourteen: boolean = number > 10 && number < 14;
  if (numberIsOverTenButUnderFourteen) {
    return `${number}th`;
  }

  const lastDigit: string = number.toString().slice(-1);
  let suffix: string;

  switch (lastDigit) {
    case "1":
      suffix = "st";
      break;
    case "2":
      suffix = "nd";
      break;
    case "3":
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  return `${number}${suffix}`;
}

/**
 * Copies an object or anrray without using their reference by using the `structuredClone` function
 *
 * ```js
 * const a = [];
 * const b = a;
 * const c = deepCopy(a);
 *
 * a.push(1);
 *
 * console.log(b);
 * → [1]
 *
 * console.log(c);
 * → []
 *
 * ```
 *
 * @param {object | array} objectOrArray Object or array to copy
 * @returns {object | array} A deep copied object
 */
export function deepCopy(objectOrArray: any[]): any[] {
  return structuredClone(objectOrArray);
}

/**
 *Function that transforms date strings in this format:
 * - `dd/mm/yyyy`
 *
 *
 * Into this format:
 * - `mm/dd/yyyy`
 *
 *
 * @param {string} dateString
 * @returns {string} New date in the American format
 */
export function invertDayAndMonth(dateString: string): string {
  const splittedDate: string[] = splitString(dateString, "/");
  const day: string = splittedDate[0];
  const month: string = splittedDate[1];
  const year: string = splittedDate[2];

  return `${month}/${day}/${year}`;
}

/**
 * Function that can sort an array of objects by:
 * - Number
 * - String
 * - Boolean
 * - Date
 *
 * @param {any[]} array Array of objects
 * @param {string} prop Name of the property in the array should be sorted by
 * @param {boolean} reverse Boolean value to know if the array has to be reversed or not
 * @returns A new sorted array
 */
export function sortArrayOfObjects(
  array: any[],
  prop: string,
  reverse: boolean = false
) {
  //To make it easier on the developer we remove any whitespace
  prop = prop.trim();

  //Makes a deep copy of the array
  let newSortedArray: any[] = deepCopy(array);

  //We sort the array
  newSortedArray = newSortedArray.sort((obj1: any, obj2: any) => {
    //We take the first 2 objects
    let propOfObj1: any = obj1[prop];

    let propOfObj2: any = obj2[prop];

    const typeOfObjectProperty: typeofTypes = typeof propOfObj1;
    switch (typeOfObjectProperty) {
      case "string": {
        let dateStringREGEX: RegExp =
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        let isDateAsString: boolean = dateStringREGEX.test(obj1[prop]);

        if (isDateAsString) {
          //We invert the day and month to make it work with the Date contructor
          propOfObj1 = invertDayAndMonth(propOfObj1);
          propOfObj1 = new Date(propOfObj1).toISOString();

          propOfObj2 = invertDayAndMonth(propOfObj2);
          propOfObj2 = new Date(propOfObj2).toISOString();
        }
        //We compare their locale
        return propOfObj1.localeCompare(propOfObj2);
      }
      case "number": {
        //ex: "10" → 10 in case one of them is a string
        propOfObj1 = Number(propOfObj1);
        propOfObj2 = Number(propOfObj2);

        return propOfObj1 - propOfObj2;
      }
      case "boolean": {
        //If true → 1, if false → 0
        propOfObj1 = propOfObj1 ? 1 : 0;
        propOfObj1 = propOfObj1 ? 1 : 0;

        return propOfObj2 - propOfObj1;
      }
      case "object": {
        //We check if the object was created with the `Date` class
        const isDateAsOjbect: boolean = propOfObj1 instanceof Date;

        if (isDateAsOjbect) {
          return propOfObj1 - propOfObj2;
        } else {
          throw "Object passed isn't a date, perhaps it's not an instance of Date or you entered an array?";
        }
      }

      default: {
        throw console.error(
          "An error has occured, the property is undefined or null"
        );
      }
    }
  });

  //Reverse the order of the array if the dev wants to
  if (reverse) {
    return newSortedArray.reverse();
  }

  return newSortedArray;
}

/**
 * Function that filters an array by a string
 *
 * @param {array} arrayToFilter
 * @param {string} string
 * @returns
 */
export function filterArrayByString(arrayToFilter: Array<any>, string: string) {
  let typeofArrayOfFirstItem: typeofTypes = typeof arrayToFilter[0];

  const isArrayOfObjects: boolean = typeofArrayOfFirstItem === "object";

  //To make the filtering more efficient, we're going to use sets
  let filteredSet: Set<unknown> = new Set();

  if (isArrayOfObjects) {
    //We iterate through every object in the array
    for (let object of arrayToFilter) {
      //We iterate through every property in each object
      for (let property in object) {
        let valueOfObject: any = object[property].toString().toLowerCase();

        const stringHasSpaces: boolean = string.trim().includes(" ");

        if (stringHasSpaces) {
          const arrayOfStrings: string[] = splitString(string, " ");

          //If the query contains multiple words, we iterate through each word
          for (const word of arrayOfStrings) {
            let includesQuery: boolean = valueOfObject.includes(
              word.toLocaleLowerCase()
            );

            if (includesQuery) {
              filteredSet.add(object);
              continue;
            }
          }
        } else {
          let includesQuery = valueOfObject.includes(string.toLowerCase());

          if (includesQuery) {
            filteredSet.add(object);
          }
        }
      }
    }
  } else {
    for (let word of arrayToFilter) {
      let includesQuery: boolean = word
        .toString()
        .toLowerCase()
        .includes(string.toLowerCase());
      if (includesQuery) {
        filteredSet.add(word);
      }
    }
  }

  return Array.from(filteredSet);
}

/**
 *Delays the execution of a function by the specified number of milliseconds.
 *
 *@param {number} milliseconds - The number of milliseconds to wait before resolving the promise.
 *@returns {Promise<unknown>} A promise that resolves after the specified number of milliseconds have passed.
 */
export function waitPromiseSuccess(milliseconds: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Waits for a specified number of seconds and then returns a rejected promise with a specified error message.
 * @param {number} seconds - The number of seconds to wait before rejecting the promise.
 * @param {string} errorMessage - The error message to include in the rejection reason.
 * @returns {Promise<unknown>} A promise that rejects after the specified number of seconds have passed.
 */
export function waitPromiseError(
  milliseconds: number,
  errorMessage: string
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(errorMessage);
    }, milliseconds);
  });
}

/**
 * Selects a set amount of random elements from an array without modifying the original array
 * @param {array} array - The array to select random elements from
 * @param {number} count - The number of random elements to select
 * @returns An array containing the selected random elements
 */

export function selectRandomElementsInArray<T>(array: T[], count: number): T[] {
  const result: T[] = [];
  const copiedOldArray: T[] = [...array];

  for (let i = 0; i < count; i++) {
    const randomIndex: number = Math.floor(
      Math.random() * copiedOldArray.length
    );
    result.push(copiedOldArray[randomIndex]);
    copiedOldArray.splice(randomIndex, 1);
  }
  return result;
}
