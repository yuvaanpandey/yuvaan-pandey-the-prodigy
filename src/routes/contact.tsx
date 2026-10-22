import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Contact } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yuvaan Pandey" },
      { name: "description", content: "Get in touch with Yuvaan Pandey." },
    ],
  }),
  component: () => (
    <Page>
      <Contact />
    </Page>
  ),
});
