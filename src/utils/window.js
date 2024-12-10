"use client";

import { useWindowSize } from "@uidotdev/usehooks";

export const useWindowType = () => {
  const { width } = useWindowSize(); // resize event

  if (!width) {
    return;
  }

  if (width > 0 && width <= 400) {
    return "mobile";
  }

  if (width > 400 && width <= 1000) {
    return "tablet";
  }

  if (width > 1000) {
    return "desktop";
  }
};
