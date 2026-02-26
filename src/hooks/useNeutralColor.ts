import { useEffect, useState } from "react";

export const neutralColorHex = "#404040";

export function useNeutralColor() {
  const [neutralColor, setNeutralColor] = useState<boolean>(() => {
    const stored = localStorage.getItem("neutralColor");
    return stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("neutralColor", String(neutralColor));
  }, [neutralColor]);

  return [neutralColor, setNeutralColor] as const;
}
