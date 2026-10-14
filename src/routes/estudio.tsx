import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/bohemia/studio";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [{ title: "Estudio · La Bohemia Quartet" }],
  }),
  component: Studio,
});
