import { Link } from "@tanstack/react-router";
import { Plus, RotateCcw, Trash2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Mark } from "@/components/bohemia/mark";
import { Button, Eyebrow, Field, controlClass } from "@/components/ui/primitives";
import {
  INQUIRY_LABEL,
  STATUS_LABEL,
  STYLES,
  type InquiryStatus,
  type Show,
  type ShowKind,
  type ShowStatus,
  type StyleName,
} from "@/lib/bohemia/content";
import { useBohemia } from "@/lib/bohemia/store";
import { cn } from "@/lib/utils";

type Panel = "resumen" | "cartelera" | "repertorio" | "musicos" | "solicitudes";

const PANELS: { id: Panel; index: string; label: string }[] = [
  { id: "resumen", index: "01", label: "Resumen" },
  { id: "cartelera", index: "02", label: "Cartelera" },
  { id: "repertorio", index: "03", label: "Repertorio" },
  { id: "musicos", index: "04", label: "Músicos" },
  { id: "solicitudes", index: "05", label: "Solicitudes" },
];

const emptyShow: Omit<Show, "id"> = {
  kind: "especial",
  when: "",
  title: "",
  venue: "",
  city: "Puerto Vallarta",
  time: "",
  status: "confirmado",
};

export function Studio() {
  const state = useBohemia();
  const [panel, setPanel] = useState<Panel>("resumen");
  const [draft, setDraft] = useState(emptyShow);
  const [songTitle, setSongTitle] = useState("");
  const [songStyle, setSongStyle] = useState<StyleName>("Bohemio");
  const active = PANELS.find((item) => item.id === panel) ?? PANELS[0];
  const nuevas = state.inquiries.filter((item) => item.status === "nueva").length;
  const stylesLive = useMemo(
    () => new Set(state.songs.map((song) => song.style)).size,
    [state.songs],
  );

  function addShow(event: FormEvent) {
    event.preventDefault();
    if (!draft.title.trim() || !draft.when.trim() || !draft.venue.trim()) return;
    state.addShow({
      ...draft,
      title: draft.title.trim(),
      when: draft.when.trim(),
      venue: draft.venue.trim(),
      city: draft.city.trim() || "Puerto Vallarta",
      time: draft.time.trim() || "Por definir",
    });
    setDraft(emptyShow);
  }

  function addSong(event: FormEvent) {
    event.preventDefault();
    if (!songTitle.trim()) return;
    state.addSong({ title: songTitle.trim(), style: songStyle });
    setSongTitle("");
  }

  return (
    <div className="min-h-screen bg-bg text-fg lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="border-b border-border lg:min-h-screen lg:border-r lg:border-b-0">
        <div className="flex items-center justify-between gap-3 px-5 py-4 lg:block">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <Mark />
            <span>
              <span className="block font-display text-lg leading-none">Estudio</span>
              <span className="text-xs text-muted">La Bohemia Quartet</span>
            </span>
          </Link>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
            <span className="pulse-dot size-1.5 rounded-full bg-primary" />
            En sala
          </span>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-5 pb-4 lg:grid lg:px-3" aria-label="Panel">
          {PANELS.map((item) => {
            const on = item.id === panel;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPanel(item.id)}
                className={cn(
                  "flex min-h-11 shrink-0 items-center gap-3 px-3 text-left text-sm",
                  on ? "bg-surface text-fg" : "text-muted hover:text-fg",
                )}
              >
                <span className="font-display text-primary">{item.index}</span>
                {item.label}
                {item.id === "solicitudes" && nuevas > 0 ? (
                  <span className="bg-primary px-1.5 text-xs text-primary-fg tabular-nums">{nuevas}</span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="px-5 py-8 md:px-10">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <Eyebrow>
              {active.index} — Sistema Aire
            </Eyebrow>
            <h1 className="mt-2 font-display text-5xl leading-none">{active.label}</h1>
          </div>
          <Button
            variant="line"
            type="button"
            onClick={() => {
              if (window.confirm("¿Volver al contenido de origen? Se borran los cambios de este dispositivo.")) {
                state.reset();
              }
            }}
          >
            <RotateCcw className="size-4" />
            Restaurar
          </Button>
        </header>

        {panel === "resumen" ? (
          <section className="py-8">
            <div className="grid gap-px bg-border sm:grid-cols-3">
              <Metric value={String(state.shows.length).padStart(2, "0")} label="Fechas en cartelera" />
              <Metric value={String(nuevas).padStart(2, "0")} label="Solicitudes nuevas" />
              <Metric value={String(stylesLive).padStart(2, "0")} label="Estilos con piezas" />
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="border border-border p-5">
                <Eyebrow>Próxima salida</Eyebrow>
                {state.shows[0] ? (
                  <>
                    <h2 className="mt-3 font-display text-4xl">{state.shows[0].title}</h2>
                    <p className="mt-2 text-muted">
                      {state.shows[0].venue} · {state.shows[0].when}
                    </p>
                    <p className="mt-4 text-sm tabular-nums">{state.shows[0].time}</p>
                  </>
                ) : (
                  <p className="mt-4 text-muted">Cartelera vacía. Agrega una fecha.</p>
                )}
              </article>
              <article className="border border-border p-5">
                <Eyebrow>Bandeja</Eyebrow>
                {state.inquiries.length === 0 ? (
                  <p className="mt-4 text-muted">
                    Aún no hay cotizaciones. El formulario del sitio cae aquí.
                  </p>
                ) : (
                  <ul className="mt-4 divide-y divide-border">
                    {state.inquiries.slice(0, 3).map((item) => (
                      <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                        <span>
                          <span className="block">{item.name}</span>
                          <span className="text-sm text-muted">{item.eventType}</span>
                        </span>
                        <span className="text-xs uppercase tracking-widest text-primary">
                          {INQUIRY_LABEL[item.status]}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          </section>
        ) : null}

        {panel === "cartelera" ? (
          <section className="grid gap-4 py-8">
            {state.shows.length === 0 ? (
              <p className="text-muted">Sin fechas. La portada mostrará el estado vacío.</p>
            ) : (
              state.shows.map((show) => (
                <article key={show.id} className="grid gap-3 border border-border p-4">
                  <div className="grid gap-3 md:grid-cols-4">
                    <Field label="Cuándo">
                      <input
                        className={controlClass}
                        value={show.when}
                        onChange={(event) => state.updateShow(show.id, { when: event.target.value })}
                      />
                    </Field>
                    <Field label="Título" className="md:col-span-2">
                      <input
                        className={controlClass}
                        value={show.title}
                        onChange={(event) => state.updateShow(show.id, { title: event.target.value })}
                      />
                    </Field>
                    <Field label="Tipo">
                      <select
                        className={controlClass}
                        value={show.kind}
                        onChange={(event) =>
                          state.updateShow(show.id, { kind: event.target.value as ShowKind })
                        }
                      >
                        <option value="residencia">Residencia</option>
                        <option value="especial">Especial</option>
                      </select>
                    </Field>
                    <Field label="Venue" className="md:col-span-2">
                      <input
                        className={controlClass}
                        value={show.venue}
                        onChange={(event) => state.updateShow(show.id, { venue: event.target.value })}
                      />
                    </Field>
                    <Field label="Ciudad">
                      <input
                        className={controlClass}
                        value={show.city}
                        onChange={(event) => state.updateShow(show.id, { city: event.target.value })}
                      />
                    </Field>
                    <Field label="Horario">
                      <input
                        className={controlClass}
                        value={show.time}
                        onChange={(event) => state.updateShow(show.id, { time: event.target.value })}
                      />
                    </Field>
                    <Field label="Estado">
                      <select
                        className={controlClass}
                        value={show.status}
                        onChange={(event) =>
                          state.updateShow(show.id, { status: event.target.value as ShowStatus })
                        }
                      >
                        {(Object.keys(STATUS_LABEL) as ShowStatus[]).map((status) => (
                          <option key={status} value={status}>
                            {STATUS_LABEL[status]}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <div className="flex items-end">
                      <Button variant="line" type="button" onClick={() => state.removeShow(show.id)}>
                        <Trash2 className="size-4" />
                        Quitar
                      </Button>
                    </div>
                  </div>
                </article>
              ))
            )}

            <form onSubmit={addShow} className="grid gap-3 border border-primary/40 p-4">
              <Eyebrow>Nueva fecha</Eyebrow>
              <div className="grid gap-3 md:grid-cols-2">
                <Field label="Cuándo">
                  <input
                    className={controlClass}
                    value={draft.when}
                    placeholder="12 Ene · o VIE · Semanal"
                    onChange={(event) => setDraft({ ...draft, when: event.target.value })}
                    required
                  />
                </Field>
                <Field label="Título">
                  <input
                    className={controlClass}
                    value={draft.title}
                    onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                    required
                  />
                </Field>
                <Field label="Venue">
                  <input
                    className={controlClass}
                    value={draft.venue}
                    onChange={(event) => setDraft({ ...draft, venue: event.target.value })}
                    required
                  />
                </Field>
                <Field label="Horario">
                  <input
                    className={controlClass}
                    value={draft.time}
                    onChange={(event) => setDraft({ ...draft, time: event.target.value })}
                  />
                </Field>
              </div>
              <Button type="submit">
                <Plus className="size-4" />
                Publicar en cartelera
              </Button>
            </form>
          </section>
        ) : null}

        {panel === "repertorio" ? (
          <section className="py-8">
            <form onSubmit={addSong} className="grid gap-3 border border-border p-4 md:grid-cols-[1fr_14rem_auto] md:items-end">
              <Field label="Pieza">
                <input
                  className={controlClass}
                  value={songTitle}
                  onChange={(event) => setSongTitle(event.target.value)}
                  required
                />
              </Field>
              <Field label="Estilo">
                <select
                  className={controlClass}
                  value={songStyle}
                  onChange={(event) => setSongStyle(event.target.value as StyleName)}
                >
                  {STYLES.map((style) => (
                    <option key={style}>{style}</option>
                  ))}
                </select>
              </Field>
              <Button type="submit">
                <Plus className="size-4" />
                Sumar
              </Button>
            </form>
            <div className="mt-6 grid gap-8">
              {STYLES.map((style) => {
                const list = state.songs.filter((song) => song.style === style);
                return (
                  <section key={style}>
                    <h2 className="font-display text-2xl">{style}</h2>
                    {list.length === 0 ? (
                      <p className="mt-2 text-sm text-muted">Sin piezas.</p>
                    ) : (
                      <ul className="mt-2 divide-y divide-border">
                        {list.map((song) => (
                          <li key={song.id} className="flex min-h-12 items-center justify-between gap-3">
                            <span>{song.title}</span>
                            <button
                              type="button"
                              className="grid size-11 place-items-center text-muted hover:text-fg"
                              aria-label={`Quitar ${song.title}`}
                              onClick={() => state.removeSong(song.id)}
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </section>
        ) : null}

        {panel === "musicos" ? (
          <section className="grid gap-4 py-8">
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              Cuatro plazas. El monograma se arma con las dos primeras letras del nombre si lo dejas
              vacío al editar.
            </p>
            {state.musicians.map((musician) => (
              <article key={musician.id} className="grid gap-3 border border-border p-4 md:grid-cols-[4rem_1fr_1fr_1fr]">
                <span className="grid size-12 place-items-center border border-primary font-display text-lg text-primary">
                  {musician.mark}
                </span>
                <Field label="Nombre">
                  <input
                    className={controlClass}
                    value={musician.name}
                    onChange={(event) => {
                      const name = event.target.value;
                      state.updateMusician(musician.id, {
                        name,
                        mark: initials(name, musician.mark),
                      });
                    }}
                  />
                </Field>
                <Field label="Rol">
                  <input
                    className={controlClass}
                    value={musician.role}
                    onChange={(event) => state.updateMusician(musician.id, { role: event.target.value })}
                  />
                </Field>
                <Field label="Instrumento">
                  <input
                    className={controlClass}
                    value={musician.instrument}
                    onChange={(event) =>
                      state.updateMusician(musician.id, { instrument: event.target.value })
                    }
                  />
                </Field>
              </article>
            ))}
          </section>
        ) : null}

        {panel === "solicitudes" ? (
          <section className="grid gap-4 py-8">
            {state.inquiries.length === 0 ? (
              <div className="border border-border p-8">
                <h2 className="font-display text-3xl">Bandeja en silencio</h2>
                <p className="mt-2 max-w-md text-muted">
                  Cuando alguien cotice desde la portada, la solicitud aparece aquí, en este dispositivo.
                </p>
                <Button asChild className="mt-6">
                  <Link to="/">Ir al formulario</Link>
                </Button>
              </div>
            ) : (
              state.inquiries.map((item) => (
                <article key={item.id} className="border border-border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-3xl">{item.name}</h2>
                      <p className="text-sm text-muted">
                        {item.eventType}
                        {item.place ? ` · ${item.place}` : ""}
                        {item.date ? ` · ${item.date}` : ""}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-primary">
                      {INQUIRY_LABEL[item.status]}
                    </span>
                  </div>
                  {item.note ? <p className="mt-4 text-sm leading-relaxed">{item.note}</p> : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(["nueva", "en_curso", "cerrada"] as InquiryStatus[]).map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => state.setInquiryStatus(item.id, status)}
                        className={cn(
                          "min-h-11 border px-3 text-sm",
                          item.status === status
                            ? "border-primary bg-primary text-primary-fg"
                            : "border-border text-muted",
                        )}
                      >
                        {INQUIRY_LABEL[status]}
                      </button>
                    ))}
                    <Button variant="line" type="button" onClick={() => state.removeInquiry(item.id)}>
                      <Trash2 className="size-4" />
                      Archivar
                    </Button>
                  </div>
                </article>
              ))
            )}
          </section>
        ) : null}
      </main>
    </div>
  );
}

function initials(name: string, fallback: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase() || fallback;
  }
  const letters = (parts[0] ?? "").replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ]/g, "");
  return (letters.slice(0, 2) || fallback).toUpperCase();
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-bg p-5">
      <p className="font-display text-5xl tabular-nums text-primary">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
