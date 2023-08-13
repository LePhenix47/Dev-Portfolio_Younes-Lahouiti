import { typeofTypes } from "@utilities/types/typeof.types";
import {
  areObjectsEqual,
  getPrototypeOf,
  isExactlyAnObject,
} from "./objects.helpers";
import { invertDayAndMonth } from "./string.helpers";

/**
 * Creates a new deep copied array or set of the provided value using `Array.from()`
 *
 * @param {any} arrayToCopy - The array or list to copy
 *
 * @returns {any[]} - The new array containing the copied elements
 */
export function copyArray<DataType>(arrayToCopy: DataType[]): DataType[] {
  // Arrays or sets are copyable with `Array.from()`
  return Array.from(arrayToCopy);
}

/**
 * Checks if the provided argument value is an array using `Array.isArray()`
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
export function isExactlyAnArray<DataType>(value: DataType): boolean {
  return Array.isArray(value);
}

/**
 * Checks if two arrays are exactly the same, including nested arrays and objects.
 *
 * **⚠ WARNING:** The arrays must be sorted beforehand in order for the results to be accurate
 *
 * @param {any[]} arr1 - The first array to compare.
 * @param {any[]} arr2 - The second array to compare.
 * @returns {boolean} - Returns true if the arrays are exactly the same, otherwise false.
 */
export function areArraysEqual<DataType>(
  arr1: DataType[],
  arr2: DataType[]
): boolean {
  const hasInvalidArguments: boolean =
    !arr1 || !arr2 || !isExactlyAnArray(arr1) || !isExactlyAnArray(arr2);
  // Check if either argument is falsy or not an array
  if (hasInvalidArguments) {
    const arr1Prototype = `[${typeof arr1} ${getPrototypeOf(arr1)}]`;
    const arr2Prototype = `[${typeof arr2} ${getPrototypeOf(arr2)}]`;
    throw new TypeError(
      `Invalid input, expected both arguments to be non-null arrays, instead got: \n
     arr1: ${arr1Prototype}, arr2: ${arr2Prototype}`
    );
  }

  const haveDifferentLengths: boolean = arr1.length !== arr2.length;
  // Check if arrays have the same length
  if (haveDifferentLengths) {
    return false;
  }

  // Compare array elements
  for (let i = 0; i < arr1.length; i++) {
    const element1: any = arr1[i];
    const element2: any = arr2[i];

    // Check if elements are objects or arrays
    const areBothArrays: boolean =
      isExactlyAnArray(element1) && isExactlyAnArray(element2);
    if (areBothArrays) {
      const haveDifferentArrayValues = !areArraysEqual(element1, element2);
      if (haveDifferentArrayValues) {
        return false;
      }

      continue;
    }

    const areBothObjects: boolean =
      isExactlyAnObject(element1) && isExactlyAnObject(element2);
    if (areBothObjects) {
      const haveDifferentObjectValues = !areObjectsEqual(element1, element2);
      if (haveDifferentObjectValues) {
        return false;
      }

      continue;
    }

    const haveDifferentValues: boolean = element1 !== element2;
    if (haveDifferentValues) {
      return false;
    }
  }

  return true;
}

/**
 * Removes elements from an array and optionally inserts new elements in their place using the `.splice()` method.
 *
 * @param {any[]} originalArray - The array to modify.
 * @param {number} startIndex - The index to start removing elements from.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...any} [items] - The elements to insert into the array.
 *
 * @returns {any[]} - The updated array after the modifications.
 */
export function toSpliced<DataType>(
  originalArray: DataType[],
  startIndex: number,
  deleteCount: number,
  ...items: any[]
): any[] {
  // @ts-ignore, will need to be changed from `.splice()` to a `.toSpliced()`
  return originalArray.splice(startIndex, deleteCount, ...items);
}

