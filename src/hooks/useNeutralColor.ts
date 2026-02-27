import { useEffect, useState } from "react";

export const neutralColorHex = "#404040";

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
