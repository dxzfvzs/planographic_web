import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { isArticlePath } from "../utils/routes";

const scrollPositions = new Map<string, number>();

/**
 * Restores each route's scroll position (keyed by pathname) when navigating
 * via the browser back/forward buttons or the in-page "Zpátky" back button
 * (which marks its navigation with `preserveScroll` state). Any other
 * navigation, e.g. header or hero links, always lands at the top, and
 * article pages always open at the top regardless of navigation type.
 */
export default function useScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const key = location.pathname;
    const shouldRestore =
      !isArticlePath(key) &&
      (navigationType === "POP" || (location.state as { preserveScroll?: boolean } | null)?.preserveScroll === true);

    if (!shouldRestore) {
      window.scrollTo(0, 0);
      if (isArticlePath(key)) return;
    } else {
      window.scrollTo(0, scrollPositions.get(key) ?? 0);
    }

    const handleScroll = () => scrollPositions.set(key, window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, location.state, navigationType]);
}
