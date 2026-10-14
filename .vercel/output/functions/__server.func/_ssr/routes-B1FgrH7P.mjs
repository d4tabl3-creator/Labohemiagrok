import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Menu, s as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { c as TRACKS, i as GALLERY, l as waLink, n as useBohemia, o as STATUS_LABEL, r as CONTACT, s as STYLES } from "./router-Q4vxVHj3.mjs";
import { i as Mark, n as Eyebrow, o as controlClass, r as Field, t as Button } from "./primitives-L5p7vUe5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B1FgrH7P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		href: "#musica",
		label: "Música"
	},
	{
		href: "#biografia",
		label: "Biografía"
	},
	{
		href: "#cartelera",
		label: "Cartelera"
	},
	{
		href: "#repertorio",
		label: "Repertorio"
	},
	{
		href: "#cotizar",
		label: "Cotizar"
	}
];
function Landing() {
	const shows = useBohemia((s) => s.shows);
	const musicians = useBohemia((s) => s.musicians);
	const songs = useBohemia((s) => s.songs);
	const addInquiry = useBohemia((s) => s.addInquiry);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [style, setStyle] = (0, import_react.useState)("Bohemio");
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		eventType: "Boda",
		date: "",
		place: "",
		note: ""
	});
	const next = shows[0];
	const visibleSongs = (0, import_react.useMemo)(() => songs.filter((song) => song.style === style), [songs, style]);
	function submit(event) {
		event.preventDefault();
		if (!form.name.trim() || !form.eventType.trim()) return;
		addInquiry({
			name: form.name.trim(),
			eventType: form.eventType.trim(),
			date: form.date,
			place: form.place.trim(),
			note: form.note.trim()
		});
		setSent(true);
		setForm({
			name: "",
			eventType: "Boda",
			date: "",
			place: "",
			note: ""
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#inicio",
							className: "flex min-h-11 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-base",
									children: "La Bohemia"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: "Quartet · Puerto Vallarta"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 md:flex",
							"aria-label": "Secciones",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "text-sm text-muted hover:text-fg",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/estudio",
									className: "hidden min-h-11 items-center px-3 text-sm text-muted hover:text-fg sm:inline-flex",
									children: "Estudio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#cotizar",
										children: "Cotizar"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-11 place-items-center border border-border md:hidden",
									"aria-expanded": open,
									"aria-label": open ? "Cerrar menú" : "Abrir menú",
									onClick: () => setOpen((v) => !v),
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "border-t border-border px-5 py-3 md:hidden",
					"aria-label": "Secciones",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "flex min-h-11 items-center text-base",
						onClick: () => setOpen(false),
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/estudio",
						className: "flex min-h-11 items-center text-base text-primary",
						onClick: () => setOpen(false),
						children: "Estudio"
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "inicio",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative min-h-[88vh] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/bohemia/hero.jpg",
								alt: "Escenario del cuarteto: dos guitarras, bajo y batería en una sala oscura",
								className: "absolute inset-0 h-full w-full object-cover",
								width: 1792,
								height: 1008
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "En cartelera · Puerto Vallarta" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-4 font-display text-6xl leading-none text-fg sm:text-7xl md:text-8xl",
											children: ["La Bohemia", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block italic text-primary",
												children: "Quartet"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-lg leading-relaxed text-fg",
											children: "Música que respira. Boleros, jazz, pop y cumbia en una velada que no grita: se cuela."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#musica",
													children: "Escúchanos"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "line",
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: waLink("Hola, quiero cotizar un evento con La Bohemia Quartet."),
													target: "_blank",
													rel: "noreferrer",
													children: ["WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
												})
											})]
										})
									]
								}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#cartelera",
									className: "mt-10 grid gap-2 border border-border bg-bg/80 p-4 backdrop-blur-sm sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-widest text-primary",
											children: "Siguiente"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-2xl",
											children: next.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted",
											children: [
												next.venue,
												" · ",
												next.when
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm tabular-nums text-fg",
											children: next.time
										})
									]
								}) : null]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "musica",
						className: "mx-auto max-w-6xl px-5 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "01 — Música" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
									children: "Nuestras primeras notas"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-base leading-relaxed text-muted",
									children: "Tres piezas en Spotify. Material original, grabado en acústico, para escuchar hacia dónde se inclina una velada completa."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "filament mt-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "divide-y divide-border",
								children: TRACKS.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid gap-3 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl text-primary",
											children: track.index
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-3xl",
											children: track.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted",
											children: track.note
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "line",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: track.url,
												target: "_blank",
												rel: "noreferrer",
												children: ["Spotify", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
											})
										})
									]
								}, track.index))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "biografia",
						className: "border-y border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/bohemia/vino.jpg",
								alt: "Copa de vino y partitura sobre madera oscura",
								className: "aspect-3/2 w-full object-cover",
								width: 1728,
								height: 1152
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "02 — Biografía" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
									children: "Música que respira"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed text-muted",
									children: "La Bohemia Quartet nace del gusto por lo acústico y lo íntimo. Dos guitarras electroacústicas que también cantan, un bajo y una batería: la instrumentación justa para sonar grande sin perder el alma. Boleros, jazz, pop en español e inglés, cumbia reinterpretada y material original."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-muted",
									children: "Base en Puerto Vallarta, con fines de semana fijos en el Sheraton Buganvilias y el Cristal Grand. El resto del tiempo: bodas, cenas, aperturas de hotel y eventos privados."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "mt-8 border-l border-primary pl-4 font-display text-2xl italic text-fg",
									children: "Con aire romántico, bohemio y rico sabor latinoamericano."
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "musicos",
						className: "mx-auto max-w-6xl px-5 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "03 — Los músicos" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl",
								children: "Cuatro en escena"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 grid gap-px bg-border sm:grid-cols-2",
								children: musicians.map((musician, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "bg-bg p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-12 place-items-center border border-border font-display text-lg text-primary",
												children: musician.mark
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs tabular-nums text-muted",
												children: ["0", index + 1]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-6 font-display text-3xl",
											children: musician.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm text-muted",
											children: [
												musician.role,
												" · ",
												musician.instrument
											]
										})
									]
								}, musician.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "cartelera",
						className: "border-y border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-[1fr_1fr] md:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "04 — En cartelera" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
									children: "Dónde escucharnos"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-muted",
									children: "Dos sedes fijas cada semana en Puerto Vallarta, y fechas especiales durante el año. Para eventos privados, cotización directa."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 divide-y divide-border border-y border-border",
								children: shows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "py-8 text-muted",
									children: "Sin fechas publicadas."
								}) : shows.map((show) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid gap-2 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-primary",
											children: show.when
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-2xl",
											children: show.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted",
											children: [
												show.venue,
												" · ",
												show.city
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-wrap items-center gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tabular-nums",
												children: show.time
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "border border-border px-2 py-1 text-xs uppercase tracking-widest text-muted",
												children: STATUS_LABEL[show.status]
											})]
										})
									]
								}, show.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "repertorio",
						className: "mx-auto max-w-6xl px-5 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "05 — Repertorio" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
								children: "Un setlist por velada"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
								children: "Una muestra. El setlist completo se arma a la medida del evento."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-2",
								role: "tablist",
								"aria-label": "Estilos",
								children: STYLES.map((item) => {
									const active = item === style;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										"aria-selected": active,
										onClick: () => setStyle(item),
										className: active ? "min-h-11 border border-primary bg-primary px-4 text-sm text-primary-fg" : "min-h-11 border border-border px-4 text-sm text-muted hover:text-fg",
										children: item
									}, item);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 divide-y divide-border border-y border-border",
								children: visibleSongs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "py-8 text-muted",
									children: "Este estilo aún no tiene piezas en la muestra."
								}) : visibleSongs.map((song, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex min-h-14 items-center justify-between gap-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl",
										children: song.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tabular-nums text-muted",
										children: ["0", index + 1]
									})]
								}, song.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "galeria",
						className: "border-t border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "06 — Galería" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
									children: "En imágenes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6",
									children: GALLERY.map((shot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: index === 0 ? "lg:col-span-4" : "lg:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
											className: "bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: shot.src,
												alt: shot.alt,
												className: "aspect-3/2 w-full object-cover",
												width: 1728,
												height: 1152
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
												className: "flex items-baseline justify-between gap-3 px-1 py-3 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shot.caption }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted",
													children: shot.place
												})]
											})]
										})
									}, shot.src))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "cotizar",
						className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "07 — Hablemos" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
								children: "Cotizar un evento"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-base leading-relaxed text-muted",
								children: "Cuéntanos la fecha, el lugar y el tipo de evento. La solicitud queda en el Estudio para responder con disponibilidad."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-8 grid gap-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-fg underline decoration-border underline-offset-4 hover:decoration-primary",
										href: waLink("Hola, quiero cotizar un evento con La Bohemia Quartet."),
										target: "_blank",
										rel: "noreferrer",
										children: CONTACT.phoneDisplay
									}) })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Correo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-fg underline decoration-border underline-offset-4 hover:decoration-primary",
										href: `mailto:${CONTACT.email}`,
										children: CONTACT.email
									}) })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Instagram"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-fg underline decoration-border underline-offset-4 hover:decoration-primary",
										href: CONTACT.instagram,
										target: "_blank",
										rel: "noreferrer",
										children: CONTACT.instagramHandle
									}) })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Base"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: CONTACT.city })] })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "grid gap-4 border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nombre",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: form.name,
										required: true,
										onChange: (event) => setForm({
											...form,
											name: event.target.value
										}),
										autoComplete: "name"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Tipo de evento",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: controlClass,
											value: form.eventType,
											onChange: (event) => setForm({
												...form,
												eventType: event.target.value
											}),
											children: [
												"Boda",
												"Cena corporativa",
												"Hotel",
												"Privado",
												"Otro"
											].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Fecha",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											className: controlClass,
											value: form.date,
											onChange: (event) => setForm({
												...form,
												date: event.target.value
											})
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Lugar",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: form.place,
										onChange: (event) => setForm({
											...form,
											place: event.target.value
										}),
										placeholder: "Venue o colonia"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nota",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: `${controlClass} min-h-28 py-3`,
										value: form.note,
										onChange: (event) => setForm({
											...form,
											note: event.target.value
										}),
										placeholder: "Horario, invitados, estilo que imaginan"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Enviar al Estudio"
								}),
								sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-primary",
									role: "status",
									children: "Recibida. También puedes escribir por WhatsApp si la fecha es inmediata."
								}) : null
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: ["La Bohemia Quartet · ", CONTACT.city]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/estudio",
						className: "min-h-11 text-sm text-primary",
						children: "Abrir Estudio"
					})]
				})
			})
		]
	});
}
var SplitComponent = Landing;
//#endregion
export { SplitComponent as component };