/**
 * Joins the elements of an array into a string using the specified character as the separator using the `.join()` method
 * @param {any[]} array - The array to join.
 * @param {string} [char=""] - The character used as the separator. Defaults to an empty string.
 * @returns {string} The joined string.
 */
export function joinArrayOnChar<DataType>(
  array: DataType[],
  char: string = ""
): string {
  return array.join(char);
}

/**
 * IMPORTANT: As of 31/05/2023, JS will have new NON-MUTABLE array methods:
 *
 * toSorted() for sort()
 * toSpliced() for splice()
 * toReversed() for reverse()
 *
 * So we won't need to make a copy of the array before performing the mutation
 *
 * Source:
 * "I Waited 15 Years For These New Array Methods" by Web Dev Simplified:
 * @link https://www.youtube.com/watch?v=3CBD5JZJJKw
 */

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
export function sortArrayOfObjects<DataType>(
  array: DataType[],
  prop: string,
  reverse: boolean = false
) {
  //To make it easier on the developer we remove any whitespace
  prop = prop.trim();

  //Makes a deep copy of the array
  let newSortedArray: DataType[] = copyArray(array);

  //We sort the array
  newSortedArray = newSortedArray.sort((obj1: any, obj2: any) => {
    //We take the first 2 objects
    let propOfObj1: any = obj1[prop];

    let propOfObj2: any = obj2[prop];

    const typeOfObjectProperty: typeofTypes = typeof propOfObj1;
    switch (typeOfObjectProperty) {
      case "string": {
        const dateStringREGEX: RegExp =
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        const isDateAsString: boolean = dateStringREGEX.test(obj1[prop]);

        if (isDateAsString) {
          //We invert the day and month to make it work with the Date constructor
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
        propOfObj2 = propOfObj2 ? 1 : 0;

        return propOfObj2 - propOfObj1;
      }
      case "object": {
        //We check if the object was created with the `Date` class
        const isDateAsObject: boolean = propOfObj1 instanceof Date;

        if (isDateAsObject) {
          return propOfObj1 - propOfObj2;
        } else {
          throw new TypeError(
            "Object passed isn't a date, perhaps it's not an instance of Date or you entered an array?"
          );
        }
      }

      default: {
        throw new TypeError(
          "An error has occurred, the property is undefined or null"
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
export function filterArrayByString<DataType>(
  arrayToFilter: DataType[],
  string: string,
  isIntersection: boolean = false
): DataType[] {
  const typeofArrayOfFirstItem: typeofTypes = typeof arrayToFilter[0];

  const isArrayOfObjects: boolean = typeofArrayOfFirstItem === "object";

  //To make the filtering more efficient, we're going to use sets
  const filteredSet: Set<DataType> = new Set();

  const normalizedString = string.trim().toLowerCase();

  if (isArrayOfObjects) {
    //We iterate through every object in the array
    arrayOfObjects: for (const object of arrayToFilter) {
      //We iterate through every property in each object
      objectProperties: for (const property in object) {
        const valueOfObject: any = object[property]?.toString().toLowerCase();

        const stringHasSpaces: boolean = normalizedString.includes(" ");

        if (stringHasSpaces) {
          const arrayOfStrings: string[] = string.split(" ");

          //If the query contains multiple words, we iterate through each word
          arrayOfStrings: for (const word of arrayOfStrings) {
            const normalizedWord = (word as string).toLowerCase();

            const includesQuery: boolean =
              valueOfObject.includes(normalizedWord);

            if (includesQuery) {
              filteredSet.add(object);
              continue;
            }
          }
        } else {
          const includesQuery = valueOfObject.includes(normalizedString);

          if (includesQuery) {
            filteredSet.add(object);
          }
        }
      }
    }
  } else {
    for (const word of arrayToFilter) {
      const normalizedWord = (word as string).toLowerCase();
      const includesQuery: boolean = normalizedWord.includes(normalizedString);
      if (includesQuery) {
        filteredSet.add(word);
      }
    }
  }

  return Array.from(filteredSet);
}
