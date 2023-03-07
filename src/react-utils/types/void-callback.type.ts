//React
import React from "react";

/**
 * Callback function that takes in a React-JS event as an argument
 *
 * The argument is optional
 */
export type voidCallback = (
  event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => void;
