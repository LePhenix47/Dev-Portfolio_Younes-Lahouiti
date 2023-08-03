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
      const sentences = string.split(/(?<=[.?!])/);

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
 * Removes diacritical marks (accents) from a string.
 *
 * @param {string} string - The string to remove diacritical marks from.
 * @returns {string} The string without diacritical marks.
 */
export function removeAccents(string: string): string {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
