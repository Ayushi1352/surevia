import data from "@/data";

const { nav, footer } = data;

const links = [...nav.links, nav.button, ...footer.columns.flatMap((c) => c.links), ...footer.bottomLinks];

// A page is titled by the label its menu or footer link already carries.
export function pageTitle(href: string): string {
  return links.find((l) => l.href === href)?.label ?? "";
}
