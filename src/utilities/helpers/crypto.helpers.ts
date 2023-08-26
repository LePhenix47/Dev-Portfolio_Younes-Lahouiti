/**
 * Generates a random UUID using the native crypto object.
 *
 * @returns {string} A randomly generated UUID.
 */
export function getCryptoRandomUUID(): string {
  return crypto.randomUUID();
}

/**
 * Generate a random unsigned integer of specified bit size using the `crypto` object.
 *
 * @param {number} bitSize - The bit size of the generated random value (8, 16, or 32)
 *
 * @returns {Uint8Array | Uint16Array | Uint32Array} An array of unsigned integers representing the random value
 *
 * @throws {TypeError} If the bitSize is not a valid number or not 8, 16, or 32
 *
 */
export function getCryptoRandomValues(
  bitSize: 8 | 16 | 32 = 8
): Uint8Array | Uint16Array | Uint32Array {
  const hasInvalidBitType: boolean = typeof bitSize !== "number";
  if (hasInvalidBitType) {
    throw new TypeError("Type must be a number");
  }

  const validTypes: Array<number> = [8, 16, 32];
  const hasInvalidBitValue: boolean = !validTypes.includes(bitSize);
  if (hasInvalidBitValue) {
    throw new TypeError("Type must be 8, 16 or 32");
  }

  let unsignedIntegersValue: Uint8Array | Uint16Array | Uint32Array | null =
    null;

  switch (bitSize) {
    case 8: {
      unsignedIntegersValue = new Uint8Array(1);
      break;
    }
    case 16: {
      unsignedIntegersValue = new Uint16Array(1);
      break;
    }
    case 32: {
      unsignedIntegersValue = new Uint32Array(1);
      break;
    }
  }

  return crypto.getRandomValues(unsignedIntegersValue);
}

/**
 * Generates a cryptographic hash of the provided data using the specified algorithm
 * @param {string | undefined} data - The data to be hashed
 *
 * @param {string} hashingAlgorithm - The hashing algorithm to use (default: `"SHA-256"`)
 *
 * @returns {Promise<string | null>} A Promise that resolves to the hash as a hexadecimal string or `null` if an error occurs
 *
 */
export async function generateCryptoHash(
  data: string | undefined,
  hashingAlgorithm: string = "SHA-256"
): Promise<string | null> {
  const hasInvalidArguments = !data || typeof hashingAlgorithm !== "string";
  if (hasInvalidArguments) {
    const errorMessage = `Invalid arguments: data ${
      !data ? "is missing or undefined" : `type is ${typeof data}`
    }, hashingAlgorithm ${
      typeof hashingAlgorithm !== "string"
        ? `type is ${typeof hashingAlgorithm}`
        : "is not provided"
    }`;

    throw new TypeError(errorMessage);
  }

  try {
    const encoder: TextEncoder = new TextEncoder();
    const dataBuffer: Uint8Array = encoder.encode(data);

    // Generate a random salt value
    const saltBuffer = getCryptoRandomValues(16); // 16 bytes for the salt

    // Concatenate the data and the salt
    const saltedData = new Uint8Array(dataBuffer.length + saltBuffer.length);
    saltedData.set(dataBuffer);
    saltedData.set(saltBuffer, dataBuffer.length);

    const hashBuffer: ArrayBuffer = await crypto.subtle.digest(
      hashingAlgorithm,
      saltedData
    );

    const unsigned8BitIntegersArray: Uint8Array = new Uint8Array(hashBuffer);

    const hashArray: Array<number> = Array.from(unsigned8BitIntegersArray);
    const hashHex: string = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  } catch (error) {
    console.error(error);

    return null;
  }
}
