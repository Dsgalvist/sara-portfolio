import { notFound } from "next/navigation";
import { content, isLanguage } from "@/content";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import SelectedStories from "@/components/stories/SelectedStories";
import VisualPlayground from "@/components/playground/VisualPlayground";
import CreativeUniverse from "@/components/creative-universe/CreativeUniverse";
import CreativeProcess from "@/components/process/CreativeProcess";
import Journey from "@/components/journey/Journey";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
        <Navbar lang={lang} labels={t.nav} />
        <Hero lang={lang} content={t.hero} />
        <About lang={lang} />
        <SelectedStories lang={lang} />
        <VisualPlayground lang={lang} />
        <CreativeUniverse lang={lang} />
        <CreativeProcess lang={lang} />
        <Journey lang={lang} />
        <Contact lang={lang} />
    </main>
  );
}