/**
 * Check if the window object is available.
 *
 * This function is used to verify if the code is running in a browser environment
 * where the window object is accessible. It can be helpful in scenarios where
 * the app uses server-side rendering (SSR) and certain code should only run
 * on the client-side.
 *
 * @throws {Error} Will throw an error if the window object is not available, likely due to server-side rendering (SSR).
 */
export function checkIfWindowIsAvailable() {
  const isNotAvailable: boolean = typeof window === "undefined";
  if (isNotAvailable) {
    throw new Error(
      `Window object is not available, this is probably due to the fact that the app uses server-side rendering (SSR).`
    );
  }
}

/**
 * Checks if the given CSS media query matches the current window.
 *
 * @param cssMediaQuery - The CSS media query to match.
 * @returns Returns `true` if the `cssMediaQuery` matches the current window, otherwise returns `false`.
 * @throws Throws an error if the window object is not available.
 * @example
 * const isMatching = matchesCssMediaQuery("width <= 600px");
 * console.log(isMatching); // true or false
 */
export function matchesCssMediaQuery(cssMediaQuery: string): boolean {
  checkIfWindowIsAvailable();
  return window.matchMedia(cssMediaQuery).matches;
}

/**
 * Check if the viewport matches a media query for a maximum width of 768 pixels (mobile viewport).
 *
 * @returns {boolean} - True if the viewport matches the mobile media query, false otherwise.
 */
export function isMobileViewport(): boolean {
  checkIfWindowIsAvailable();

  return window.matchMedia("width <= 768px").matches;
}

/**
 * Get the dimensions of the window viewport.
 *
 * @throws {Error} Will throw an error if the window object is not available, likely due to server-side rendering (SSR).
 *
 *
 * @returns {{width, height}} - An object containing the width and height of the window viewport in pixels.
 */
export function getWindowDimensions(): { width: number; height: number } {
  checkIfWindowIsAvailable();

  const { innerWidth, innerHeight } = window;

  return {
    width: innerWidth,
    height: innerHeight,
  };
}

/**
 * Scroll the window to the top.
 */
export function scrollWindowTo(x: number = 0, y: number = 0): void {
  checkIfWindowIsAvailable();

  window.scrollTo(x, y);
}
