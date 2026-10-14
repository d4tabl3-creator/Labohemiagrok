import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, i as RotateCcw, r as Trash2 } from "../_libs/lucide-react.mjs";
import { a as INQUIRY_LABEL, n as useBohemia, o as STATUS_LABEL, s as STYLES } from "./router-Q4vxVHj3.mjs";
import { a as cn, i as Mark, n as Eyebrow, o as controlClass, r as Field, t as Button } from "./primitives-L5p7vUe5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estudio-C2D-K040.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PANELS = [
	{
		id: "resumen",
		index: "01",
		label: "Resumen"
	},
	{
		id: "cartelera",
		index: "02",
		label: "Cartelera"
	},
	{
		id: "repertorio",
		index: "03",
		label: "Repertorio"
	},
	{
		id: "musicos",
		index: "04",
		label: "Músicos"
	},
	{
		id: "solicitudes",
		index: "05",
		label: "Solicitudes"
	}
];
var emptyShow = {
	kind: "especial",
	when: "",
	title: "",
	venue: "",
	city: "Puerto Vallarta",
	time: "",
	status: "confirmado"
};
function Studio() {
	const state = useBohemia();
	const [panel, setPanel] = (0, import_react.useState)("resumen");
	const [draft, setDraft] = (0, import_react.useState)(emptyShow);
	const [songTitle, setSongTitle] = (0, import_react.useState)("");
	const [songStyle, setSongStyle] = (0, import_react.useState)("Bohemio");
	const active = PANELS.find((item) => item.id === panel) ?? PANELS[0];
	const nuevas = state.inquiries.filter((item) => item.status === "nueva").length;
	const stylesLive = (0, import_react.useMemo)(() => new Set(state.songs.map((song) => song.style)).size, [state.songs]);
	function addShow(event) {
		event.preventDefault();
		if (!draft.title.trim() || !draft.when.trim() || !draft.venue.trim()) return;
		state.addShow({
			...draft,
			title: draft.title.trim(),
			when: draft.when.trim(),
			venue: draft.venue.trim(),
			city: draft.city.trim() || "Puerto Vallarta",
			time: draft.time.trim() || "Por definir"
		});
		setDraft(emptyShow);
	}
	function addSong(event) {
		event.preventDefault();
		if (!songTitle.trim()) return;
		state.addSong({
			title: songTitle.trim(),
			style: songStyle
		});
		setSongTitle("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg lg:grid lg:grid-cols-[16rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border-b border-border lg:min-h-screen lg:border-r lg:border-b-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 px-5 py-4 lg:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg leading-none",
						children: "Estudio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "La Bohemia Quartet"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot size-1.5 rounded-full bg-primary" }), "En sala"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-2 overflow-x-auto px-5 pb-4 lg:grid lg:px-3",
				"aria-label": "Panel",
				children: PANELS.map((item) => {
					const on = item.id === panel;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPanel(item.id),
						className: cn("flex min-h-11 shrink-0 items-center gap-3 px-3 text-left text-sm", on ? "bg-surface text-fg" : "text-muted hover:text-fg"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-primary",
								children: item.index
							}),
							item.label,
							item.id === "solicitudes" && nuevas > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-primary px-1.5 text-xs text-primary-fg tabular-nums",
								children: nuevas
							}) : null
						]
					}, item.id);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "px-5 py-8 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [active.index, " — Sistema Aire"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl leading-none",
						children: active.label
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "line",
						type: "button",
						onClick: () => {
							if (window.confirm("¿Volver al contenido de origen? Se borran los cambios de este dispositivo.")) state.reset();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Restaurar"]
					})]
				}),
				panel === "resumen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-px bg-border sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								value: String(state.shows.length).padStart(2, "0"),
								label: "Fechas en cartelera"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								value: String(nuevas).padStart(2, "0"),
								label: "Solicitudes nuevas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								value: String(stylesLive).padStart(2, "0"),
								label: "Estilos con piezas"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Próxima salida" }), state.shows[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl",
									children: state.shows[0].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-muted",
									children: [
										state.shows[0].venue,
										" · ",
										state.shows[0].when
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm tabular-nums",
									children: state.shows[0].time
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: "Cartelera vacía. Agrega una fecha."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Bandeja" }), state.inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: "Aún no hay cotizaciones. El formulario del sitio cae aquí."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 divide-y divide-border",
								children: state.inquiries.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between gap-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted",
										children: item.eventType
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-widest text-primary",
										children: INQUIRY_LABEL[item.status]
									})]
								}, item.id))
							})]
						})]
					})]
				}) : null,
				panel === "cartelera" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-4 py-8",
					children: [state.shows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Sin fechas. La portada mostrará el estado vacío."
					}) : state.shows.map((show) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "grid gap-3 border border-border p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 md:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Cuándo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: show.when,
										onChange: (event) => state.updateShow(show.id, { when: event.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Título",
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: show.title,
										onChange: (event) => state.updateShow(show.id, { title: event.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Tipo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: controlClass,
										value: show.kind,
										onChange: (event) => state.updateShow(show.id, { kind: event.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "residencia",
											children: "Residencia"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "especial",
											children: "Especial"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Venue",
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: show.venue,
										onChange: (event) => state.updateShow(show.id, { venue: event.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Ciudad",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: show.city,
										onChange: (event) => state.updateShow(show.id, { city: event.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Horario",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: controlClass,
										value: show.time,
										onChange: (event) => state.updateShow(show.id, { time: event.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Estado",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: controlClass,
										value: show.status,
										onChange: (event) => state.updateShow(show.id, { status: event.target.value }),
										children: Object.keys(STATUS_LABEL).map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: status,
											children: STATUS_LABEL[status]
										}, status))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "line",
										type: "button",
										onClick: () => state.removeShow(show.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Quitar"]
									})
								})
							]
						})
					}, show.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: addShow,
						className: "grid gap-3 border border-primary/40 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Nueva fecha" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Cuándo",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: controlClass,
											value: draft.when,
											placeholder: "12 Ene · o VIE · Semanal",
											onChange: (event) => setDraft({
												...draft,
												when: event.target.value
											}),
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Título",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: controlClass,
											value: draft.title,
											onChange: (event) => setDraft({
												...draft,
												title: event.target.value
											}),
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Venue",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: controlClass,
											value: draft.venue,
											onChange: (event) => setDraft({
												...draft,
												venue: event.target.value
											}),
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Horario",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: controlClass,
											value: draft.time,
											onChange: (event) => setDraft({
												...draft,
												time: event.target.value
											})
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Publicar en cartelera"]
							})
						]
					})]
				}) : null,
				panel === "repertorio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: addSong,
						className: "grid gap-3 border border-border p-4 md:grid-cols-[1fr_14rem_auto] md:items-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pieza",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: controlClass,
									value: songTitle,
									onChange: (event) => setSongTitle(event.target.value),
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Estilo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: controlClass,
									value: songStyle,
									onChange: (event) => setSongStyle(event.target.value),
									children: STYLES.map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: style }, style))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Sumar"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-8",
						children: STYLES.map((style) => {
							const list = state.songs.filter((song) => song.style === style);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: style
							}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Sin piezas."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 divide-y divide-border",
								children: list.map((song) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex min-h-12 items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: song.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-11 place-items-center text-muted hover:text-fg",
										"aria-label": `Quitar ${song.title}`,
										onClick: () => state.removeSong(song.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})]
								}, song.id))
							})] }, style);
						})
					})]
				}) : null,
				panel === "musicos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-4 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-relaxed text-muted",
						children: "Cuatro plazas. El monograma se arma con las dos primeras letras del nombre si lo dejas vacío al editar."
					}), state.musicians.map((musician) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-3 border border-border p-4 md:grid-cols-[4rem_1fr_1fr_1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center border border-primary font-display text-lg text-primary",
								children: musician.mark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nombre",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: controlClass,
									value: musician.name,
									onChange: (event) => {
										const name = event.target.value;
										state.updateMusician(musician.id, {
											name,
											mark: initials(name, musician.mark)
										});
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Rol",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: controlClass,
									value: musician.role,
									onChange: (event) => state.updateMusician(musician.id, { role: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Instrumento",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: controlClass,
									value: musician.instrument,
									onChange: (event) => state.updateMusician(musician.id, { instrument: event.target.value })
								})
							})
						]
					}, musician.id))]
				}) : null,
				panel === "solicitudes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "grid gap-4 py-8",
					children: state.inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Bandeja en silencio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-muted",
								children: "Cuando alguien cotice desde la portada, la solicitud aparece aquí, en este dispositivo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Ir al formulario"
								})
							})
						]
					}) : state.inquiries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										item.eventType,
										item.place ? ` · ${item.place}` : "",
										item.date ? ` · ${item.date}` : ""
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-primary",
									children: INQUIRY_LABEL[item.status]
								})]
							}),
							item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed",
								children: item.note
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [[
									"nueva",
									"en_curso",
									"cerrada"
								].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => state.setInquiryStatus(item.id, status),
									className: cn("min-h-11 border px-3 text-sm", item.status === status ? "border-primary bg-primary text-primary-fg" : "border-border text-muted"),
									children: INQUIRY_LABEL[status]
								}, status)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "line",
									type: "button",
									onClick: () => state.removeInquiry(item.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Archivar"]
								})]
							})
						]
					}, item.id))
				}) : null
			]
		})]
	});
}
function initials(name, fallback) {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length >= 2) return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase() || fallback;
	return ((parts[0] ?? "").replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ]/g, "").slice(0, 2) || fallback).toUpperCase();
}
function Metric({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-5xl tabular-nums text-primary",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: label
		})]
	});
}
var SplitComponent = Studio;
//#endregion
export { SplitComponent as component };
