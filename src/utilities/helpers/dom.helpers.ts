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
