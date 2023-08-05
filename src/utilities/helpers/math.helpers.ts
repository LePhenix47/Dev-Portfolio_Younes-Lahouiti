/**
 * Calculates the nth root of a number.
 *
 * *By default acts as a square root `√(x)`*
 *
 * @param {number} value - The value for which to calculate the nth root.
 * @param {number} [root=2] - The degree of the root.
 *
 * @returns {number} The nth root of the value.
 * @throws {Error} If the root is null or if the root of the value is invalid.
 */
export function nthRoot(value: number, root: number = 2): number {
  const rootIsInvalid: boolean = root === 0;
  if (rootIsInvalid) {
    throw new RangeError(
      `The root cannot be null, as it returns an exponent with a division by 0`
    );
  }

  // We check that the value is negative AND that the root is even
  const valueOfRootIsInvalid: boolean = value < 0 && root % 2 === 0;
  if (valueOfRootIsInvalid) {
    /*
      Negative values cannot have an even root
      ∛(-27) = -3 but √(-16) = undefined    
    */
    throw new RangeError(
      `The root ${root} of the value ${value} is invalid, cannot have a negative value with an even root`
    );
  }

  /*
    To avoid JS returning us a NaN even with odd roots of negative values
    We set the value to be positive by taking their absolute value: |x|
    Then we use the formula ⁿ√(x) = x^(1/n)
  */
  const calculatedRoot: number = Math.abs(value) ** (1 / root);

  //And we now return the nth root of a positive or negative value
  return value > 0 ? calculatedRoot : -1 * calculatedRoot;
}

/**
 * Calculates the logarithm of a value with a specified base.
 * By default acts as a natural logarithm `logₑ(x)` aka `Ln(x)`
 *
 * @param {number} value - The value for which to calculate the logarithm.
 * @param {number} [base= Math.E] - The base of the logarithm. Default is Euler's number.
 *
 *  @returns {number | NaN} The logarithm of the value or Not A Number `NaN` if the arguments passed are invalid
 */
export function logarithm(value: number, base: number = Math.E): number {
  /*
    We check that the base is positive but also different than 1
    since log(1) = 0 and logₙ(x) = log(x)/log(n), a base of 1 would give a division by 0  
  */
  const baseIsInvalid: boolean = base <= 0 || base === 1;
  if (baseIsInvalid) {
    throw new RangeError(
      `The base of the logarithm ${
        base <= 0 ? "is negative or null" : "returns a division by 0"
      }`
    );
  }

  //Logarithmic functions cannot have a negative or null value
  const valueIsInvalid: boolean = value <= 0;
  if (valueIsInvalid) {
    throw new RangeError(
      `The value passed to the logarithm is ${value < 0 ? "negative" : "null"}`
    );
  }

  return Math.log(value) / Math.log(base);
}

/**
 * Converts a hexadecimal string to its decimal equivalent.
 * @param {string} hexadecimal - The hexadecimal string to convert.
 * @returns {number} The decimal representation of the hexadecimal value.
 */
export function hexadecimalToDecimal(hexadecimal: string): number {
  return Number(`0x${hexadecimal}`);
}

/**
 * Converts a decimal value to its hexadecimal equivalent.
 * @param {number} decimal - The decimal value to convert.
 * @returns {string} The hexadecimal representation of the decimal value.
 */
export function decimalToHexadecimal(decimal: number): string {
  return decimal.toString(16);
}
