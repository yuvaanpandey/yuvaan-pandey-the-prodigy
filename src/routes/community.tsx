import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Community } from "@/components/sections";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Yuvaan Pandey" },
      { name: "description", content: "Ummeed Global Concern, Genesis Special School and volunteer tutoring." },
    ],
  }),
  component: () => (
    <Page>
      <Community />
    </Page>
  ),
});
