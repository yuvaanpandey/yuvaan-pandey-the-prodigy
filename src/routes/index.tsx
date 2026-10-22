import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Hero, Marquee, About, Explore } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yuvaan Pandey — Student Athlete, Researcher, Cricketer" },
      { name: "description", content: "Singapore-based student athlete, sports analytics researcher, national cricketer, and entrepreneur. Combining elite sport, research and leadership to create impact." },
      { property: "og:title", content: "Yuvaan Pandey — Singapore" },
      { property: "og:description", content: "Combining elite sport, academic excellence, research and entrepreneurship to create impact on and beyond the field." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Page>
      <Hero />
      <Marquee />
      <About />
      <Explore />
    </Page>
  );
}
