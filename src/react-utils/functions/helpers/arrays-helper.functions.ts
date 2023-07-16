import { typeofTypes } from "@/react-utils/types/typeof.types";
import { deepCopy, invertDayAndMonth, splitString } from "../helper-functions";

/**
 * Checks if the provided argument value is an array.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
export function checkIfArray(value: any): boolean {
  return Array.isArray(value);
}

/**
 * Creates a new deep copied array of the provided array
 *
 * @param {any} arrayToCopy - The array or list to copy
 *
 * @returns {any[]} - The new array containing the copied elements
 */
export function copyArray(arrayToCopy: any): any[] {
  return Array.from(arrayToCopy);
}

/**
 * Removes elements from an array and optionally inserts new elements in their place using the `splice` method.
 *
 * @param {any[]} originalArray - The array to modify.
 * @param {number} startIndex - The index to start removing elements from.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...any} [items] - The elements to insert into the array.
 *
 * @returns {any[]} - The updated array after the modifications.
 */
export function toSpliced(
  originalArray: any[],
  startIndex: number,
  deleteCount: number,
  ...items: any[]
): any[] {
  // @ts-ignore, will need to be changed from `.splice()` to a `.toSpliced()`
  return originalArray.splice(startIndex, deleteCount, ...items);
}

/**
 * Joins the elements of an array into a string using the specified character as the separator.
 * @param {any[]} array - The array to join.
 * @param {string} [char=""] - The character used as the separator. Defaults to an empty string.
 * @returns {string} The joined string.
 */
export function joinArrayOnChar(array: any[], char: string = ""): string {
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
