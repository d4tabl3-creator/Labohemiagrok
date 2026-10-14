import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Mark } from "@/components/bohemia/mark";
import { Button, Eyebrow, Field, controlClass } from "@/components/ui/primitives";
import {
  CONTACT,
  GALLERY,
  STATUS_LABEL,
  STYLES,
  TRACKS,
  waLink,
  type StyleName,
} from "@/lib/bohemia/content";
import { useBohemia } from "@/lib/bohemia/store";

const NAV = [
  { href: "#musica", label: "Música" },
  { href: "#biografia", label: "Biografía" },
  { href: "#cartelera", label: "Cartelera" },
  { href: "#repertorio", label: "Repertorio" },
  { href: "#cotizar", label: "Cotizar" },
];

export function Landing() {
  const shows = useBohemia((s) => s.shows);
  const musicians = useBohemia((s) => s.musicians);
  const songs = useBohemia((s) => s.songs);
  const addInquiry = useBohemia((s) => s.addInquiry);
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<StyleName>("Bohemio");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    eventType: "Boda",
    date: "",
    place: "",
    note: "",
  });

  const next = shows[0];
  const visibleSongs = useMemo(
    () => songs.filter((song) => song.style === style),
    [songs, style],
  );

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.eventType.trim()) return;
    addInquiry({
      name: form.name.trim(),
      eventType: form.eventType.trim(),
      date: form.date,
      place: form.place.trim(),
      note: form.note.trim(),
    });
    setSent(true);
    setForm({ name: "", eventType: "Boda", date: "", place: "", note: "" });
  }

  return (
    <div className="bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
          <a href="#inicio" className="flex min-h-11 items-center gap-3">
            <Mark />
            <span className="leading-tight">
              <span className="block font-display text-base">La Bohemia</span>
              <span className="block text-xs text-muted">Cuarteto acústico</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Secciones">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-fg">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/estudio" className="hidden min-h-11 items-center px-3 text-sm text-muted hover:text-fg sm:inline-flex">
              Estudio
            </Link>
            <Button asChild>
              <a href="#cotizar">Cotizar</a>
            </Button>
            <button
              type="button"
              className="grid size-11 place-items-center border border-border md:hidden"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-border px-5 py-3 md:hidden" aria-label="Secciones">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-base"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link to="/estudio" className="flex min-h-11 items-center text-base text-primary" onClick={() => setOpen(false)}>
              Estudio
            </Link>
          </nav>
        ) : null}
      </header>

      <main id="inicio">
        <section className="relative min-h-[88vh] overflow-hidden">
          <img
            src="/bohemia/hero.jpg"
            alt="Escenario del cuarteto: dos guitarras, bajo y batería en una sala oscura"
            className="absolute inset-0 h-full w-full object-cover"
            width={1792}
            height={1008}
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24">
            <div className="rise max-w-3xl">
              <Eyebrow>En cartelera · Puerto Vallarta</Eyebrow>
              <h1 className="mt-4 font-display text-6xl leading-none text-fg sm:text-7xl md:text-8xl">
                La Bohemia
                <span className="mt-1 block italic text-primary">Quartet</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg">
                Cuarteto acústico. Música que respira: boleros, jazz, pop y cumbia en una velada que no grita, se cuela.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#musica">Escúchanos</a>
                </Button>
                <Button variant="line" asChild>
                  <a
                    href={waLink("Hola, quiero cotizar un evento con La Bohemia Quartet.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
            {next ? (
              <a
                href="#cartelera"
                className="mt-10 grid gap-2 border border-border bg-bg/80 p-4 backdrop-blur-sm sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="text-xs uppercase tracking-widest text-primary">Siguiente</span>
                <span>
                  <span className="block font-display text-2xl">{next.title}</span>
                  <span className="text-sm text-muted">
                    {next.venue} · {next.when}
                  </span>
                </span>
                <span className="text-sm tabular-nums text-fg">{next.time}</span>
              </a>
            ) : null}
          </div>
        </section>

        <section id="musica" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <Eyebrow>01 — Música</Eyebrow>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Nuestras primeras notas
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Tres piezas en Spotify. Material original, grabado en acústico, para escuchar hacia dónde
              se inclina una velada completa.
            </p>
          </div>
          <div className="filament mt-8" />
          <ul className="divide-y divide-border">
            {TRACKS.map((track) => (
              <li key={track.index} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                <span className="font-display text-2xl text-primary">{track.index}</span>
                <span>
                  <span className="block font-display text-3xl">{track.title}</span>
                  <span className="text-sm text-muted">{track.note}</span>
                </span>
                <Button variant="line" asChild>
                  <a href={track.url} target="_blank" rel="noreferrer">
                    Spotify
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </section>

        <section id="biografia" className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
            <img
              src="/bohemia/vino.jpg"
              alt="Copa de vino y partitura sobre madera oscura"
              className="aspect-3/2 w-full object-cover"
              width={1728}
              height={1152}
            />
            <div>
              <Eyebrow>02 — Biografía</Eyebrow>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Música que respira</h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                La Bohemia Quartet es un cuarteto acústico. Nace del gusto por lo íntimo: dos guitarras
                electroacústicas que también cantan, un bajo y una batería. La instrumentación justa
                para sonar grande sin perder el alma. Boleros, jazz, pop en español e inglés, cumbia
                reinterpretada y material original.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Base en Puerto Vallarta, con fines de semana fijos en el Sheraton Buganvilias y el Cristal
                Grand. El resto del tiempo: bodas, cenas, aperturas de hotel y eventos privados.
              </p>
              <blockquote className="mt-8 border-l border-primary pl-4 font-display text-2xl italic text-fg">
                Con aire romántico, bohemio y rico sabor latinoamericano.
              </blockquote>
            </div>
          </div>
        </section>

        <section id="musicos" className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>03 — Los músicos</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">Cuatro en escena</h2>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {musicians.map((musician, index) => (
              <li key={musician.id} className="bg-bg p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center border border-border font-display text-lg text-primary">
                    {musician.mark}
                  </span>
                  <span className="text-xs tabular-nums text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl">{musician.name}</h3>
                <p className="mt-2 text-sm text-muted">
                  {musician.role} · {musician.instrument}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="cartelera" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>04 — En cartelera</Eyebrow>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                  Dónde escucharnos
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Dos sedes fijas cada semana en Puerto Vallarta, y fechas especiales durante el año. Para
                eventos privados, cotización directa.
              </p>
            </div>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {shows.length === 0 ? (
                <li className="py-8 text-muted">Sin fechas publicadas.</li>
              ) : (
                shows.map((show) => (
                  <li
                    key={show.id}
                    className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6"
                  >
                    <span className="text-sm text-primary">{show.when}</span>
                    <span>
                      <span className="block font-display text-2xl">{show.title}</span>
                      <span className="text-sm text-muted">
                        {show.venue} · {show.city}
                      </span>
                    </span>
                    <span className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="tabular-nums">{show.time}</span>
                      <span className="border border-border px-2 py-1 text-xs uppercase tracking-widest text-muted">
                        {STATUS_LABEL[show.status]}
                      </span>
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>

        <section id="repertorio" className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>05 — Repertorio</Eyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Un setlist por velada</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Una muestra. El setlist completo se arma a la medida del evento.
          </p>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Estilos">
            {STYLES.map((item) => {
              const active = item === style;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setStyle(item)}
                  className={
                    active
                      ? "min-h-11 border border-primary bg-primary px-4 text-sm text-primary-fg"
                      : "min-h-11 border border-border px-4 text-sm text-muted hover:text-fg"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {visibleSongs.length === 0 ? (
              <li className="py-8 text-muted">Este estilo aún no tiene piezas en la muestra.</li>
            ) : (
              visibleSongs.map((song, index) => (
                <li key={song.id} className="flex min-h-14 items-center justify-between gap-4 py-3">
                  <span className="font-display text-2xl">{song.title}</span>
                  <span className="text-xs tabular-nums text-muted">0{index + 1}</span>
                </li>
              ))
            )}
          </ul>
        </section>

        <section id="galeria" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Eyebrow>06 — Galería</Eyebrow>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">En imágenes</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {GALLERY.map((shot, index) => (
                <li key={shot.src} className={index === 0 ? "lg:col-span-4" : "lg:col-span-2"}>
                  <figure className="bg-bg">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="aspect-3/2 w-full object-cover"
                      width={1728}
                      height={1152}
                    />
                    <figcaption className="flex items-baseline justify-between gap-3 px-1 py-3 text-sm">
                      <span>{shot.caption}</span>
                      <span className="text-muted">{shot.place}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cotizar" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <Eyebrow>07 — Hablemos</Eyebrow>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Cotizar un evento</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Cuéntanos la fecha, el lugar y el tipo de evento. La solicitud queda en el Estudio para
              responder con disponibilidad.
            </p>
            <dl className="mt-8 grid gap-4 text-sm">
              <div>
                <dt className="text-muted">WhatsApp</dt>
                <dd>
                  <a className="text-fg underline decoration-border underline-offset-4 hover:decoration-primary" href={waLink("Hola, quiero cotizar un evento con La Bohemia Quartet.")} target="_blank" rel="noreferrer">
                    {CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Correo</dt>
                <dd>
                  <a className="text-fg underline decoration-border underline-offset-4 hover:decoration-primary" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Instagram</dt>
                <dd>
                  <a className="text-fg underline decoration-border underline-offset-4 hover:decoration-primary" href={CONTACT.instagram} target="_blank" rel="noreferrer">
                    {CONTACT.instagramHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Base</dt>
                <dd>{CONTACT.city}</dd>
              </div>
            </dl>
          </div>
          <form onSubmit={submit} className="grid gap-4 border border-border bg-surface p-5">
            <Field label="Nombre">
              <input
                className={controlClass}
                value={form.name}
                required
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                autoComplete="name"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Tipo de evento">
                <select
                  className={controlClass}
                  value={form.eventType}
                  onChange={(event) => setForm({ ...form, eventType: event.target.value })}
                >
                  {["Boda", "Cena corporativa", "Hotel", "Privado", "Otro"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="Fecha">
                <input
                  type="date"
                  className={controlClass}
                  value={form.date}
                  onChange={(event) => setForm({ ...form, date: event.target.value })}
                />
              </Field>
            </div>
            <Field label="Lugar">
              <input
                className={controlClass}
                value={form.place}
                onChange={(event) => setForm({ ...form, place: event.target.value })}
                placeholder="Venue o colonia"
              />
            </Field>
            <Field label="Nota">
              <textarea
                className={`${controlClass} min-h-28 py-3`}
                value={form.note}
                onChange={(event) => setForm({ ...form, note: event.target.value })}
                placeholder="Horario, invitados, estilo que imaginan"
              />
            </Field>
            <Button type="submit">Enviar al Estudio</Button>
            {sent ? (
              <p className="text-sm text-primary" role="status">
                Recibida. También puedes escribir por WhatsApp si la fecha es inmediata.
              </p>
            ) : null}
          </form>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Mark />
            <span className="text-sm text-muted">Cuarteto acústico · {CONTACT.city}</span>
          </div>
          <Link to="/estudio" className="min-h-11 text-sm text-primary">
            Abrir Estudio
          </Link>
        </div>
      </footer>
    </div>
  );
}
