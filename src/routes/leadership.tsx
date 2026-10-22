import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Leadership } from "@/components/sections";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Yuvaan Pandey" },
      { name: "description", content: "Captaincy and leadership roles across cricket, basketball, entrepreneurship and service." },
    ],
  }),
  component: () => (
    <Page>
      <Leadership />
    </Page>
  ),
});
