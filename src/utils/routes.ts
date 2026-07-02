/**
 * Article pages are routed as /:subjectSlug/:sectionSlug/:articleSlug —
 * three non-empty path segments.
 *
 * @param pathname The current route path
 */
export function isArticlePath(pathname: string) {
  return pathname.split("/").filter(Boolean).length >= 3;
}
