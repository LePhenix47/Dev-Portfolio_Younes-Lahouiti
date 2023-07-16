import { getRandomNumber } from "./numbers-helper.functions";

/**
 * Copies an object (or array though using the `copyArray` function is better)
 * without using their reference by using the `structuredClone` function
 *
 * @param {object | array} objectOrArray Object or array to copy
 * @returns {object | array} A deep copied object
 */
export function copyObject(objectOrArray: any[]): any[] {
  return structuredClone(objectOrArray);
}

/**
 * Retrieves the values of an object inside an array.
 *
 * @param {object} object The object to retrieve values from.
 *
 * @returns {any[]} An array containing the property values of the object.
 */
export function getObjectValues(object: object): any[] {
  //We check that the object passed is indeed an object
  const objectIsDefined: boolean = !Array.isArray(object);

  if (objectIsDefined) {
    //Returns the property values of the object in an array
    return Object.values(object);
  }
  return [];
}

/**
 * Retrieves the properties themselves of an object inside an array.
 *
 * @param {object} object The object to retrieve properties from.
 *
 * @returns An array containing the property names of the object.
 */
export function getObjectProperties(object: object): any[] {
  //We check that the object passed is indeed an object
  const objectIsDefined: boolean = !Array.isArray(object);

  if (objectIsDefined) {
    //Returns the property names of the object in an array
    return Object.keys(object);
  }
  return [];
}

/**
 * Retrieves the property names and values of an object inside an array.
 *
 * @param {object} object The object to retrieve property names and values from.
 *
 * @returns An array containing pairs of property names and values of the object, example:
 *
 * ```js
 * const obj = {foo: "hello", bar: "salve"}
 *
 * let objectKeyValuePair = getObjectEntries(obj);
 *
 * console.log(objectKeyValuePair) → [["foo", "hello"], ["bar", "salve"]]
 * ```
 */
export function getObjectEntries(object: object): any[] {
  //We check that the object passed is indeed an object
  const objectIsDefined: boolean = !Array.isArray(object);

  if (objectIsDefined) {
    //Returns the property names and its values in pair inside an array
    return Object.entries(object);
  }
  return [];
}

/**
 * Update an array of objects by a specific property value while preserving the order of objects inside.
 *
 * @param {Array<object>} arrayOfObjects - The array of objects to update.
 * @param {string} property - The name of the property to compare.
 * @param {object} newObject - The new object to replace the existing one.
 *
 * @returns {Array<object>|null} A new array of objects with the updated object or null if the object was not found.
 */
export function updatePropertyOfObjectArray(
  arrayOfObjects: Array<object>,
  property: string,
  newObject: object
): Array<object> | null {
  /**
   * Object to be updated
   */
  const objectToRemove: object | undefined = arrayOfObjects.find(
    (object: object) =>
      (object as any)[property] === (newObject as any)[property]
  );

  /**
   * Boolean value to know if the object was found
   */
  const notFound: boolean = !objectToRemove;

  if (notFound) {
    return null;
  }

  /**
   * We get the starting index for the object to remove
   */
  const startIndex: number = arrayOfObjects.indexOf(objectToRemove as object);

  const newArray: Array<object> = [
    ...arrayOfObjects.slice(0, startIndex),
    newObject,
    ...arrayOfObjects.slice(startIndex + 1),
  ];

  return newArray;
}

/**
 * Returns a random property from the provided object.
 *
 * @param {object} object - The object to get a random property from.
 *
 * @throws {Error} If the argument is not an object.
 *
 * @returns {string} A random property from the provided object.
 */
export function getRandomPropertyFromObject(object: object): string {
  const isNotAnObject: boolean =
    typeof object !== "object" || Array.isArray(object);
  if (isNotAnObject) {
    throw new TypeError(
      "Unexpected argument value passed, value is not an object"
    );
  }

  const properties: string[] = getObjectProperties(object);

  const randomIndex: number = getRandomNumber(0, properties.length - 1);

  const randomProperty: string = properties[randomIndex];

  return randomProperty;
}
