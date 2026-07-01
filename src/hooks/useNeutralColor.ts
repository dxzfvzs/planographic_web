import { useEffect, useState } from "react";

export const neutralColorHex = "#404040";

/**
 * Persists the neutral-vs-subject-color theme preference to localStorage,
 * falling back to the subject color when storage is unavailable (e.g. private browsing).
 */
export function useNeutralColor() {
  const [neutralColor, setNeutralColor] = useState<boolean>(() => {

    try {
      return localStorage.getItem("neutralColor") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("neutralColor", String(neutralColor));
    } catch {
      // ignore
    }
  }, [neutralColor]);

  return [neutralColor, setNeutralColor] as const;
}
