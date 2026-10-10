import data from "@/data";

const { site } = data;

// Contact details live once, under `site`; everything else points at them by field name.
export const contact = {
  address: site.addressLines.join(" "),
  email: site.emails[0],
  phone: site.phones[0],
};

const fields: Record<string, string[]> = {
  address: site.addressLines,
  phones: site.phones,
  phone: [site.phones[0]],
  emails: site.emails,
  email: [site.emails[0]],
  hours: site.hours.map((h) => `${h.days}: ${h.time}`),
  hoursShort: site.hours.map((h) => `${h.daysShort}: ${h.time}`),
};

export function contactLines(item: { field?: string; lines?: string[] }): string[] {
  return item.lines ?? fields[item.field ?? ""] ?? [];
}
