/** Fills "{key}" placeholders from templates.json, e.g. fill("Rated {rating} out of 5", { rating: 5 }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** The lines of a templates.json text; "\n" in the text starts a new line. */
export function lines(text: string) {
  return text.split(/\r?\n/);
}
