/* istanbul ignore file */
export function getImages(): Record<string, { default: string }> {
  return import.meta.glob("$lib/assets/**/*.png", {
    eager: true,
    query: {
      enhanced: true,
    },
  });
}
