import { warn } from "./console.helpers";
import { getRandomNumber } from "./numbers.helpers";
import { areArraysEqual, isExactlyAnArray } from "./arrays.helpers";

/**
 * Copies an object (or array though using the `copyArray` function is better)
 * without using their reference by using the `structuredClone()` function
 *
 * @param {object | array} object Object or array to copy
 * @returns {object | array} A deep copied object
 */
export function copyObject(object: any[]): any[] {
  const isAnArray = isExactlyAnArray(object);
  if (isAnArray) {
    warn(
      "An array was passed to ths function to copyObjects, it's better to use the copyArray function instead"
    );
  }
  return structuredClone(object);
}

/**
 * Gets the prototype type of a value.
 *
 * @param {*} value - The value to get the prototype type from.
 * @returns {string} - The prototype type of the value.
 *
 * @example
 * const array = [1, 2, 3];
 * const object = { name: 'John', age: 30 };
 *
 * console.log(getPrototypeOf(array)); // Output: "Array"
 * console.log(getPrototypeOf(object)); // Output: "Object"
 */
export function getPrototypeOf(value: any): any {
  const prototypeString: string = Object.prototype.toString.call(value);
  const formattedPrototypeString: string = prototypeString.slice(8, -1);
  return formattedPrototypeString;
}

/**
 * Checks if a given value is exactly an object and not an array or null.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is exactly an object, otherwise false.
 */
export function isExactlyAnObject(value: any): boolean {
  const valueType: string = typeof value;
  const valuePrototype: string = getPrototypeOf(value);

  return valueType === "object" && valuePrototype === "Object";
}

/**
 * Checks if two objects are equal up to their property values.
 *
 * @param {object} obj1 - The first object to compare.
 * @param {object} obj2 - The second object to compare.
 * @returns {boolean} - Returns true if the objects are equal, otherwise false.
 */
export function areObjectsEqual<T extends object>(obj1: T, obj2: T): boolean {
  const argumentsAreFalsy: boolean = !obj1 || !obj2;

  const doNotHaveObjectType: boolean =
    typeof obj1 !== "object" || typeof obj2 !== "object";

  const areArrays: boolean = Array.isArray(obj1) || Array.isArray(obj2);

  const argumentsAreNotObjects: boolean =
    areArrays || doNotHaveObjectType || argumentsAreFalsy;
  if (argumentsAreNotObjects) {
    const typeObj1 = `${typeof obj1} ${getPrototypeOf(obj1)}`;
    const typeObj2 = `${typeof obj2} ${getPrototypeOf(obj2)}`;
    throw new TypeError(
      `Invalid input, expected both arguments to be objects, instead got ${typeObj1} and ${typeObj2}`
    );
  }

  const keys1: any[] = getObjectProperties(obj1);
  const keys2: any[] = getObjectProperties(obj2);

  const hasDifferentAmountOfProperties: boolean = keys1.length !== keys2.length;
  if (hasDifferentAmountOfProperties) {
    return false;
  }

  for (const key in obj1) {
    const propertyDoesNotExistOnOtherObject: boolean =
      !obj2.hasOwnProperty(key);

    if (propertyDoesNotExistOnOtherObject) {
      return false;
    }

    const propOfFirstObject: unknown = obj1[key];
    const propOfSecondObject: unknown = obj2[key];

    const propertiesAreArrays: boolean =
      isExactlyAnArray(propOfFirstObject) &&
      isExactlyAnArray(propOfSecondObject);
    if (propertiesAreArrays) {
      const areDifferentArrays: boolean = !areArraysEqual(
        propOfFirstObject as any[],
        propOfSecondObject as any[]
      );
      if (areDifferentArrays) {
        return false;
      }

      continue;
    }

    const propertiesAreObjects: boolean =
      isExactlyAnObject(propOfFirstObject) &&
      isExactlyAnObject(propOfSecondObject);
    if (propertiesAreObjects) {
      const areDifferentObjects: boolean = !areObjectsEqual(
        propOfFirstObject as object,
        propOfSecondObject as object
      );

      if (areDifferentObjects) {
        return false;
      }
      continue;
    }

    const doesNotHaveSamePropertyValues: boolean =
      propOfFirstObject !== propOfSecondObject;
    if (doesNotHaveSamePropertyValues) {
      return false;
    }
  }

  return true;
}

/**
 * Retrieves the values of an object inside an array using `Object.values()`
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
 * Retrieves the properties themselves of an object inside an array using `Object.keys()`
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
 * Retrieves the property names and values of an object inside an array using `Object.entries()`
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
    (object: object) => {
      const currentObject: object = (object as any)[property];
      const newObjectToFind: object = (newObject as any)[property];

      return areObjectsEqual(currentObject, newObjectToFind);
    }
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

/*
 In 2024, we will have the `Object.groupBy()` method :

 const array = [1, 2, 3, 4];


 const res =  Object.groupBy(array, (value, index) =>{
    return value % 2 === 0 ? "even" : "odd";
 })

 console.log(res); 
→ {
    even: [2, 4],
    odd: [1, 3]
  }
 
*/
