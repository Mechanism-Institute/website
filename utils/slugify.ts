export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\W+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function deslugify(slug: string) {
  return slug
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letter of each word
}
