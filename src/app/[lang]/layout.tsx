import { notFound } from "next/navigation";
import { isLanguage } from "@/content";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  return children;
}