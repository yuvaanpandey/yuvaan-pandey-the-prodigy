import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Achievements } from "@/components/sections";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Yuvaan Pandey" },
      { name: "description", content: "Academic and athletic honours — Sigma Xi, SMO Platinum, Phoenix Roll of Honour, film festival awards and more." },
    ],
  }),
  component: () => (
    <Page>
      <Achievements />
    </Page>
  ),
});
