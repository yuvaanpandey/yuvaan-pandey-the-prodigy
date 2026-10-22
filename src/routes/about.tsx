import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { About, Education, Skills } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yuvaan Pandey" },
      { name: "description", content: "Singapore national cricketer, IB student at UWCSEA Dover, published sports analytics researcher and founder." },
    ],
  }),
  component: () => (
    <Page>
      <About />
      <Education />
      <Skills />
    </Page>
  ),
});
