import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/bohemia/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Bohemia Quartet · Música que respira" },
      {
        name: "description",
        content:
          "Cuarteto acústico de Puerto Vallarta. Boleros, jazz, pop y material original. Residencias en Sheraton Buganvilias y Cristal Grand.",
      },
    ],
  }),
  component: Landing,
});
