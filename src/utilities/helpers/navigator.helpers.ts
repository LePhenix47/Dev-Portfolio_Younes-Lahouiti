import { warn } from "./console.helpers";
import { formatStringCase } from "./string.helpers";
export function checkNavigatorSupport() {
  return typeof navigator === "object";
}

/**
 *Checks if a specific feature is supported the `navigator` object of the user's browser.
 *
 * @param {string} method - The method name to check in the `navigator` object.
 * @returns {boolean} `true` if the method exists, `false` otherwise.
 *
 * @throws {TypeError} If the provided method is not a string.
 * @throws {Error} If the provided method is not supported in the user's browser.
 *
 * @returns {void}
 *
 * @example
 * // Check if the `geolocation` method is supported
 *
 * try {
 *  checkFeatureSupport("geolocation");
 *
 *  console.log("Geolocation is supported in this browser.");
 * } catch(err) {
 *  console.error(err) // If it's not supported on Firefox → "Geolocation is not supported in the Firefox browser"
 * }
 */
export function checkFeatureSupport(method: string): void {
  const navigatorIsNotSupported: boolean = !checkNavigatorSupport();
  if (navigatorIsNotSupported) {
    warn(
      "The navigator object does not exist, this is probably due to the fact that the app's using SSR or a different JS runtime environment"
    );
    return;
  }

  const hasInvalidArgument = typeof method !== "string";
  if (hasInvalidArgument) {
    throw new TypeError(
      `Invalid method type, expected a string but instead got: ${typeof method}`
    );
  }

  const isNotSupported = !(method in navigator);
  if (isNotSupported) {
    const formattedMethodString: string = formatStringCase(
      method,
      "Sentencecase"
    );
    throw new Error(
      `${formattedMethodString} property is not supported in the ${navigator.userAgent} browser`
    );
  }
}

/**
 * Retrieves the current geolocation coordinates (latitude and longitude).
 * Promisified version of the `navigator.geolocation.getCurrentPosition` API.
 *
 * @returns {Promise<{ latitude: number; longitude: number }>} A Promise that resolves with the latitude and longitude coordinates, or rejects with a GeolocationPositionError.
 */
export function getGeolocationCoordinates(): Promise<{
  latitude: number;
  longitude: number;
}> {
  checkFeatureSupport("geolocation");

  const { getCurrentPosition } = navigator.geolocation;

  return new Promise((resolve, reject) => {
    getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error: GeolocationPositionError) => {
        reject(error);
      }
    );
  });
}

/**
 * Promised-based wrapper for the `getUserMedia` function that captures media from the user's device.
 *
 * @param {MediaStreamConstraints} constraints - The media capture constraints.
 * @returns {Promise<MediaStream>} A promise that resolves to a `MediaStream` object representing the captured media.
 * @throws {Error} Throws an error if `mediaDevices` is not supported in the user's browser.
 *
 * @example
 * try {
 *   const constraints = { video: true, audio: true };
 *   const stream = await getUserMedia(constraints);
 *   // Use the `stream` object for your media-related tasks.
 * } catch (error) {
 *   console.error("Error accessing media:", error);
 * }
 */
export function getUserMedia(
  constraints: MediaStreamConstraints
): Promise<MediaStream> {
  checkFeatureSupport("mediaDevices");

  const { getUserMedia } = navigator.mediaDevices;

  return getUserMedia(constraints);
}

/**
 * Detects the name of the browser being used based on the user agent string.
 *
 * @returns {string} The name of the detected browser. Possible values: "Chrome", "Firefox", "Safari", "Edge", "Internet Explorer", "Opera", "Samsung Internet", or "Unknown".
 *
 * @example
 * const browserName = getBrowserName();
 * console.log(`You are using ${browserName}.`);
 */
export function getBrowserName(): string {
  checkFeatureSupport("userAgent");
  const { userAgent } = navigator;

  // Regular expressions to match popular browsers
  const isChrome = /chrome/i.test(userAgent);
  const isFirefox = /firefox/i.test(userAgent);
  const isSafari = /safari/i.test(userAgent);
  const isEdge = /edg/i.test(userAgent);
  const isIE = /msie|trident/i.test(userAgent);
  const isOpera = /opr/i.test(userAgent);
  const isSamsungInternet = /samsungbrowser/i.test(userAgent);

  // Determine the browser name based on the regex matches
  if (isChrome) {
    return "Chrome";
  } else if (isFirefox) {
    return "Firefox";
  } else if (isSafari) {
    return "Safari";
  } else if (isEdge) {
    return "Edge";
  } else if (isIE) {
    return "Internet Explorer"; // Nobody uses it anymore
  } else if (isOpera) {
    return "Opera";
  } else if (isSamsungInternet) {
    return "Samsung Internet";
  } else {
    return "Unknown";
  }
}

/**
 * Checks if the user's device supports touch interactions.
 *
 * @returns {boolean} - `true` if the user's device supports touch, otherwise `false`.
 */
export function isTouchDevice(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

/**
 * Checks if the user's browser is currently connected to the internet.
 *
 * @returns {boolean} - `true` if the browser is online, otherwise `false`.
 */
export function isOnline(): boolean {
  return navigator.onLine;
}

/**
 * Returns the user's preferred language.
 *
 * @returns {string} - The preferred language of the user (e.g., `"it-IT"`, `"en-US"`, `"fr"`, etc.).
 */
export function getPreferredLanguage(): string {
  return navigator.language;
}
