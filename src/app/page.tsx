import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") ?? "";

  const preferredLanguage = acceptLanguage
    .split(",")[0]
    ?.trim()
    .toLowerCase();

  const lang = preferredLanguage?.startsWith("es") ? "es" : "en";

  redirect(`/${lang}`);
}