import type { CompanyData, ContactLinesSource } from "@/types/templates.types";

/** Fills "{key}" placeholders from templates.json, e.g. fill("Email {email}", { email: "info@xyz.com" }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** An item either carries its own `lines` or points at a company field ("phone", "email", "address") with `source`; its own lines follow the company value. */
export function contactLines(item: ContactLinesSource, company?: CompanyData): string[] {
  if (!item.source) return item.lines ?? [];
  const value = company?.[item.source as "phone" | "email" | "address"];
  const own = value ? (Array.isArray(value) ? value : [value]) : [];
  return [...own, ...(item.lines ?? [])];
}

/** Map links for the company address ("{query}" in the URL templates). */
export function mapUrl(template: string, address: string[]) {
  return fill(template, { query: encodeURIComponent(address.join(" ")) });
}

export const telUrl = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
export const mailUrl = (email: string) => `mailto:${email}`;

/** Where a company contact item links to: the map, a phone call or an email. */
export function contactUrl(source: string | undefined, company: CompanyData) {
  if (source === "address") return mapUrl(company.mapOpenUrl, company.address);
  if (source === "phone") return telUrl(company.phone);
  if (source === "email") return mailUrl(company.email);
  return undefined;
}
