import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Cricket } from "@/components/sections";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket — Yuvaan Pandey" },
      { name: "description", content: "Cricket journey — Singapore U16 Vice-Captain, U19 and Senior Men's National Squad." },
    ],
  }),
  component: () => (
    <Page>
      <Cricket />
    </Page>
  ),
});
