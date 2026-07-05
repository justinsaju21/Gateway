import { getPhotos } from "@/lib/sheets";
import PhotographyPreviewClient from "./PhotographyPreviewClient";

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function PhotographyPage() {
  const photos = await getPhotos();
  // Filter for featured photos if available, otherwise just take the first 4
  const featured = photos.filter(p => p.featured);
  const displayPhotos = featured.length >= 4 ? featured.slice(0, 4) : photos.slice(0, 4);
  return <PhotographyPreviewClient photos={displayPhotos} />;
}
