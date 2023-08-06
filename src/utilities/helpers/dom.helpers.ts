import { copyArray } from "./arrays.helpers";
import { getPrototypeOf } from "./objects.helpers";

/**
 * Check if an HTML element is null, and if it is, throw an error.
 *
 * @param {HTMLElement | null} element - The HTML element to check.
 * @throws {Error} - Throws an error with the specified error message if the element is null.
 */
export function checkElementNotNull(element: HTMLElement | null): void {
  const elementIsNullOrUndefined: boolean = !element;
  if (elementIsNullOrUndefined) {
    throw new TypeError(
      `Element passed as argument is ${getPrototypeOf(element)}`
    );
  }
}

/**
 * Sets the value of a specified CSS property for the given HTML element.
 *
 * @param {string} property - The name of the style property to set.
 * @param {any} value - The value to set for the specified style property.
 * @param {any} [element=document.body] - The HTML element to set the style property for, **by default is set to the `<body>`**.

* @returns {void}
 */
export function setStyleProperty(
  property: string,
  value: any,
  element: HTMLElement = document.body
): void {
  checkElementNotNull(element);

  const stringifiedValue: string = value.toString();
  return element.style.setProperty(property, stringifiedValue);
}

/**
 * Removes an attribute from an element and sets a new attribute in its place.
 *
 * @param {HTMLElement} element - The element from which to remove the attribute.
 * @param {string} oldAttribute - The name of the attribute to remove.
 * @param {string} newAttribute - The name of the new attribute to set.
 */
export function replaceAttributeBy(
  element: HTMLElement,
  oldAttribute: string,
  newAttribute: string
) {
  element.removeAttribute(oldAttribute);
  element.setAttribute(newAttribute, "");
}

/**
 * Enables the specified element by removing the "disabled" attribute and setting the "enabled" attribute.
 *
 * @param {HTMLElement} element - The element to enable.
 */
export function enableElement(element: HTMLElement): void {
  replaceAttributeBy(element, "disabled", "enabled");
}

/**
 * Disables the specified element by removing the "enabled" attribute and setting the "disabled" attribute.
 *
 * @param {HTMLElement} element - The element to disable.
 */
export function disableElement(element: HTMLElement): void {
  replaceAttributeBy(element, "enabled", "disabled");
}

/**
 * Retrieves the value of the specified attribute from the given element
 *
 * @param {string} attributeName - The name of the attribute to retrieve
 * @param {HTMLElement} element - The element from which to retrieve the attribute
 *
 * @returns {string} The value of the attribute
 */
export function getAttribute(
  attributeName: string,
  element: HTMLElement
): string | null {
  checkElementNotNull(element);

  return element.getAttribute(attributeName);
}

/**
 *
 * Returns an array of strings representing the classes of the specified element.
 *
 * @param {HTMLElement} elementOfReference - The element to retrieve class values from.
 *
 * @returns An array of strings representing the classes of the specified element.
 */
export function getClassListValues(elementOfReference: HTMLElement): string[] {
  return copyArray(elementOfReference.classList);
}

/**
 * Adds a class name to a given element's class list
 * @param {HTMLElement} element - The element to add the class to
 * @param {string} className - The class name to add
 *
 * @returns {void}
 */
export function addClass(element: HTMLElement, className: string): void {
  element.classList.add(className);
}

/**
 * Removes a class name from a given element's class list
 * @param {HTMLElement} element - The element to remove the class from
 * @param {string} className - The class name to remove
 *
 * @returns {void}
 */
export function removeClass(element: HTMLElement, className: string): void {
  element.classList.remove(className);
}

/**
 * Replaces an old class name with a new class name in a given element's class list
 * @param {HTMLElement} element - The element to replace the class name in
 * @param {string} oldClassName - The old class name to replace
 * @param {string} newClassName - The new class name to replace with
 *
 * @returns {void}
 */
export function replaceClass(
  element: HTMLElement,
  oldClassName: string,
  newClassName: string
): void {
  element.classList.replace(oldClassName, newClassName);
}

/**
 * Adds or modifies an attribute to the given element
 *
 * @param {HTMLElement} element The element to add the attribute to
 * @param {string} property The name of the attribute to add
 * @param {any} value The value to set the attribute to
 */
export function modifyAttribute(
  property: string,
  value: any,
  element: HTMLElement
): void {
  element.setAttribute(property, value.toString());
}

/**
 * Get the selected options from a `<select multiple>` element.
 *
 * @param {HTMLSelectElement} selectElement - The HTMLSelectElement from which to get the selected options.
 * @param {boolean} [valuesOnly=false] - If true, only the values of the selected options will be returned. Otherwise, the selected option elements will be returned.
 * @returns {HTMLOptionElement[] | string[]} - An array of selected HTMLOptionElement elements if `valuesOnly` is false, or an array of the values of the selected options if `valuesOnly` is true.
 * @throws {Error} - Throws an error if the provided element is not a HTMLSelectElement.
 */
export function getSelectMultipleOptions(
  selectElement: HTMLSelectElement,
  valuesOnly: boolean = false
): HTMLOptionElement[] | string[] {
  const isNotMultipleSelectElement: boolean =
    selectElement.tagName !== "SELECT" ||
    !getAttribute("multiple", selectElement);

  if (isNotMultipleSelectElement) {
    throw new TypeError(
      `Element passed in argument is not a: ${
        selectElement.tagName !== "SELECT"
          ? "<select> element"
          : "<select> with the 'multiple' attribute"
      } `
    );
  }

  let selectedOptionsArray: HTMLOptionElement[] | string[] = Array.from(
    selectElement.selectedOptions
  );

  if (valuesOnly) {
    selectedOptionsArray = selectedOptionsArray.map(
      (option: HTMLOptionElement) => {
        return option.value;
      }
    );
  }

  return selectedOptionsArray;
}
