import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Research } from "@/components/sections";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Yuvaan Pandey" },
      { name: "description", content: "IPL Ball Tracking Performance Study — ~140,000 Hawk-Eye deliveries, published in NHSJS and presented at icSPORTS 2026." },
    ],
  }),
  component: () => (
    <Page>
      <Research />
    </Page>
  ),
});
