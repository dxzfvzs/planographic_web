import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = new Map<string, number>();

// Article pages (/:subjectSlug/:sectionSlug/:articleSlug) always open at the top;
// their content loads asynchronously, which makes restoring a mid-article
// position unreliable, so they're excluded from restoration entirely.
function isArticlePath(pathname: string) {
  return pathname.split("/").filter(Boolean).length >= 3;
}

export default function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const key = location.pathname;
    if (isArticlePath(key)) {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollTo(0, scrollPositions.get(key) ?? 0);

    const handleScroll = () => scrollPositions.set(key, window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
}
