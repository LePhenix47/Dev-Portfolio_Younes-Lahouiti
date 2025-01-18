/**
 * **Formats a given string into different cases:**
 *
 * `lowercase, UPPERCASE, Title Case and Sentence case`
 *
 * @param {string} string - The string to format
 * @param {string} option - The option to use for formatting. Valid options are `"lowercase"`, `"uppercase"`, `"titlecase"`, or `"sentencecase"`
 *
 * @returns {string} The formatted string
 *
 * @throws {Error} If an invalid option is provided
 * @throws {TypeError} If either the string or the option parameter is not a string
 */
export function formatStringCase(string: string, option: string): string {
  const hasInvalidArguments: boolean =
    typeof string !== "string" || typeof option !== "string";
  if (hasInvalidArguments) {
    throw new TypeError(
      `Invalid arguments, expected string and option to be strings, instead got respective types: ${typeof string} and ${typeof option}`
    );
  }

  const formattedOption: string = option.toLowerCase().trim();

  switch (formattedOption) {
    case "lowercase": {
      return string.toLowerCase();
    }

    case "uppercase": {
      return string.toUpperCase();
    }

    case "titlecase": {
      const words: string[] = string.split(" ");

      for (let i = 0; i < words.length; i++) {
        const firstLetter: string = words[i].charAt(0).toUpperCase();

        const remainingLetters: string = words[i].slice(1).toLowerCase();

        words[i] = firstLetter + remainingLetters;
      }

      return words.join(" ");
    }

    case "sentencecase": {
      const sentences: string[] = string.split(/(?<=[.?!])/);

      for (let i = 0; i < sentences.length; i++) {
        const sentence: string = sentences[i];

        const trimmedSentence: string = sentence.trim();

        const sentenceHasNoWords: boolean = trimmedSentence.length === 0;
        if (sentenceHasNoWords) {
          sentences[i] = "";
          continue;
        }

        // We only make the first letter of the sentence uppercased
        const firstChar: string = trimmedSentence.charAt(0).toUpperCase();

        // We only make the rest of the sentence lowercased
        const restOfSentence: string = trimmedSentence.slice(1).toLowerCase();

        sentences[i] = firstChar + restOfSentence;
      }

      return sentences.join(" ");
    }

    default: {
      throw new Error(
        `Formatting text error: Option not available for: ${option}`
      );
    }
  }
}

/**
 * Removes diacritical marks (accents) from a string using the `.normalize().replace()` methods
 *
 * @param {string} string - The string to remove diacritical marks from.
 * @returns {string} The string without diacritical marks.
 */
export function removeAccents(string: string): string {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Tests a regular expression against a string and
 * returns a boolean value indicating whether the regular expression matches the string using the `.test()` method
 *
 * @param {string} string - The string to test against the regular expression.
 * @param {RegExp} RegularExpression - The regular expression to test against the string.
 * @returns {boolean} - A boolean value indicating whether the regular expression matches the string.
 */
export function testRegExp(string: string, RegularExpression: RegExp): boolean {
  return RegularExpression.test(string);
}

/**
 *Splits a string on a character, word or regular expression using the `.split()` method
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
    newString[i] = formatStringCase(newString[i], "lowercase");
  }

  let formattedString: string = newString.reduce(
    (accumulated, currentValue) => {
      return accumulated + "-" + currentValue;
    }
  );

  return formattedString;
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
 * Checks if a given URL is valid.
 *
 * @param {string} url - The URL to be checked for validity.
 * @returns {boolean} A boolean value indicating whether the provided URL is valid or not.
 *
 * @example
 * let url = "a";
 * console.log(isUrlValid(url)); // Output: false
 *
 * url = "https://www.example.com";
 * console.log(isUrlValid(url)); // Output: true
 */
export function isUrlValid(url: string): boolean {
  try {
    const newUrl = new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Replacer function used as a callback for the `JSON.stringify` method to customize the serialization of certain types of objects,
 * specifically for the Maps and Sets
 *
 * @param key - The key of the object being serialized.
 * @param value - The value of the object being serialized.
 * @returns The serialized representation of the value object with customized serialization for Map and Set objects.
 * @see {@link https://www.builder.io/blog/maps Steve's article on Maps}
 */
export function replacer(key: string, value: any): any {
  if (value instanceof Map) {
    return { __type: "Map", value: Object.fromEntries(value) };
  }
  if (value instanceof Set) {
    return { __type: "Set", value: Array.from(value) };
  }
  return value;
}

/**
 * Replacer function used as a callback for the `JSON.parse` method to customize the serialization of certain types of objects,
 * specifically for the Maps and Sets
 *
 * @param key - The key of the object being serialized.
 * @param value - The value of the object being serialized.
 * @returns The serialized representation of the value object with customized serialization for Map and Set objects.
 * @see {@link https://www.builder.io/blog/maps Steve's article on Maps}
 */
export function reviver(key: string, value: any): any {
  switch (value?.__type) {
    case "Set": {
      return new Set(value?.value);
    }
    case "Map": {
      return new Map(value?.value);
    }

    default:
      return value;
  }
}

/**
 * Splits a string into chunks of the specified size.
 *
 * @example
 * const phoneNumber = "0123456789";
 * splitStringIntoChunks(phoneNumber, 2); // Returns: ["01", "23", "45", "67", "89"]
 *
 * @param {string} [str=""] - The string to be split into chunks.
 * @param {number} [chunkSize=1] - The size of each chunk.
 * @returns {string[]} An array of strings, each of length `chunkSize`.
 */
export function splitStringIntoChunks(str = "", chunkSize = 1) {
  const regex = new RegExp(`.{1,${chunkSize}}`, "g");
  return str.match(regex) || []; // Use match and return the result or an empty array if no match
}
