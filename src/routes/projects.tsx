import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Projects } from "@/components/sections";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Internships — Yuvaan Pandey" },
      { name: "description", content: "Cricscore+, Stories From The Stumps, Awaaz Do, Wharton Moneyball Academy, Odisha FC and Bank of India." },
    ],
  }),
  component: () => (
    <Page>
      <Projects />
    </Page>
  ),
});
