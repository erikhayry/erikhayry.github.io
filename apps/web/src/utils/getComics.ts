import website from "$lib/assets/website.json" with { type: "json" };
import { Website, type Website as WebsiteType } from "@library/types";

export function getComics(): WebsiteType {
  return Website.parse(website);
}
